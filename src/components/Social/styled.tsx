import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	bottom: 10px;
	left: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1201px) {
		gap: 60px;
		padding-bottom: 20px;
	}
	@media (max-width: 1200px) {
		gap: 20px;
	}
	&::before {
		width: 1px;
		height: 200%;
		content: '';
		position: absolute;
		left: 50%;
		top: -50%;
		background-color: ${(props) => props.theme.colors.text};
	}
	@media (max-width: 820px) {
		display: none;
	}
`;

export const SocialLink = styled.a`
	z-index: 2;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.background};
	padding-top: 10px;
	padding-bottom: 10px;
	@media (min-width: 1200px) {
		transform: scale(1.3);
	}
	svg path {
		transition: all 0.25s ease-in-out;
		fill: ${(props) => props.theme.colors.text};
	}
	&:hover {
		svg path {
			fill: ${(props) => props.theme.colors.primary};
		}
	}
`;
