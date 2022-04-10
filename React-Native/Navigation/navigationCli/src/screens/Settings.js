
import React from "react";
import {View, Text } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
flex: 1;
`;

const Setting = styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: green;
`;
export const Settings = () =>{
    return(
      <Container>
          <Setting>
              <Text>
                  Settings
              </Text>
          </Setting>
      </Container>
    )
}