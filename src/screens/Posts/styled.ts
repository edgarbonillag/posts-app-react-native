// REACT NATIVE
import { SafeAreaView, StyleSheet, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

export const MainContainer = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: themeColors.veryLightGray,
  flex: 1,
  justifyContent: 'center',
});

export const SeparatorLine = styled(View)({
  backgroundColor: themeColors.lightGray,
  height: 1,
  marginLeft: isIos ? 18 : 0,
  width: '100%',
});

export const styles = StyleSheet.create({
  postsFlatlist: {
    backgroundColor: themeColors.white,
    width: '100%',
  },
});
