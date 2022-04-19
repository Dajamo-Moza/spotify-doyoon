import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TrackItem = ({ name }: { name: string }) => {
  return <StyledTrackItem>{name}</StyledTrackItem>;
};

const StyledTrackItem = styled.li`
  font-size: 2rem;
`;

export default TrackItem;
