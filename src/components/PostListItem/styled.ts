// REACT NATIVE
import { TouchableOpacity, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { theme } from '../../theme/colors';

export const ArrowContainer = styled(View)({
  alignItems: 'center',
  height: 30,
  justifyContent: 'center',
  width: 30,
});

export const MainContainer = styled(TouchableOpacity)({
  alignItems: 'center',
  backgroundColor: theme.white,
  borderBottomWidth: 1,
  borderBottomColor: theme.mediumGray,
  flexDirection: 'row',
  paddingVertical: 5,
  width: '100%',
});
