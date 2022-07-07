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

import Profile from '../../../../public/images/profile.png';

interface Props {
	sectionNumber?: Number;
	id?: string;
}
const AboutSection: React.FC<Props> = (props: Props) => {
	return (
		<Container id={props.id}>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>About me
			</Title>
			<Row>
				<PictureContainer>
					<ProfilePicture src={Profile} alt="profilePicture" />
				</PictureContainer>
				<Column>
					<Headline1>Matheus Shiraishi</Headline1>
					<Headline2>Software Engineer</Headline2>
					<Headline3>
						I am a Software Engineer passionate about technology, learning and
						inspired by challenges.
					</Headline3>
					<Headline3>
						Currently looking for a full-time position to explore highly
						scalable and distribute systems, web applications, cloud-based
						applications, or other areas in software engineering in order to
						develop scalable and eficient solutions.
					</Headline3>
				</Column>
			</Row>
		</Container>
	);
};
export default AboutSection;
