// REACT & REACT NATIVE
import React from 'react';
import { Text } from 'react-native';

// STYLED
import { ArrowContainer, MainContainer } from './styled';

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PostListItem = ({ isFavorite, isRead, onPress, text }: Props) => {
  return (
    <MainContainer onPress={onPress}>
      <Text>{text}</Text>
      {isIos && (
        <ArrowContainer>
          <Text>{'>'}</Text>
        </ArrowContainer>
      )}
    </MainContainer>
  );
};

export default PostListItem;
