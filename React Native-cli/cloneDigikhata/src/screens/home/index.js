import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const Container = styled.View`
  flex: 1;
`;
const Card = styled.View`
  flex: 6;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
const Customer = styled.View`
  flex: 4;
  background-color: '#fff';
  justify-content: center;
  align-items: center;
`;
const CInfo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const CustomerBtn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const Home = () => {
  return (
    <Container>
      <Card>
        <Text>Home Screen Digikhta Testing!</Text>
      </Card>
      <Customer>
        <CInfo>
          <Text>Customer add Krien aur apna daily khata barqrar rakhien.</Text>
        </CInfo>
      </Customer>
      <CustomerBtn>
        <Button
          contentStyle={{
            borderWidth: 2,
            width: 200,
            borderRadius: 25,
            borderColor: 'red',
            backgroundColor: 'red',
          }}
          labelStyle={{color: '#fff'}}
          Icon={({color, size}) => (
            <Icon name="user-plus" color={'black'} size={20} />
          )}>
          ADD CUSTOMER
        </Button>
      </CustomerBtn>
    </Container>
  );
};
