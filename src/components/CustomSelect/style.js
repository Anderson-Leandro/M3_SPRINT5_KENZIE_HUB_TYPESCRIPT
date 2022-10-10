import styled from "styled-components";

export const StyledSelect = styled.div`
	position: relative;

	input {
		cursor: pointer;
	}

	input:focus {
		border-color: transparent;
	}

	img {
		position: absolute;
		top: calc(50%);
		right: 20px;
	}

	.dropDown {
		position: absolute;
		width: 100%;
		background-color: var(--color-grey-2);
		border-radius: 5px;
		margin-top: 5px;
		border: 1px solid var(--color-grey-2);
		height: 144px;
		max-height: 100vh;
		overflow: auto;

		animation: dropEffect 0.15s linear;
	}

	@keyframes dropEffect {
		0% {
			transform: translateY(-10px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	/* ::-webkit-scrollbar {
		background-color: #1d1d1d;
		width: 5px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #5b5b5b;
		border-radius: 5px;
	} */

	.item {
		height: 48px;
		padding: 0px 16px;
		transition: 0.3s;
		cursor: pointer;
		display: flex;
		align-items: center;

		color: var(--color-grey-0);
		font-weight: 400;
		font-size: 16px;
		line-height: 26px;
	}

	.item:hover {
		background-color: var(--color-grey-3);
		padding-left: 18px;
		transition: 0.3s;
	}

	.displayNone {
		display: none;
	}
`;
