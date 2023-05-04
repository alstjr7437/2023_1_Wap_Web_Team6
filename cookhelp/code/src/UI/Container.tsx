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

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ className, children }: Props) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
