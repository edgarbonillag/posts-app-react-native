// REACT & REACT NATIVE
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// STYLED
import { GoToPostButton, NiceView } from './styled';
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

  render() {
    const { navigation, error, loading, posts } = this.props;
    console.log('error', error, 'loading', loading, 'posts', posts);
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor={theme.darkMainGreen} />
        <SafeAreaView>
          <Text>Posts Screen</Text>
          <GoToPostButton onPress={() => navigation.navigate('PostDetails')}>
            <Text>GO TO POST DETAILS SCREEN</Text>
          </GoToPostButton>
          <NiceView>
            <Text>THIS IS A NICE VIEW</Text>
          </NiceView>
        </SafeAreaView>
      </>
    );
  }
}

export default connector(Posts);
