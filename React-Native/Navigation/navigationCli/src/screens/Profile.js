import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
`;
const ProfileView = styled(View)`
  flex: 1;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

export const Profile = () => {
  return (
    <Container>
      <ProfileView>
        <Text>ProfileScreen</Text>
      </ProfileView>
    </Container>
  );
};
