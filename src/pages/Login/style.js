import styled from "styled-components";

export const StyledLogo = styled.h1`
	color: var(--color-primary);
	text-align: center;
	font-size: 26px;
	margin-top: 60px;
	margin-bottom: 20px;
`;

export const StyledContainer = styled.section`
	width: 90%;
	margin: 0 auto;
	padding: 33px 18px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	align-items: center;
	background-color: var(--color-grey-3);
	border-radius: 4px;

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	& > a {
		width: 100%;
	}
`;
