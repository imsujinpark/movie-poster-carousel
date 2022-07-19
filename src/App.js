import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
// import { ThemeProvider } from 'styled-components';

const Container = styled.div`
  background: ${ (props) => props.bgColor || `#141414` };
  color: ${ (props) => props.textColor || "white"};
  height: 100vh;
  font-family: ${ (props) => props.font || `Arial, Helvetica, sans-serif`};
`;

const App = ({ textColor, bgColor, font, title }) => {


	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
    
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
    <>
      <Container textColor={textColor} bgColor={bgColor} font={font}>
        <MovieListHeading heading={title? title : 'Search by Movie Title'} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList movies={movies} />
      </Container>
    </>
	);
};

export default App;