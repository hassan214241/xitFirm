import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Container = styled(View)`
  flex: 1;
`;
const Profile = styled(View)`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
`;
const Detalis = styled(View)`
  flex: 1;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;



export const Home = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Profile>
        <Button title="Profile" onPress={() => navigate('Profile')} />
      </Profile>
      <Detalis>
        <Button title="Detalis" onPress={() => navigate('Detalis')} />
      </Detalis>
    </Container>
  );
};
