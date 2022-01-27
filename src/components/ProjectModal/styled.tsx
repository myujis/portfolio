import exp from 'constants';
import styled from 'styled-components';

export const Root = styled.div`
	display: grid;
	@media (max-width: 450px) {
		display: block;
	}
	@media (min-width: 1401px) {
		width: 60%;
		grid-template-areas:
			'image image text'
			'image image text'
			'image image text'
			'tech tech tech';
	}
	@media (min-width: 1301px) and (max-width: 1400px) {
		width: 70%;
		grid-template-areas:
			'image image text'
			'image image text'
			'image image text'
			'tech tech tech';
	}
	@media (min-width: 851px) and (max-width: 1300px) {
		width: 84%;
		grid-template-areas:
			'image text text'
			'image text text'
			'image text text'
			'tech tech tech';
	}
	@media (max-width: 850px) {
		width: 92%;
		grid-template-areas:
			'image'
			'text'
			'tech';
	}
	@media (max-width: 500px) {
		height: 90%;
	}
	height: 80%;
	background: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 14px;
	position: relative;
	padding: 60px;
	overflow-y: scroll;
	overflow-x: hidden;

	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(230, 230, 230, 0.3);
		border-radius: 3px;
		z-index: 10;
		transition: all 0.55s ease-in-out;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(230, 230, 230, 0.5);
	}
`;

export const CloseIcon = styled.div`
	width: auto;
	height: auto;
	position: absolute;
	top: 0px;
	left: 0px;
	margin-top: 12px;
	margin-left: 12px;
	@media (max-width: 400px) {
		margin-top: 8px;
		margin-left: 8px;
	}
	cursor: pointer;
	svg path {
		transition: all 0.25s ease-in-out;
		stroke: ${(props) => props.theme.colors.text};
	}
	&:hover {
		svg path {
			stroke: ${(props) => props.theme.colors.primary};
		}
	}
`;

export const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 0;
	top: 0;
	@media (max-width: 400px) {
		margin-top: 10px;
		margin-right: 6px;
	}
	margin-top: 18px;
	margin-right: 12px;
	gap: 8px;
`;

export const LinkWrapper = styled.div`
	cursor: pointer;
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

export const Image = styled.div`
	@media (min-width: 451px) {
		grid-area: image;
		padding: 14px;
		margin-bottom: auto;
	}
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	@media (min-width: 1301px) {
		img {
			max-width: 450px;
		}
	}
	@media (min-width: 851px) and (max-width: 1300px) {
		img {
			min-width: 250px;
			max-width: 350px;
		}
	}
	@media (max-width: 850px) and (min-width: 451px) {
		img {
			max-width: 300px;
		}
	}
	@media (max-width: 450px) {
		img {
			max-width: 60vw;
		}
	}
	img {
		object-fit: cover;
	}
`;

export const Tech = styled.div`
	@media (min-width: 451px) {
		width: 100%;
		height: 100%;
		padding: 14px;
		grid-area: tech;
		gap: 10px;
		justify-content: center;
	}
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	gap: 6px;
	p {
		@media (min-width: 1001px) {
			font-size: ${(props) => props.theme.fontSizes.higher};
		}
		@media (max-width: 1000px) {
			font-size: ${(props) => props.theme.fontSizes.normal};
		}
		color: ${(props) => props.theme.colors.primary};
	}
`;
export const Text = styled.div`
	@media (min-width: 451px) {
		grid-area: text;
		padding: 14px;
	}
	display: flex;
	text-align: center;
	@media (min-width: 1001px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (max-width: 1000px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
`;
