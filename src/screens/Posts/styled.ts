// REACT NATIVE
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos, isIPhoneLessThanX } from '../../utils/platform';

export const DeleteButton = styled(TouchableOpacity)({
  alignItems: 'center',
  backgroundColor: themeColors.deleteRed,
  justifyContent: 'center',
  paddingTop: 15,
  paddingBottom: isIPhoneLessThanX ? 16 : 0,
  width: '100%',
});

export const DeleteText = styled(Text)({
  color: themeColors.white,
  fontSize: 20,
});

export const FloatingDeleteButton = styled(TouchableOpacity)({
  alignItems: 'center',
  backgroundColor: themeColors.deleteRed,
  borderRadius: 24,
  bottom: 15,
  height: 50,
  justifyContent: 'center',
  position: 'absolute',
  right: 15,
  width: 48,
});

export const LoadingContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: themeColors.veryLightGray,
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});

export const MainContainer = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: themeColors.deleteRed,
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});

export const SeparatorLine = styled(View)({
  backgroundColor: themeColors.lightGray,
  height: 1,
  marginLeft: isIos ? 18 : 0,
  width: '100%',
});

export const styles = StyleSheet.create({
  postsFlatlist: {
    backgroundColor: themeColors.veryLightGray,
    width: '100%',
  },
  deleteButtonElevation: {
    elevation: 10,
  },
});
