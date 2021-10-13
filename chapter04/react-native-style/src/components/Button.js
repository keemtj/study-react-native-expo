import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme";

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  /* background-color: ${(props) =>
    props.title === "Styled" ? "#3498db" : "#9b59b6"}; */
  background-color: ${(props) =>
    props.title === "Styled" ? props.theme.blue : props.theme.purple};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export default Button;
