// REACT NATIVE
import { Text, TouchableOpacity, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

export const MainContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: themeColors.veryLightGray,
  flexDirection: 'row',
  justifyContent: 'center',
  paddingHorizontal: 30,
  paddingVertical: 10,
  width: '100%',
});

export const TabItem = styled(TouchableOpacity)(({ active }: { active: boolean }) => ({
  alignItems: 'center',
  backgroundColor: active ? themeColors.mainGreen : themeColors.veryLightGray,
  flex: 1,
  height: 30,
  justifyContent: 'center',
}));

export const TabsContainer = styled(View)({
  borderColor: themeColors.mainGreen,
  borderRadius: 5,
  borderWidth: 1,
  flexDirection: 'row',
  overflow: 'hidden',
});

export const TabTitle = styled(Text)(({ active }: { active: boolean }) => ({
  color: active ? themeColors.white : themeColors.mainGreen,
  fontSize: 16,
}));
