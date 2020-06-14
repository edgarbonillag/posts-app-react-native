// REACT
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { PostDetailsScreen, PostsScreen } from '../screens';

// COMPONENTS
import { FavoriteButton } from '../components';

// UTILS
import { theme } from '../theme/colors';
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
    <Screen
      component={PostDetailsScreen}
      name="PostDetails"
      options={{ headerRight: () => <FavoriteButton />, title: isIos ? 'Post' : '' }}
    />
  </Navigator>
);

export default MainStack;
