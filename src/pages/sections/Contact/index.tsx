import React from 'react';
import {
	Container,
	Email,
	Index,
	Title,
	Text,
	SocialLink,
	SocialLinkContainer
} from '../../../styles/pages/sections/Contact/styled';
import Linkedin from '../../../icons/linkedin';
import Github from '../../../icons/github';

interface Props {
	sectionNumber: Number;
}
const ContactSection: React.FC<Props> = (props: Props) => {
	return (
		<Container>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>Contact me
			</Title>
			<Text>
				Feel free to contact me on <Email>matheus.y.shiraishi@gmail.com</Email>
			</Text>
			<SocialLinkContainer>
				<SocialLink href="https://github.com/myujis" target="_blank">
					<Github size="30px" />
				</SocialLink>
				<SocialLink
					href="https://www.linkedin.com/in/matheusshiraishi/"
					target="_blank"
				>
					<Linkedin size="30px" />
				</SocialLink>
			</SocialLinkContainer>
		</Container>
	);
};

export default ContactSection;
