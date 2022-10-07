import styled, { css } from "styled-components";

export const StyledLogo = styled.div`
	width: 90%;
	margin: 40px auto 20px auto;

	${({ children }) => {
		if (children.length) {
			return css`
				display: flex;
				justify-content: space-between;
			`;
		}
	}}
	h1 {
		color: var(--color-primary);
		text-align: center;
		font-size: 26px;
	}

	button {
		max-width: 80px;
	}
`;

export const StyledContainer = styled.section`
	width: 90%;
	margin: 0 auto;
	padding: 30px 18px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	align-items: center;
	background-color: var(--color-grey-3);
	border-radius: 4px;

	& > form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	& > form > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	& > a {
		width: 100%;
	}
`;
