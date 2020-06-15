// REACT & REACT NATIVE
import React from 'react';

// COMPONENTS
import CustomText from '../CustomText';

// STYLED
import { InfoItem, MainContainer, TitleContainer } from './styled';

// TYPES
interface Props {
  name: string;
  email: string;
  phone: string;
  website: string;
}

// MAIN CODE

const UserInfo = ({ name, email, phone, website }: Props) => {
  return (
    <MainContainer>
      <TitleContainer>
        <CustomText variant="title">User</CustomText>
      </TitleContainer>
      <InfoItem>
        <CustomText>Name:</CustomText>
        <CustomText>{`      ${name}`}</CustomText>
      </InfoItem>
      <InfoItem>
        <CustomText>Email:</CustomText>
        <CustomText>{`       ${email}`}</CustomText>
      </InfoItem>
      <InfoItem>
        <CustomText>Phone:</CustomText>
        <CustomText>{`     ${phone}`}</CustomText>
      </InfoItem>
      <InfoItem>
        <CustomText>Website:</CustomText>
        <CustomText>{`   ${website}`}</CustomText>
      </InfoItem>
    </MainContainer>
  );
};

export default UserInfo;
