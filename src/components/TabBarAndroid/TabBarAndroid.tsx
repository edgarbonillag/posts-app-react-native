// REACT & REACT NATIVE
import React from 'react';

// STYLED
import { MainContainer, TabItem, TabTitle, styles } from './styled';

// TYPES
interface Props {
  onPressTab: (index: number) => void;
  selectedIndex: number;
}

// MAIN CODE

const TabBarAndroid = ({ onPressTab, selectedIndex }: Props) => {
  return (
    <MainContainer style={styles.tabBarElevation}>
      <TabItem active={selectedIndex === 0} onPress={() => onPressTab(0)}>
        <TabTitle>ALL</TabTitle>
      </TabItem>
      <TabItem active={selectedIndex === 1} onPress={() => onPressTab(1)}>
        <TabTitle>FAVORITES</TabTitle>
      </TabItem>
    </MainContainer>
  );
};

export default TabBarAndroid;
