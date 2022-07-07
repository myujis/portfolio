import styled from 'styled-components';

export const Container = styled.nav`
	@media (min-width: 701px) {
		height: 50px;
		width: 100%;
		padding-right: 50px;
	}
	@media (max-width: 700px) {
		display: none;
	}
	@media (min-width: 1201px) {
		height: 64px;
	}
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	gap: 16px;
	justify-content: flex-end;
	align-items: center;
	background: rgba(160, 160, 160, 0.1);
	backdrop-filter: blur(5px);
	z-index: 5;
`;

export const Links = styled.ol`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	margin: 0;
	list-style: none;
	gap: 20px;
	* {
		box-sizing: inherit;
	}
`;

export const Link = styled.li`
	display: list-item;
`;

interface PropsAnchor {
	clicked?: Boolean;
}
export const Anchor = styled.a<PropsAnchor>`
	height: auto;
	width: auto;
	padding: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
	position: relative;
	transition: all 0.25s ease-in-out;
	background: none;
	border: 0;
	box-sizing: border-box;
	vertical-align: middle;
	text-decoration: none;
	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}

	&::before,
	&::after {
		box-sizing: inherit;
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: 0;
		left: 0;
		border: 2px solid transparent;
	}
	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
	&:hover::before,
	&:hover::after {
		width: 100%;
		height: 100%;
	}
	&:hover::before {
		border-top-color: ${(props) => props.theme.colors.primary};
		border-right-color: ${(props) => props.theme.colors.primary};
		transition: width 0.15s ease-out,
			// Width expands first
			height 0.15s ease-out 0.15s; // And then height
	}
	&:hover::after {
		border-left-color: ${(props) => props.theme.colors.primary};
		border-bottom-color: ${(props) => props.theme.colors.primary};
		transition: height 0.15s ease-out, width 0.15s ease-out 0.15s;
	}
`;

export const Index = styled.text`
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	align-self: center;
`;

export const Button = styled.a`
	width: auto;
	height: auto;
	@media (max-width: 700px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
	@media (min-width: 701px) and (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	padding: 6px 8px 6px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1.4px solid ${(props) => props.theme.colors.primary};
	border-radius: 4px;
	text-decoration: none;
	transition: all 0.15s ease-in-out;
	&:hover {
		background-color: rgba(0, 208, 255, 0.3);
	}
`;

export const ContainerMobile = styled.div`
	@media (min-width: 701px) {
		display: none;
	}
	@media (max-width: 700px) {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: auto;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 16px;
		padding-right: 16px;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		gap: 8px;
		justify-content: center;
		align-items: center;
		background: rgba(160, 160, 160, 0.1);
		backdrop-filter: blur(5px);
		z-index: 5;
	}
`;
