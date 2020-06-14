// REACT
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { PostDetailsScreen, PostsScreen } from '../screens';

// UTILS
import { theme } from '../theme/colors';
import { Post } from '../types';

// TYPES
export type MainStackParamList = {
  Posts: undefined;
  PostDetails: { post: Post };
};

// MAIN CODE

const Stack = createStackNavigator<MainStackParamList>();
const { Navigator, Screen } = Stack;

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: theme.mainGreen,
  },
  headerTintColor: theme.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStack = () => (
  <Navigator initialRouteName="Posts" screenOptions={commonScreenOptions}>
    <Screen component={PostsScreen} name="Posts" />
    <Screen component={PostDetailsScreen} name="PostDetails" options={{ title: 'Post' }} />
  </Navigator>
);

export default MainStack;
