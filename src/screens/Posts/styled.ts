// REACT NATIVE
import { SafeAreaView, StyleSheet } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

export const MainContainer = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: themeColors.veryLightGray,
  flex: 1,
  justifyContent: 'center',
});

export const styles = StyleSheet.create({
  postsFlatlist: {
    width: '100%',
  },
});
