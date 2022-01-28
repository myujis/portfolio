import styled from 'styled-components';

export const Container = styled.div`
	min-width: 350px;
	width: auto;
	max-width: 60vw;
	height: auto;
	@media (max-width: 1000px) {
		min-height: 40vh;
	}
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	@media (max-width: 720px) {
		text-align: center;
	}
	@media (min-width: 721px) {
		text-align: left;
	}
`;

export const Index = styled.span`
	color: ${(props) => props.theme.colors.primary};
	@media (max-width: 720px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (min-width: 721px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
`;

export const Title = styled.div`
	width: 100%;
	padding-top: 5px;
	padding-bottom: 5px;
	font-weight: 700;
	@media (max-width: 720px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
	@media (min-width: 721px) {
		font-size: ${(props) => props.theme.fontSizes.extraHigher};
	}
`;

export const Text = styled.span`
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
	@media (min-width: 701px) and (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (max-width: 700px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
`;

export const Email = styled.span`
	color: ${(props) => props.theme.colors.primary};
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
	@media (min-width: 701px) and (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (max-width: 700px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
`;

export const SocialLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: auto;
	height: auto;
	gap: 15px;
	@media (min-width: 821px) {
		display: none;
	}
`;

export const SocialLink = styled.a`
	width: auto;
	height: auto;
	cursor: pointer;
	padding-top: 10px;
	padding-bottom: 10px;
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
