// REACT
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { PostDetailsScreen, PostsScreen } from '../screens';

// UTILS
import { themeColors } from '../theme/colors';
import { isIos } from '../utils/platform';

// TYPES
import { Post } from '../types';
export type MainStackParamList = {
  Posts: undefined;
  PostDetails: { post: Post };
};

// MAIN CODE

const Stack = createStackNavigator<MainStackParamList>();
const { Navigator, Screen } = Stack;

const commonScreenOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: themeColors.mainGreen,
    elevation: 0,
  },
  headerTintColor: themeColors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const postDetailsScreenOptions = {
  ...commonScreenOptions,
  headerStyle: {
    backgroundColor: themeColors.mainGreen,
    elevation: 15,
  },
  title: isIos ? 'Post' : '',
};

const MainStack = () => (
  <Navigator initialRouteName="Posts" screenOptions={commonScreenOptions}>
    <Screen component={PostsScreen} name="Posts" />
    <Screen component={PostDetailsScreen} name="PostDetails" options={postDetailsScreenOptions} />
  </Navigator>
);

export default MainStack;
