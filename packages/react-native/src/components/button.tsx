import React from "react";
import styled from "styled-components/native";
interface ButtonProps {
  children: React.ReactNode;
}

const Container = styled.Button``;

const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

export { Button };
