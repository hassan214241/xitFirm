import React from 'react';

import {View, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
`;
const NotificationView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: cyan;
`;
export const Notification = () => {
  return (
    <Container>
      <NotificationView>
        <Text>Notification Screen!</Text>
      </NotificationView>
    </Container>
  );
};
