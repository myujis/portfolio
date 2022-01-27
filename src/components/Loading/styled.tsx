import styled, { keyframes } from 'styled-components';

const ringRotate = keyframes`
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
`;
export const ChildContainer = styled.div`
	box-sizing: border-box;
	display: block;
	width: 60%;
	height: 60%;
	position: absolute;
	top: calc(100% - 60% - 30%);
	left: calc(100% - 60% - 30%);
	margin: 8px;
	border: 6px solid #fff;
	border-radius: 50%;
	animation: ${ringRotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #fff transparent transparent transparent;
`;

export const Container = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	${ChildContainer}:nth-child(1) {
		animation-delay: -0.2s;
	}
	${ChildContainer}:nth-child(2) {
		animation-delay: -0.15s;
	}
	${ChildContainer}:nth-child(3) {
		animation-delay: -0.02s;
	}
`;
