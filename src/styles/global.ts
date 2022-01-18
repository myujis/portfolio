import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
		font-family: 'Roboto';
		font-size: ${props => props.theme.fontSizes.normal};
		color:${props => props.theme.colors.text};
		scroll-behavior: smooth;
	}
	body{
		background: ${props => props.theme.colors.background};
		color:${props => props.theme.colors.text};
	}
	html {
		scroll-behavior: smooth;
	}
`;
