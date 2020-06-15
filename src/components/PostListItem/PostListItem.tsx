// REACT & REACT NATIVE
import React from 'react';

// RESOURCES
import Icon from 'react-native-vector-icons/Ionicons';

// COMPONENTS
import CustomText from '../CustomText';

// STYLED
import { BlueDot, IconContainer, MainContainer, TextContainer } from './styled';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

// TYPES
interface Props {
  isFavorite: boolean;
  isRead: boolean;
  onPress: () => void;
  text: string;
}

// MAIN CODE

const LeftComponent = ({ isFavorite, isRead }: { isFavorite: boolean; isRead: boolean }) => {
  if (!isRead) {
    return (
      <IconContainer>
        <BlueDot />
      </IconContainer>
    );
  }

  if (isIos) {
    if (isFavorite) {
      return (
        <IconContainer>
          <Icon name="ios-star" size={25} color={themeColors.ripeLemon} />
        </IconContainer>
      );
    }

    return <IconContainer />;
  }

  return null;
};

const RightComponent = ({ isFavorite }: { isFavorite: boolean }) => {
  if (isIos) {
    return (
      <IconContainer>
        <Icon name="ios-arrow-forward" size={25} color={themeColors.mediumGray} />
      </IconContainer>
    );
  }

  if (isFavorite) {
    return (
      <IconContainer>
        <Icon name="ios-star" size={25} color={themeColors.ripeLemon} />
      </IconContainer>
    );
  }

  return null;
};

const PostListItem = ({ isFavorite, isRead, onPress, text }: Props) => {
  return (
    <MainContainer onPress={onPress}>
      <LeftComponent isFavorite={isFavorite} isRead={isRead} />
      <TextContainer>
        <CustomText>{text}</CustomText>
      </TextContainer>
      <RightComponent isFavorite={isFavorite} />
    </MainContainer>
  );
};

export default PostListItem;
