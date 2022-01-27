import styled from 'styled-components';

export const Root = styled.div`
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	overflow: auto;
	overflow-x: hidden;
	/* scroll-snap-type: y mandatory; */
	position: relative;
	h1 {
	font-size: ${(props) => props.theme.fontSizes.extraHigher};
		color: ${props => props.theme.colors.primary};
		margin-top: 40px;
	}
	p {
		margin-top: 24px;
	font-size: ${(props) => props.theme.fontSizes.higher};
		line-height: 32px;
	}
	::-webkit-scrollbar{
		width: 6px;
	}
	::-webkit-scrollbar-track{
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(230,230,230,0.3);
		border-radius: 3px;
		z-index: 10;
		transition: all 0.55s ease-in-out;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(230,230,230,0.5);
	}
`;


export const Section = styled.div`
	width: 100%;
	height: auto;
	display	: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 80px;
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left:0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	z-index: 10;
	backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

	display: flex;
    justify-content: center;
    align-items: center;
`;
