// REACT & REACT NATIVE
import React from 'react';

// STYLED
import { MainContainer, TabItem, TabsContainer, TabTitle } from './styled';

// TYPES
interface Props {
  onPressTab: (index: number) => void;
  selectedIndex: number;
}

// MAIN CODE

const TabBarIos = ({ onPressTab, selectedIndex }: Props) => {
  return (
    <MainContainer>
      <TabsContainer>
        <TabItem active={selectedIndex === 0} onPress={() => onPressTab(0)}>
          <TabTitle active={selectedIndex === 0}>All</TabTitle>
        </TabItem>
        <TabItem active={selectedIndex === 1} onPress={() => onPressTab(1)}>
          <TabTitle active={selectedIndex === 1}>Favorites</TabTitle>
        </TabItem>
      </TabsContainer>
    </MainContainer>
  );
};

export default TabBarIos;
