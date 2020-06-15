// REACT NATIVE
import { SafeAreaView, ScrollView, View } from 'react-native';

// STYLING
import styled from 'styled-components/native';
import { themeColors } from '../../theme/colors';

// UTILS
import { isIos } from '../../utils/platform';

export const CommentContainer = styled(View)({
  justifyContent: 'center',
  paddingHorizontal: 15,
  paddingBottom: 10,
  paddingTop: isIos ? 10 : 20,
  width: '100%',
});

export const CommentsLoadingContainer = styled(View)({
  alignItems: 'center',
  height: 160,
  justifyContent: 'center',
  width: '100%',
});

export const CommentsTitle = styled(View)({
  backgroundColor: isIos ? themeColors.lightGray : themeColors.mediumLightGray,
  paddingHorizontal: 15,
  paddingVertical: 5,
  width: '100%',
});

export const MainContainer = styled(SafeAreaView)({
  backgroundColor: themeColors.veryLightGray,
  flex: 1,
});

export const ScrollContainer = styled(ScrollView)({
  flex: 1,
});

export const SectionWrapper = styled(View)({
  justifyContent: 'center',
  paddingHorizontal: 15,
  paddingBottom: 15,
});

export const SeparatorLine = styled(View)({
  backgroundColor: themeColors.lightGray,
  height: 1,
  marginLeft: isIos ? 15 : 0,
  width: '100%',
});

export const VerticalSpace = styled(View)({
  height: 15,
});
