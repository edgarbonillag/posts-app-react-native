// REACT NATIVE
import { Text, TextProps } from 'react-native';

// STYLING
import styled from 'styled-components/native';

export interface StyledTextProps extends TextProps {
  color: string;
  size: number;
}

export const StyledText = styled(Text)((props: StyledTextProps) => ({
  color: props.color,
  fontSize: props.size,
}));
