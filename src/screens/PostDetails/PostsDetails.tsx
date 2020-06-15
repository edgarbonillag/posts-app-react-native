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
  CommentsTitle,
  LoadingContainer,
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
import { getCommentsOfAPost as getCommentsAction } from '../../store/actions';
import { Comment, Post } from '../../types';
import { FlatList } from 'react-native-gesture-handler';

const mapStateToProps = ({ comments }: RootState) => ({
  error: comments.error,
  loading: comments.loading,
  comments: comments.comments,
});

const mapDispatchToProps = {
  getCommentsList: ({ postId }: { postId: number }) => getCommentsAction({ postId }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TYPES
type PostDetailsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'PostDetails'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostDetailsScreenNavigationProp;
  post: Post;
};

// MAIN CODE

class PostDetails extends Component<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <FavoriteButton onPress={() => Alert.alert('Hello!')} />,
    });
    this.getComments();
  }

  getComments = () => {
    const { getCommentsList, post } = this.props;
    getCommentsList({ postId: post.id });
  };

  renderFlatlistItem = ({ item }: { item: Comment }) => (
    <CommentContainer>
      <CustomText>{item.body}</CustomText>
    </CommentContainer>
  );

  render() {
    const { comments, error, loading, post } = this.props;

    return (
      <MainContainer>
        <StatusBar barStyle="light-content" backgroundColor={themeColors.darkMainGreen} />
        {!!error && !loading ? <CustomText variant="error">{error}</CustomText> : null}
        {loading ? (
          <LoadingContainer>
            <ActivityIndicator color={themeColors.mainGreen} size="large" />
          </LoadingContainer>
        ) : (
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
                name="John Doe"
                email="johndoe@gmail.com"
                phone="1234567890"
                website="www.johndoe.com"
              />
            </SectionWrapper>
            <CommentsTitle>
              <CustomText variant="subtitle">COMMENTS</CustomText>
            </CommentsTitle>
            <FlatList
              data={comments}
              ItemSeparatorComponent={() => <SeparatorLine />}
              keyExtractor={(item) => `${item.id}`}
              ListFooterComponent={() => <SeparatorLine />}
              renderItem={this.renderFlatlistItem}
              scrollEnabled={false}
            />
          </ScrollContainer>
        )}
      </MainContainer>
    );
  }
}

export default compose(withMappedNavigationParams(), connector)(PostDetails);
