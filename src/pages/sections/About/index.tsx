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
} from '../../../styles/pages/sections/About/styled';

interface Props {
	sectionNumber?: Number;
}
const AboutSection: React.FC<Props> = (props: Props) => {
	return (
		<Container>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>About me
			</Title>
			<Row>
				<PictureContainer>
					<ProfilePicture src="https://media-exp1.licdn.com/dms/image/C4E03AQHXO3X2Cj_1jA/profile-displayphoto-shrink_400_400/0/1636473248188?e=1648080000&v=beta&t=_Ke-YtGerE9f8AW4UkDxcttpCpUMJ6QvAWRvOzxdnW4" />
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
export default AboutSection;
