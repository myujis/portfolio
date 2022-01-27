import React from 'react';
import { Container, SocialLink } from './styled';
import Linkedin from '../../icons/linkedin';
import Github from '../../icons/github';

export const Social = () => {
	return (
		<Container>
			<SocialLink href="https://github.com/myujis" target="_blank">
				<Github size="36px" />
			</SocialLink>
			<SocialLink
				href="https://www.linkedin.com/in/matheusshiraishi/"
				target="_blank"
			>
				<Linkedin size="36px" />
			</SocialLink>
		</Container>
	);
};
