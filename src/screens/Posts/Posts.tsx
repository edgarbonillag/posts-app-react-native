import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from '../../navigation/MainStack';

type PostsScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Posts'>;

type Props = {
  navigation: PostsScreenNavigationProp;
};

const Posts = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Posts Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostDetails')}
          style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: '100%' }}
        >
          <Text>GO TO POST DETAILS SCREEN</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Posts;
