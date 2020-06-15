// REACT
import * as React from 'react';

// STYLED
import { StyledText } from './styled';
import { textColors } from '../../theme/colors';
import { isIos } from '../../utils/platform';

// TYPES
interface Props {
  children: React.ReactNode;
  variant?: 'error' | 'regular' | 'subtitle' | 'title';
}

const CustomText = ({ children, variant }: Props) => {
  let bold: boolean;
  let color: string;
  let size: number;

  switch (variant) {
    case 'error':
      bold = false;
      color = textColors.error;
      size = 16;
      break;
    case 'subtitle':
      bold = isIos;
      color = isIos ? textColors.veryDarkGray : textColors.mainGray;
      size = 16;
      break;
    case 'title':
      bold = true;
      color = textColors.veryDarkGray;
      size = 24;
      break;
    default:
      bold = false;
      color = textColors.mainGray;
      size = 16;
  }

  return (
    <StyledText allowFontScaling={false} bold={bold} color={color} size={size}>
      {children}
    </StyledText>
  );
};

CustomText.defaultProps = {
  variant: 'regular',
};

export default CustomText;
