import styled from "styled-components";

export const StyledSection = styled.section`
	border-top: 2px solid var(--color-grey-3);

	padding: 25px 0;

	& > div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;

		@media (min-width: 1024px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
`;
