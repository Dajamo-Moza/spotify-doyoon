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
  font-weight: 700;
  padding: ${(props) => `0 ${props.theme.gutter.size20}`};
  border-left: 0.1rem solid ${(props) => props.theme.color.black};
  border-right: 0.1rem solid ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.font.size16};
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 20rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.color.black};
`;

export default SideBar;
