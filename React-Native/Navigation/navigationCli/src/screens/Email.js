import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
`;
const EmailView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: darkgreen;
`;

export const Email = () => {
  return (
    <Container>
      <EmailView>
        <Text>Email Screen!</Text>
      </EmailView>
    </Container>
  );
};
