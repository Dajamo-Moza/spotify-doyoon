import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TrackItem = ({ name }: { name: string }) => {
  return <StyledTrackItem>{name}</StyledTrackItem>;
};

const StyledTrackItem = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.color.black};
`;

export default TrackItem;
