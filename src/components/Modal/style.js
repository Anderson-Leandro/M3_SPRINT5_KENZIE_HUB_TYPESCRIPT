import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(18, 18, 20, 0.5);
	/* background-color: white; */
	width: 100vw;
	height: 100vh;

	.modalContainer {
		margin: 0 auto;
		margin-top: calc(30vh);
		width: 90%;
		max-width: 500px;
		background-color: var(--color-grey-3);
		border-radius: 4px;
	}

	.modalHeader {
		height: 40px;
		padding: 0 5%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-grey-2);
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

		button {
			background-color: transparent;
			border: none;
			color: var(--color-grey-1);
			font-size: 20px;
			font-weight: 600;
		}
	}

	form {
		width: 100%;
		padding: 20px 5%;
		display: flex;
		flex-direction: column;
		gap: 20px;

		div {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}

		button {
			font-size: 14px;
			font-weight: 500;
		}
	}

	input:read-only {
		color: var(--color-grey-1);
		border-color: transparent;
	}

	.item {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		height: 35px;
	}

	.editButtons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		button {
			width: fit-content;
		}
	}
`;
