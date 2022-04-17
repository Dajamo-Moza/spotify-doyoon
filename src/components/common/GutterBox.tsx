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
  margin?: {
    all?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  padding?: {
    all?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const StyledGutterBox = styled.div<GutterBoxProps>`
  ${(props) => props.theme.gutter[props.margin?.all] && `margin: ${props.theme.gutter[props.margin?.all]}`};
  ${(props) => props.theme.gutter[props.margin?.top] && `margin-top: ${props.theme.gutter[props.margin?.top]}`};
  ${(props) => props.theme.gutter[props.margin?.right] && `margin-right: ${props.theme.gutter[props.margin?.right]}`};
  ${(props) =>
    props.theme.gutter[props.margin?.bottom] && `margin-bottom: ${props.theme.gutter[props.margin?.bottom]}`};
  ${(props) => props.theme.gutter[props.margin?.left] && `margin-left: ${props.theme.gutter[props.margin?.left]}`};

  ${(props) => props.theme.gutter[props.padding?.all] && `padding: ${props.theme.gutter[props.padding?.all]}`};
  ${(props) => props.theme.gutter[props.padding?.top] && `padding-top: ${props.theme.gutter[props.padding?.top]}`};
  ${(props) =>
    props.theme.gutter[props.padding?.right] && `padding-right: ${props.theme.gutter[props.padding?.right]}`};
  ${(props) =>
    props.theme.gutter[props.padding?.bottom] && `padding-bottom: ${props.theme.gutter[props.padding?.bottom]}`};
  ${(props) => props.theme.gutter[props.padding?.left] && `padding-left: ${props.theme.gutter[props.padding?.left]}`};
`;

export default GutterBox;
