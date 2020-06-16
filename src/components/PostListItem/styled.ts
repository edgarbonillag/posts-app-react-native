// REACT NATIVE
import { View, StyleSheet } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

export const BlueDot = styled(View)({
  backgroundColor: themeColors.azureRadiance,
  borderRadius: 7,
  height: 14,
  width: 14,
});

export const DeleteIconContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: themeColors.deleteRed,
  flex: 1,
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'flex-end',
});

export const IconContainer = styled(View)({
  alignItems: 'center',
  height: 26,
  justifyContent: 'center',
  width: 26,
});

export const MainContainer = styled(RectButton)({
  alignItems: 'center',
  backgroundColor: isIos ? themeColors.white : themeColors.veryLightGray,
  flexDirection: 'row',
  paddingHorizontal: 5,
  paddingBottom: 10,
  paddingTop: isIos ? 10 : 20,
  width: '100%',
});

export const TextContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  marginLeft: 10,
});

export const styles = StyleSheet.create({
  animatedIcon: {
    marginHorizontal: 10,
    width: 30,
  },
});
