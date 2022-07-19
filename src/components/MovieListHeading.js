import React from 'react';
import styled from "styled-components"

const Title = styled.div`
	padding-top: 10px;
	> h1 {
		margin-bottom: 0px;
	}
`;

const MovieListHeading = (props) => {
	return (
		<Title>
			<h1>{props.heading}</h1>
		</Title>
	);
};

export default MovieListHeading;