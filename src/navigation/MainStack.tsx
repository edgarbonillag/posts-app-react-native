import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PostDetailsScreen, PostsScreen } from '../screens';

export type MainStackParamList = {
  Posts: undefined;
  PostDetails: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const { Navigator, Screen } = Stack;

const MainStack = () => (
  <Navigator initialRouteName="Posts">
    <Screen name="Posts" component={PostsScreen} />
    <Screen name="PostDetails" component={PostDetailsScreen} />
  </Navigator>
);

export default MainStack;
