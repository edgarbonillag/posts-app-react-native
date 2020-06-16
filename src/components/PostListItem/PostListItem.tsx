// REACT & REACT NATIVE
import React, { PureComponent } from 'react';
import { Animated } from 'react-native';

// RESOURCES
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// COMPONENTS
import CustomText from '../CustomText';

// STYLED
import {
  BlueDot,
  DeleteIconContainer,
  IconContainer,
  MainContainer,
  TextContainer,
  styles,
} from './styled';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

// TYPES
interface Props {
  isFavorite: boolean;
  isRead: boolean;
  onPress: () => void;
  onSwipeLeft: () => void;
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

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const renderRightActions = (progress: any, dragX: any) => {
  const scale = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <DeleteIconContainer>
      <AnimatedIcon
        name="md-trash"
        size={25}
        color={themeColors.white}
        style={[styles.animatedIcon, { transform: [{ scale }] }]}
      />
    </DeleteIconContainer>
  );
};

class PostListItem extends PureComponent<Props> {
  render() {
    const { isFavorite, isRead, onPress, onSwipeLeft, text } = this.props;
    return (
      <Swipeable
        friction={2}
        leftThreshold={80}
        onSwipeableRightOpen={onSwipeLeft}
        renderRightActions={renderRightActions}
        rightThreshold={150}
      >
        <MainContainer onPress={onPress}>
          <LeftComponent isFavorite={isFavorite} isRead={isRead} />
          <TextContainer>
            <CustomText>{text}</CustomText>
          </TextContainer>
          <RightComponent isFavorite={isFavorite} />
        </MainContainer>
      </Swipeable>
    );
  }
}

export default PostListItem;
