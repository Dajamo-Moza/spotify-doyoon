import React from 'react';
import styled from 'styled-components';

const Button = (): JSX.Element => {
  return <StyledButton>테스트용 버튼</StyledButton>;
};

const StyledButton = styled.div`
  padding: 1.2rem;
  background-color: blue;
`;

export default Button;
