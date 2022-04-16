import React from 'react';
import styled from 'styled-components';

const SideBar = (): JSX.Element => {
  return (
    <StyledSideBar>
      <p>SIGN OUT</p>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  padding: ${(props) => props.theme.gutter.size20};
  background-color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.font.size16};
`;

export default SideBar;
