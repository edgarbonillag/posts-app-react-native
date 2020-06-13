// REACT & REACT NATIVE
import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

// STYLED
import { theme } from '../../theme/colors';

// MAIN CODE

const PostDetails = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.darkMainGreen} />
      <SafeAreaView>
        <Text>Post Details Screen</Text>
      </SafeAreaView>
    </>
  );
};

export default PostDetails;
