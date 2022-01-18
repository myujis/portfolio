import React from 'react';
import { Container, Icon, Title } from './styled';

interface Props {
	name: String;
	img: String;
}

export const SkillCard = (props: Props) => {
	return (
		<Container>
			<Title>{props.name}</Title>
			<Icon src={`${props.img}`} />
		</Container>
	);
};
