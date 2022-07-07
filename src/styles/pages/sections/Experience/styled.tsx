import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';

interface Props {
	selected: boolean;
}

export const Container = styled.div`
	min-width: 700px;
	width: auto;
	max-width: 60vw;
	height: auto;
	padding: 20px;
	padding-top: 70px;
	@media (max-width: 1000px) {
		min-height: 60vh;
	}
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media (max-width: 900px) {
		text-align: center;
	}
	@media (min-width: 901px) {
		text-align: left;
	}
`;

export const Index = styled.span`
	color: ${(props) => props.theme.colors.primary};
	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (min-width: 901px) {
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

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	@media (min-width: 901px) {
		flex-direction: row;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
`;

export const Items = styled.div`
	height: auto;
	background: transparent;
	display: flex;
	min-width: 160px;
	@media (min-width: 901px) {
		flex-direction: column;
	}
	@media (max-width: 900px) {
		flex-direction: row;
		justify-content: center;
	}
`;
export const Item = styled.div<Props>`
	height: 40px;
	transition: all 0.25s ease-in-out;
	@media (max-width: 380px) {
	}
	@media (min-width: 901px) {
		width: 100%;
	}
	background: ${(params: Props) =>
		params.selected
			? theme.colors.backgroundSecondary
			: theme.colors.background};
	@media (min-width: 901px) {
		border-left: 2px solid
			${(params: Props) =>
				params.selected
					? theme.colors.primary
					: theme.colors.backgroundSecondary};
	}
	@media (max-width: 900px) {
		border-bottom: 2px solid
			${(params: Props) =>
				params.selected
					? theme.colors.primary
					: theme.colors.backgroundSecondary};
	}
	cursor: pointer;
	color: ${(params: Props) =>
		params.selected ? theme.colors.primary : theme.colors.text};
	&:hover {
		background: ${(props) => props.theme.colors.backgroundSecondary};
		color: ${(props) => props.theme.colors.primary};
		@media (min-width: 901px) {
			border-left: 2px solid ${(props) => props.theme.colors.primary};
		}
		@media (max-width: 900px) {
			border-bottom: 2px solid ${(props) => props.theme.colors.primary};
		}
	}
	text-overflow: ellipsis;
	text-align: left;
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 701px) and (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
	@media (max-width: 700px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
	display: flex;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
`;
export const Content = styled.div`
	@media (min-width: 761px) {
		width: 80%;
	}
	@media (max-width: 760px) and (min-width: 901px) {
		width: 70%;
	}
	@media (max-width: 900px) and (min-width: 451px) {
		width: 60%;
	}
	@media (max-width: 450px) {
		width: 46%;
	}
	text-align: left;
	height: auto;
	display: flex;
	flex-direction: column;
	padding-left: 8px;
	gap: 10px;
`;
export const JobTitle = styled.div`
	display: flex;
	word-wrap: break-word;
	word-break: keep-all;
	@media (max-width: 450px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 451px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
`;

export const JobTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Company = styled.a`
	color: ${(props) => props.theme.colors.primary};
	@media (max-width: 450px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 451px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	position: relative;
	text-decoration: none;
	&::before {
		content: '';
		width: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.primary};
		position: absolute;
		bottom: -10%;
		left: 0;
		transition: all 0.15s ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
`;

export const Cronology = styled.div`
	display: flex;
	word-break: keep-all;
	font-size: ${(props) => props.theme.fontSizes.low};
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Technologies = styled.span`
	position: relative;
	display: flex;
	@media (max-width: 450px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
	@media (min-width: 451px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	font-weight: 100;
`;
export const JobDescription = styled.span`
	position: relative;
	display: flex;
	@media (max-width: 450px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
	@media (min-width: 451px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	font-weight: 100;
	&::before {
		align-self: center;
		justify-self: center;
		content: '';
		min-width: 6px;
		min-height: 6px;
		border-radius: 50%;
		background: ${(props) => props.theme.colors.primary};
		margin-right: 8px;
	}
`;
