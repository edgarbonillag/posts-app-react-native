// REACT & REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, StatusBar, Text } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
import { MainStackParamList } from '../../navigation/MainStack';

// COMPONENTS
import { FavoriteButton } from '../../components';

// STYLED
import { theme } from '../../theme/colors';

// REDUX
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { getCommentsOfAPost as getCommentsAction } from '../../store/actions';
import { Post } from 'src/types';
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

  render() {
    const { error, loading, comments } = this.props;
    // console.log('error', error, 'loading', loading, 'comments', comments);

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor={theme.darkMainGreen} />
        <SafeAreaView>
          {!!error && <Text>{error}</Text>}
          {loading ? (
            <ActivityIndicator color={theme.mainGreen} size="large" />
          ) : (
            <FlatList
              data={comments}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => <Text>{item.body}</Text>}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}

export default compose(withMappedNavigationParams(), connector)(PostDetails);
