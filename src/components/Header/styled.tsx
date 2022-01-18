import styled from 'styled-components';

export const Container = styled.nav`
	width: 100%;
	@media (min-width: 701px) {
		height: 50px;
	}
	@media (max-width: 700px) {
		display: none;
	}
	position: fixed;
	top: 0;
	z-index: 0;
	display: flex;
	gap: 16px;
	justify-content: flex-end;
	align-items: center;
	padding-right: 50px;
	/* border-radius: 0px 0px 14px 14px; */
	/* background: linear-gradient(
		90deg,
		rgba(0, 208, 255, 1) 0%,
		rgba(0, 128, 157, 1) 48%,
		rgba(36, 78, 126, 1) 100%
	); */
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
	display: ${(props) => (props.clicked ? `flex` : `none`)};
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

interface Props {
	clicked: Boolean;
}
export const MenuMobile = styled.div<Props>`
	@media (min-width: 701px) {
		display: none;
	}
	position: absolute;
	bottom: -50px;
	left: 14px;
	z-index: 7;
	display: flex;
	width: auto;
	height: auto;
`;

export const ContainerMobile = styled.div<Props>`
	width: 100%;
	background: rgba(160, 160, 160, 0.1);
	backdrop-filter: blur(5px);
	height: ${(props) => (props.clicked ? `auto` : `0px`)};
	padding-top: ${(props) => (props.clicked ? `10px` : `0px`)};
	padding-bottom: ${(props) => (props.clicked ? `10px` : `0px`)};
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 15px;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	top: 0;
	z-index: 5;
	transition: all 0.5s ease-in-out;
`;

export const ArrowContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.text};
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`;
