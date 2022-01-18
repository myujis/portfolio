import React from 'react';
import {
	Container,
	Email,
	Index,
	Title,
	Text
} from '../../../styles/pages/sections/Contact/styled';

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
		</Container>
	);
};

export default ContactSection;
