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
  padding: 1.2rem;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.font.size22};
`;

export default SideBar;
