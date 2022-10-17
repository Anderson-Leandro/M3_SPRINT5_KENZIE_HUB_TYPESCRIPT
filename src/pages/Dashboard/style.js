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

	.infoPage {
		flex-direction: column;
		align-items: flex-start;

		div {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			button {
				width: 33px;
				height: auto;
				padding: 0;
				font-size: 24px;
				font-weight: 600;
			}
		}

		ul {
			background-color: var(--color-grey-3);
			width: 100%;
			border-radius: 4px;
			padding: 24px 8px;
			display: flex;
			flex-direction: column;
			gap: 16px;

			li {
				height: 48px;
				width: 100%;
				background-color: var(--color-grey-4);
				border-radius: 4px;
				padding: 0 12px;

				display: flex;
				justify-content: space-between;
				align-items: center;

				&:hover {
					background-color: var(--color-grey-2);

					span {
						color: var(--color-grey-0);
					}
				}
			}
		}
	}
`;
