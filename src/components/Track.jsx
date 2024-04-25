import styled from 'styled-components';

const TrackContainer = styled.div`
  background-color: #fff0f5; 
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
`;

const TrackInfo = styled.div`
  margin-left: 10px; 
`;

const TrackName = styled.span`
  color: #ff66aa; 
  font-weight: bold;
`;

const ArtistName = styled.span`
  color: #cc5588; 
`;


const Track = ({ track }) => (
  <TrackContainer>
    <img src={track.album.images[0].url} alt={track.name} style={{ height: '64px', width: '64px' }} />
    <TrackInfo>
      <TrackName>{track.name}</TrackName> - <ArtistName>{track.artists.map(artist => artist.name).join(', ')}</ArtistName>
    </TrackInfo>
  </TrackContainer>
);

export default Track;
