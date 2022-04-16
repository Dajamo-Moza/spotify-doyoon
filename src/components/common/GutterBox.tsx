import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const GutterBox = ({ children, margin, padding }: PropsWithChildren<PartialProps>): JSX.Element => {
  return (
    <StyledGutterBox margin={margin} padding={padding}>
      {children}
    </StyledGutterBox>
  );
};

type PartialProps = Partial<GutterBoxProps>;

interface GutterBoxProps {
  margin: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  padding: {
    top?: string;
    right?: string;
    bottom?: string;
    left: string;
  };
}

const StyledGutterBox = styled.div<GutterBoxProps>`
  margin-top: ${(props) => props.theme.gutter[props.margin.top] || 0};
  margin-right: ${(props) => props.theme.gutter[props.margin.right] || 0};
  margin-bottom: ${(props) => props.theme.gutter[props.margin.bottom] || 0};
  margin-left: ${(props) => props.theme.gutter[props.margin.left] || 0};
`;

export default GutterBox;
