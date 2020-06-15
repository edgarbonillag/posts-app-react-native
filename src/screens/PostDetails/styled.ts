// REACT NATIVE
import { SafeAreaView } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

export const MainContainer = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: themeColors.veryLightGray,
  flex: 1,
  justifyContent: 'center',
});
