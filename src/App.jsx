import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar'; 
import TrackList from './components/TrackList';


// my code from the api
const CLIENT_ID = "447ab5b3c90d4047a34caa2a7d4bcaf3";
const CLIENT_SECRET = "e0f05720a71e4d1b813bb042265eb9ac";

const Title = styled.h1`
  color: #ff66aa; // Pink :))))
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
`;

function App() {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  //instruction from spotify 
  useEffect(() => {

    document.title = "My Music Search App";
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(response => response.json())
      .then(data => {
        console.log("Token retrieved:", data.access_token);
        setToken(data.access_token); // this stores the token in the state 
      });


    }, 
    []);


  return (
    <>
      <Title>My Music Search App</Title>
      <SearchBar token={token} setTracks={setTracks} />
      <TrackList tracks={tracks} />
  
    </>
  )
}

export default App;
