// REACT NATIVE
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

export const MainContainer = styled(View)({
  backgroundColor: themeColors.mainGreen,
  flexDirection: 'row',
  height: 50,
  width: '100%',
});

export const TabItem = styled(TouchableOpacity)(({ active }: { active: boolean }) => ({
  alignItems: 'center',
  borderBottomColor: active ? themeColors.white : themeColors.mainGreen,
  borderBottomWidth: 3,
  flex: 1,
  height: '100%',
  justifyContent: 'center',
}));

export const TabTitle = styled(Text)({
  color: themeColors.white,
  fontSize: 16,
});

export const styles = StyleSheet.create({
  tabBarElevation: {
    elevation: 15,
  },
});
