import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@/assets/search.svg';
import GutterBox from '@/components/common/GutterBox';

const SideBar = (): JSX.Element => {
  return (
    <StyledSideBar>
      <GutterBox margin={{ bottom: 'size84' }}>
        <p>SIGN OUT</p>
      </GutterBox>
      <GutterBox margin={{ bottom: 'size84' }}>
        <p>RECOMMENDATIONS</p>
      </GutterBox>
      <SearchBar>
        <SearchIcon />
      </SearchBar>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  padding: ${(props) => props.theme.gutter.size20};
  border: 1px solid blue;
  font-size: ${(props) => props.theme.font.size16};
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 20rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.color.black};
`;

export default SideBar;
