// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StatusBar, Text } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// COMPONENTS
import { PostListItem } from '../../components';

// STYLED
import { MainContainer } from './styled';
import { theme } from '../../theme/colors';

// REDUX
import { connect, ConnectedProps } from 'react-redux';
import { getPosts as getPostsAction } from '../../store/actions';

const mapStateToProps = ({ posts }: RootState) => ({
  error: posts.error,
  loading: posts.loading,
  posts: posts.posts,
});

const mapDispatchToProps = {
  getPostsList: () => getPostsAction(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TYPES
import { RootState } from '../../store';
import { Post } from '../../types';
type PostsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Posts'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostsScreenNavigationProp;
};

// MAIN CODE
class Posts extends Component<Props> {
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    const { getPostsList } = this.props;
    getPostsList();
  };

  renderListItems = ({ item, index }: { item: Post; index: number }) => {
    const { navigation } = this.props;
    return (
      <PostListItem
        isFavorite={false}
        isRead={index < 21}
        onPress={() => navigation.navigate('PostDetails', { post: item })}
        text={item.title}
      />
    );
  };

  render() {
    const { error, loading, posts } = this.props;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor={theme.darkMainGreen} />
        <MainContainer>
          {!!error && <Text>{error}</Text>}
          {loading ? (
            <ActivityIndicator color={theme.mainGreen} size="large" />
          ) : (
            <FlatList
              data={posts}
              keyExtractor={(item) => `${item.id}`}
              renderItem={this.renderListItems}
            />
          )}
        </MainContainer>
      </>
    );
  }
}

export default connector(Posts);
