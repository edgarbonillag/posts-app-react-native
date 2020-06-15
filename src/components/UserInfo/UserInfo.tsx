// REACT & REACT NATIVE
import React from 'react';
import { ActivityIndicator } from 'react-native';

// COMPONENTS
import CustomText from '../CustomText';

// STYLED
import { InfoItem, LoadingContainer, MainContainer, TitleContainer } from './styled';
import { themeColors } from '../../theme/colors';

// TYPES
interface Props {
  email: string;
  error?: boolean;
  loading?: boolean;
  name: string;
  phone: string;
  website: string;
}

// MAIN CODE

const UserInfo = ({ email, error, loading, name, phone, website }: Props) => {
  return (
    <MainContainer>
      <TitleContainer>
        <CustomText variant="title">User</CustomText>
      </TitleContainer>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator color={themeColors.mainGreen} size="large" />
        </LoadingContainer>
      ) : error ? (
        <LoadingContainer>
          <CustomText variant="error">Error: Unable to get user info.</CustomText>
        </LoadingContainer>
      ) : (
        <>
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
        </>
      )}
    </MainContainer>
  );
};

UserInfo.defaultProps = {
  loading: false,
  error: false,
};

export default UserInfo;
