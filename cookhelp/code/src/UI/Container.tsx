import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-gray-color);
  border-radius: 10px;

  max-width: 30rem;
  width: 50%;
  margin: 5rem auto;
  padding-bottom: 2rem;
`;

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
