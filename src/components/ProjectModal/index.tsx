import React from 'react';
import Close from '../../icons/close';
import Github from '../../icons/github';
import Website from '../../icons/website';
import theme from '../../styles/theme';
import {
	CloseIcon,
	Image,
	LinksWrapper,
	LinkWrapper,
	Root,
	Tech,
	Text
} from './styled';

export const ProjectModal = ({ handleCloseModal = () => {} }) => {
	return (
		<Root>
			<CloseIcon onClick={handleCloseModal}>
				<Close color={theme.colors.text} size="30px" />
			</CloseIcon>
			<LinksWrapper>
				<LinkWrapper>
					<Github color={theme.colors.text} size="30px" />
				</LinkWrapper>
				<LinkWrapper>
					<Website color={theme.colors.text} size="30px" />
				</LinkWrapper>
			</LinksWrapper>
			<Image>
				<img src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/jsx-intellisense.png" />
			</Image>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
			<Tech>
				<p>Node.js</p>
				<p>React.js</p>
				<p>Python</p>
				<p>FastAPI</p>
				<p>GitHub</p>
			</Tech>
		</Root>
	);
};
