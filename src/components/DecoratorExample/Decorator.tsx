import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

export interface DecoratorProps {
  children: ReactChildren | ReactChild;
}

const Decorator = ({ children }: DecoratorProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Decorator;
