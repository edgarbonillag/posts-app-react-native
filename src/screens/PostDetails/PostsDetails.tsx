// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
import { MainStackParamList } from '../../navigation/MainStack';

// COMPONENTS
import { CustomText, FavoriteButton, UserInfo } from '../../components';

// STYLED
import {
  CommentContainer,
  CommentsLoadingContainer,
  CommentsTitle,
  MainContainer,
  SectionWrapper,
  SeparatorLine,
  ScrollContainer,
  VerticalSpace,
} from './styled';
import { themeColors } from '../../theme/colors';

// REDUX
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import {
  getCommentsOfAPost as getCommentsAction,
  getUserDetails as getUserInfoAction,
} from '../../store/actions';
import { Comment, Post, User } from '../../types';
import { FlatList } from 'react-native-gesture-handler';

const mapStateToProps = ({ comments, users }: RootState) => ({
  comments: comments.comments,
  commentsError: comments.error,
  commentsLoading: comments.loading,
  users: users.users,
  userError: users.error,
  userLoading: users.loading,
});

const mapDispatchToProps = {
  getCommentsList: ({ postId }: { postId: number }) => getCommentsAction({ postId }),
  getUserDetails: ({ userId }: { userId: number }) => getUserInfoAction({ userId }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TYPES
type PostDetailsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'PostDetails'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostDetailsScreenNavigationProp;
  post: Post;
};

type PickedUserInfo = Pick<User, 'id' | 'name' | 'email' | 'phone' | 'website'>;

type State = {
  user: PickedUserInfo;
};

// MAIN CODE

class PostDetails extends Component<Props, State> {
  state = {
    user: {
      id: 0,
      name: '',
      email: '',
      phone: '',
      website: '',
    },
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <FavoriteButton onPress={() => Alert.alert('Hello!')} />,
    });
    this.getComments();
    this.getUserInfo();
  }

  getComments = () => {
    const { getCommentsList, post } = this.props;
    getCommentsList({ postId: post.id });
  };

  getUserInfo = () => {
    const { getUserDetails, post, users } = this.props;
    const foundUser = users.find((user) => user.id === post.userId);
    if (foundUser) {
      this.setState({ user: foundUser });
    } else {
      getUserDetails({ userId: post.userId });
    }
  };

  renderFlatlistItem = ({ item }: { item: Comment }) => (
    <CommentContainer>
      <CustomText>{item.body}</CustomText>
    </CommentContainer>
  );

  renderSeparatorComponent = () => <SeparatorLine />;

  render() {
    const {
      comments,
      commentsError,
      commentsLoading,
      post,
      users,
      userError,
      userLoading,
    } = this.props;

    let userInfo: PickedUserInfo = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      website: '',
    };
    const foundUser = users.find((user) => user.id === post.userId);
    if (!userLoading) {
      if (foundUser) {
        const { id, name, email, phone, website } = foundUser;
        userInfo = { id, name, email, phone, website };
      } else if (!userError) {
        this.getUserInfo();
      }
    }

    return (
      <MainContainer>
        <StatusBar barStyle="light-content" backgroundColor={themeColors.darkMainGreen} />
        <ScrollContainer nestedScrollEnabled={false}>
          <VerticalSpace />
          <SectionWrapper>
            <CustomText variant="title">Description</CustomText>
          </SectionWrapper>
          <SectionWrapper>
            <CustomText>{post.body}</CustomText>
          </SectionWrapper>
          <SectionWrapper>
            <UserInfo
              loading={userLoading}
              error={!!userError}
              name={userInfo.name}
              email={userInfo.email}
              phone={userInfo.phone}
              website={userInfo.website}
            />
          </SectionWrapper>
          <CommentsTitle>
            <CustomText variant="subtitle">COMMENTS</CustomText>
          </CommentsTitle>
          {commentsLoading ? (
            <CommentsLoadingContainer>
              <ActivityIndicator color={themeColors.mainGreen} size="large" />
            </CommentsLoadingContainer>
          ) : commentsError ? (
            <CommentsLoadingContainer>
              <CustomText variant="error">Error: Unable to get Comments</CustomText>
            </CommentsLoadingContainer>
          ) : (
            <FlatList
              data={comments}
              ItemSeparatorComponent={this.renderSeparatorComponent}
              keyExtractor={(item) => `${item.id}`}
              ListFooterComponent={this.renderSeparatorComponent}
              renderItem={this.renderFlatlistItem}
              scrollEnabled={false}
            />
          )}
        </ScrollContainer>
      </MainContainer>
    );
  }
}

export default compose(withMappedNavigationParams(), connector)(PostDetails);
