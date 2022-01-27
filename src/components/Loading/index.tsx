import React from 'react';
import { ChildContainer, Container } from './styled';

export const Loader = () => {
	return (
		<Container>
			<ChildContainer></ChildContainer>
			<ChildContainer></ChildContainer>
			<ChildContainer></ChildContainer>
			<ChildContainer></ChildContainer>
		</Container>
	);
};
