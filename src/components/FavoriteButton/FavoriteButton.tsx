// REACT
import * as React from 'react';

// RESORUCES
import Icon from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../../theme/colors';

// STYLED
import { Container } from './styled';

// TYPES
interface Props {
  filled?: boolean;
  onPress?: () => void;
}

const FavoriteButton = ({ filled, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      {filled ? (
        <Icon name="ios-star" size={25} color={themeColors.white} />
      ) : (
        <Icon name="ios-star-outline" size={25} color={themeColors.white} />
      )}
    </Container>
  );
};

FavoriteButton.defaultProps = {
  filled: false,
  onPress: () => {},
};

export default FavoriteButton;
