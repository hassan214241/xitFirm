import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
`;
const DetialsView = styled(View)`
  flex: 1;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

export const Detalis = () => {
  return (
    <Container>
      <DetialsView>
        <Text>DetialsScreen</Text>
      </DetialsView>
    </Container>
  );
};
