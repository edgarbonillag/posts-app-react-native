// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// RESOURCES
import Icon from 'react-native-vector-icons/Ionicons';

// COMPONENTS
import { CustomText, PostListItem, RefreshButton } from '../../components';

// STYLED
import {
  DeleteButton,
  DeleteText,
  FloatingDeleteButton,
  LoadingContainer,
  MainContainer,
  SeparatorLine,
  styles,
} from './styled';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

// REDUX
import { connect, ConnectedProps } from 'react-redux';
import {
  getPosts as getPostsAction,
  markPostAsRead as markPostAsReadAction,
} from '../../store/actions';

const mapStateToProps = ({ posts }: RootState) => ({
  error: posts.error,
  loading: posts.loading,
  posts: posts.posts,
  updateFlag: posts.updateChangeFlag,
});

const mapDispatchToProps = {
  getPostsList: () => getPostsAction(),
  markPostAsRead: ({ postId }: { postId: number }) => markPostAsReadAction({ postId }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TYPES
import { RootState } from '../../store';
import { PostEnhanced } from '../../types';
type PostsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Posts'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostsScreenNavigationProp;
};

// MAIN CODE
class Posts extends Component<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <RefreshButton onPress={this.getPosts} />,
    });
    this.getPosts();
  }

  getPosts = () => {
    const { getPostsList } = this.props;
    getPostsList();
  };

  onPressPostItem = ({ post }: { post: PostEnhanced }) => {
    const { markPostAsRead, navigation } = this.props;
    navigation.navigate('PostDetails', { post });
    if (!post.isRead) {
      markPostAsRead({ postId: post.id });
    }
  };

  renderListItems = ({ item }: { item: PostEnhanced }) => {
    return (
      <PostListItem
        isFavorite={item.isFavorite}
        isRead={item.isRead}
        onPress={() => this.onPressPostItem({ post: item })}
        text={item.title}
      />
    );
  };

  render() {
    const { error, loading, posts } = this.props;
    return (
      <MainContainer>
        <StatusBar barStyle="light-content" backgroundColor={themeColors.darkMainGreen} />
        {loading ? (
          <LoadingContainer>
            <ActivityIndicator color={themeColors.mainGreen} size="large" />
          </LoadingContainer>
        ) : error ? (
          <LoadingContainer>
            <CustomText variant="error">Error: Unable to get Posts from database</CustomText>
          </LoadingContainer>
        ) : (
          <FlatList
            data={posts}
            ItemSeparatorComponent={() => <SeparatorLine />}
            keyExtractor={(item) => `${item.id}`}
            renderItem={this.renderListItems}
            style={styles.postsFlatlist}
            ListFooterComponent={() => <SeparatorLine />}
          />
        )}
        {isIos ? (
          <DeleteButton>
            <DeleteText>Delete All</DeleteText>
          </DeleteButton>
        ) : (
          <FloatingDeleteButton style={styles.deleteButtonElevation}>
            <Icon name="md-trash" size={25} color={themeColors.white} />
          </FloatingDeleteButton>
        )}
      </MainContainer>
    );
  }
}

export default connector(Posts);
