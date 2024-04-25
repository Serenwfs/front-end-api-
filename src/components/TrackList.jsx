import React from 'react';
import styled from 'styled-components';
import Track from './Track'; 

const TrackListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center the tracks in the middle of the page
  padding: 20px;
`;

const TrackList = ({ tracks }) => (
  <TrackListContainer>
    {tracks.map(track => (
      <Track key={track.id} track={track} />
    ))}
  </TrackListContainer>
);

export default TrackList;
