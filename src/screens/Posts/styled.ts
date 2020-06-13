// REACT NATIVE
import { TouchableOpacity, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { theme } from '../../theme/colors';

export const GoToPostButton = styled(TouchableOpacity)({
  alignItems: 'center',
  backgroundColor: theme.azureRadiance,
  justifyContent: 'center',
  height: 50,
  width: '100%',
});

export const NiceView = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.mainGreen,
  justifyContent: 'center',
  height: 50,
  width: '100%',
});
