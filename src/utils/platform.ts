import { Dimensions, Platform } from 'react-native';

const IPHONE_X_HEIGHT = 812;
const windowDimensions = Dimensions.get('window');

export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

export const isIos = Platform.OS === 'ios';
export const isIPhoneLessThanX = isIos && WINDOW_HEIGHT < IPHONE_X_HEIGHT;
