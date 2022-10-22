import styled from "styled-components";

export const StyledLoading = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(18, 18, 20, 0.7);
	width: 100vw;
	height: 100vh;
	z-index: 10;

	.loader {
		margin: calc(35vh) auto 0 auto;
		border: 20px solid var(--color-grey-1);
		border-radius: 50%;
		border-top: 20px solid var(--color-primary);
		width: 150px;
		height: 150px;
		animation: spinner 1.5s linear infinite;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
