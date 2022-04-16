import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@/assets/search.svg';

const SideBar = (): JSX.Element => {
  return (
    <StyledSideBar>
      <p>SIGN OUT</p>
      <p>RECOMMENDATIONS</p>
      <SearchIcon />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  padding: ${(props) => props.theme.gutter.size20};
  border: 1px solid blue;
  font-size: ${(props) => props.theme.font.size16};
`;

export default SideBar;
