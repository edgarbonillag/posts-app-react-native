// REACT NATIVE
import { TouchableOpacity, View } from 'react-native';

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

export const IconContainer = styled(View)({
  alignItems: 'center',
  height: 26,
  justifyContent: 'center',
  width: 26,
});

export const MainContainer = styled(TouchableOpacity)({
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
