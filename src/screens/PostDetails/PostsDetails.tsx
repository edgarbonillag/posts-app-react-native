// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';

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
  markPostAsFavorite as markPostAsFavoriteAction,
} from '../../store/actions';
import { Comment, PostEnhanced, User } from '../../types';

const mapStateToProps = ({ comments, posts, users }: RootState) => ({
  comments: comments.comments,
  commentsError: comments.error,
  commentsLoading: comments.loading,
  postsList: posts.posts,
  updateFlag: posts.updateChangeFlag,
  users: users.users,
  userError: users.error,
  userLoading: users.loading,
});

const mapDispatchToProps = {
  getCommentsList: ({ postId }: { postId: number }) => getCommentsAction({ postId }),
  getUserDetails: ({ userId }: { userId: number }) => getUserInfoAction({ userId }),
  markAsFavorite: ({ postId, isFavorite }: { postId: number; isFavorite: boolean }) =>
    markPostAsFavoriteAction({ postId, isFavorite }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TYPES
type PostDetailsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'PostDetails'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostDetailsScreenNavigationProp;
  post: PostEnhanced;
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
    const { navigation, post } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton filled={post.isFavorite} onPress={this.markPostAsFavorite} />
      ),
    });
    this.getComments();
    this.getUserInfo();
  }

  componentDidUpdate(prevProps: Props) {
    const { navigation, post, postsList: currentPostsList } = this.props;
    const thisPost = currentPostsList.find((postItem) => postItem.id === post.id);

    const { updateFlag } = this.props;
    if (prevProps.updateFlag !== updateFlag && thisPost) {
      navigation.setOptions({
        headerRight: () => (
          <FavoriteButton filled={thisPost.isFavorite} onPress={this.markPostAsFavorite} />
        ),
      });
    }
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

  markPostAsFavorite = () => {
    const { markAsFavorite, post, postsList: currentPostsList } = this.props;

    const thisPost = currentPostsList.find((postItem) => postItem.id === post.id);
    if (thisPost) {
      markAsFavorite({ postId: post.id, isFavorite: !thisPost.isFavorite });
    }
  };

  renderFlatlistItem = ({ item }: { item: Comment }) => (
    <CommentContainer>
      <CustomText>{item.body}</CustomText>
    </CommentContainer>
  );

  renderSeparatorComponent = () => <SeparatorLine />;

  CommentSection = () => {
    const { comments, commentsError, commentsLoading } = this.props;

    if (commentsLoading) {
      return (
        <CommentsLoadingContainer>
          <ActivityIndicator color={themeColors.mainGreen} size="large" />
        </CommentsLoadingContainer>
      );
    }

    if (commentsError) {
      return (
        <CommentsLoadingContainer>
          <CustomText variant="error">Error: Unable to get Comments</CustomText>
        </CommentsLoadingContainer>
      );
    }

    if (comments.length === 0) {
      return (
        <CommentsLoadingContainer>
          <CustomText>The Comments list is empty</CustomText>
        </CommentsLoadingContainer>
      );
    }

    return (
      <FlatList
        data={comments}
        ItemSeparatorComponent={this.renderSeparatorComponent}
        keyExtractor={(item) => `${item.id}`}
        ListFooterComponent={this.renderSeparatorComponent}
        renderItem={this.renderFlatlistItem}
        scrollEnabled={false}
      />
    );
  };

  render() {
    const { post, users, userError, userLoading } = this.props;

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
          <this.CommentSection />
        </ScrollContainer>
      </MainContainer>
    );
  }
}

export default compose(withMappedNavigationParams(), connector)(PostDetails);
