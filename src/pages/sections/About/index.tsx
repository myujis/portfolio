import React from 'react';
import {
	Container,
	Index,
	Title,
	ProfilePicture,
	PictureContainer,
	Row,
	Column,
	Headline1,
	Headline2,
	Headline3
} from './styled';
import ProfileImage from '../../../../public/images/FotoMatheus.png';

interface Props {
	sectionNumber: Number;
}
export const AboutSection = (props: Props) => {
	return (
		<Container>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>About me
			</Title>
			<Row>
				<PictureContainer>
					<ProfilePicture src={ProfileImage} />
				</PictureContainer>
				<Column>
					<Headline1>Matheus Shiraishi</Headline1>
					<Headline2>Software Engineer</Headline2>
					<Headline3>
						I am a Software Engineer especialized in building Web Applications.
						Currently searching for a full-time job as a Front End Engineer.
					</Headline3>
				</Column>
			</Row>
		</Container>
	);
};
