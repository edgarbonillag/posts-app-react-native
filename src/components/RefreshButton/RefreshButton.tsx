// REACT
import * as React from 'react';

// RESORUCES
import Icon from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../../theme/colors';

// STYLED
import { Container } from './styled';

// TYPES
interface Props {
  onPress?: () => void;
}

const RefreshButton = ({ onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon name="md-refresh" size={25} color={themeColors.white} />
    </Container>
  );
};

RefreshButton.defaultProps = {
  onPress: () => {},
};

export default RefreshButton;
