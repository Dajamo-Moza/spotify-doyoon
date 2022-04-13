import React from 'react';
import { useRecoilState } from 'recoil';
import { fontSizeState } from '../atoms';
import styled from 'styled-components';

const Button = (): JSX.Element => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <StyledButton fontSize={fontSize}>테스트용 버튼</StyledButton>;
};

interface StyledButtonType {
  fontSize: number;
}

const StyledButton = styled.div<StyledButtonType>`
  padding: 1.2rem;
  background-color: blue;
  font-size: ${(props) => props.fontSize};
`;

export default Button;
