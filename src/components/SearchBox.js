import React from 'react';
import styled from "styled-components"

const SearchContainer = styled.div`
    padding: 10px;
`;

const SearchInput = styled.input`
    height: 30px;
    width: 310px;
`;

const SearchBox = (props) => {
	return (
		<SearchContainer>
			<SearchInput
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></SearchInput>
		</SearchContainer>
	);
};

export default SearchBox;