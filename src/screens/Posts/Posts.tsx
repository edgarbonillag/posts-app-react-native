// REACT & REACT NATIVE
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack';

// STYLED
import { GoToPostButton, NiceView } from './styled';
import { theme } from '../../theme/colors';

// TYPES
type PostsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Posts'>;
type Props = {
  navigation: PostsScreenNavigationProp;
};

// MAIN CODE

const Posts = ({ navigation }: Props) => {
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
};

export default Posts;
