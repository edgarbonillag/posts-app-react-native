// REACT & REACT NATIVE
import React, { Component } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// STYLED
import { theme } from '../../theme/colors';

// REDUX
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { getCommentsOfAPost as getCommentsAction } from '../../store/actions';

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
};

// MAIN CODE

class PostDetails extends Component<Props> {
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const { getCommentsList } = this.props;
    getCommentsList({ postId: 1 });
  };

  render() {
    const { error, loading, comments } = this.props;
    console.log('error', error, 'loading', loading, 'comments', comments);

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor={theme.darkMainGreen} />
        <SafeAreaView>
          <Text>Post Details Screen</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connector(PostDetails);
