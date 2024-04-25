
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #ffe0f0; // Light pink background
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: 2px solid #ff99bb; 
  padding: 8px;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: #ff66aa; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff3388; 
  }
`;


const SearchBar = ({ token, setTracks }) => {
  const [query, setQuery] = useState('');

  const searchTracks = async (e) => {
    e.preventDefault();
    if (!token) return;
  
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setTracks(data.tracks.items);
    } catch (error) {
      console.error('Errror searching tracks', error);
    }
  };
  

  return (
 <StyledForm onSubmit={searchTracks}>
      <StyledInput type="text" onChange={(e) => setQuery(e.target.value)} placeholder="we asre earch tracks..." />
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default SearchBar;
