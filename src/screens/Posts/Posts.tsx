// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// RESOURCES
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

// COMPONENTS
import {
  CustomText,
  PostListItem,
  RefreshButton,
  TabBarAndroid,
  TabBarIos,
} from '../../components';

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
  deleteSpecificPost as deletePostAction,
  deleteAllPosts as deleteAllPostsAction,
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
  deletePost: ({ postId }: { postId: number }) => deletePostAction({ postId }),
  deletePosts: () => deleteAllPostsAction(),
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

interface State {
  tabBarIndex: number;
}

// MAIN CODE
class Posts extends Component<Props> {
  state = {
    tabBarIndex: 0,
  };

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

  deletePost = ({ postId }: { postId: number }) => {
    const { deletePost } = this.props;
    deletePost({ postId });
  };

  deleteAllPosts = () => {
    const { deletePosts } = this.props;
    deletePosts();
  };

  changeTabBarindex = (index: number) => {
    this.setState({ tabBarIndex: index });
  };

  renderListItems = ({ item }: { item: PostEnhanced }) => {
    return (
      <PostListItem
        isFavorite={item.isFavorite}
        isRead={item.isRead}
        onPress={() => this.onPressPostItem({ post: item })}
        onSwipeLeft={() => this.deletePost({ postId: item.id })}
        text={item.title}
      />
    );
  };

  renderSeparatorLine = () => <SeparatorLine />;

  MainContent = () => {
    const { error, loading, posts } = this.props;
    const { tabBarIndex } = this.state;
    const favorites = posts.filter((post) => post.isFavorite === true);

    if (loading) {
      return (
        <LoadingContainer>
          <ActivityIndicator color={themeColors.mainGreen} size="large" />
        </LoadingContainer>
      );
    }

    if (error) {
      return (
        <LoadingContainer>
          <CustomText variant="error">Error: Unable to get Posts from database</CustomText>
        </LoadingContainer>
      );
    }

    if (posts.length === 0) {
      return (
        <LoadingContainer>
          <CustomText>The Posts list is empty</CustomText>
        </LoadingContainer>
      );
    }

    if (favorites.length === 0 && tabBarIndex === 1) {
      return (
        <LoadingContainer>
          <CustomText>You have no favorites yet :(</CustomText>
        </LoadingContainer>
      );
    }

    let data: PostEnhanced[] = [];
    if (tabBarIndex === 0) {
      data = posts;
    } else {
      data = favorites;
    }

    return (
      <FlatList
        data={data}
        ItemSeparatorComponent={this.renderSeparatorLine}
        keyExtractor={(item) => `${item.id}`}
        renderItem={this.renderListItems}
        style={styles.postsFlatlist}
        ListFooterComponent={this.renderSeparatorLine}
      />
    );
  };

  render() {
    const { tabBarIndex } = this.state;
    return (
      <MainContainer>
        <StatusBar barStyle="light-content" backgroundColor={themeColors.darkMainGreen} />
        {isIos ? (
          <TabBarIos onPressTab={this.changeTabBarindex} selectedIndex={tabBarIndex} />
        ) : (
          <TabBarAndroid onPressTab={this.changeTabBarindex} selectedIndex={tabBarIndex} />
        )}
        <this.MainContent />
        {isIos ? (
          <DeleteButton onPress={this.deleteAllPosts}>
            <DeleteText>Delete All</DeleteText>
          </DeleteButton>
        ) : (
          <FloatingDeleteButton onPress={this.deleteAllPosts} style={styles.deleteButtonElevation}>
            <Icon name="md-trash" size={25} color={themeColors.white} />
          </FloatingDeleteButton>
        )}
      </MainContainer>
    );
  }
}

export default connector(Posts);
