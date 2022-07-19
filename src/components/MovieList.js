import React from 'react';
import styled from "styled-components"

const Row = styled.div`
    display: flex;
    overflow-x: auto;
	flex-wrap: nowrap;
`;
const Movie = styled.div`
    margin: 10px;
    > img {
        width: 200px;
    }
`;

const MovieList = (props) => {
	return (
		<>
            <Row>
                {props.movies.map((movie, index) => (
                    <Movie>
                        <img src={movie.Poster} alt='movie'></img>
                    </Movie>
                ))}
            </Row>
		</>
	);
};

export default MovieList;