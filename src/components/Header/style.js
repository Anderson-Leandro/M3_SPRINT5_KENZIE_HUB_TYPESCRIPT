import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	padding: 0 5%;
	max-width: 1440px;
	margin: 40px auto 20px auto;

	@media (min-width: 1400px) {
		padding: 0 10%;
	}

	${({ children }) => {
		if (children.length) {
			return css`
				display: flex;
				justify-content: space-between;
			`;
		}
	}}
	& > h1 {
		color: var(--color-primary);
		text-align: center;
		font-size: 26px;
	}

	& > a {
		max-width: 80px;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
