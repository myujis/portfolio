import React from 'react';
import { Button, Card, Wrapper, Image, Description } from './styled';

export const ProjectCard = ({ handleOpenModal = () => {} }) => {
	return (
		<Wrapper>
			<Card>
				<Image src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/jsx-intellisense.png" />
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
				</Description>
				<Button onClick={handleOpenModal}>Learn More</Button>
			</Card>
		</Wrapper>
	);
};
