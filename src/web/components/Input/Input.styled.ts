import styled from "styled-components";

interface ContainerProps {
	error: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
	width: 100%;
	flex-direction: column;
	color: ${({ error }) => error && "var(--danger)"};

	input {
		border-color: ${({ error }) => (error ? "var(--danger)" : "var(--dark)")};
	}
`;

export const CustomLabel = styled.label`
	font-size: 1.4rem;
	font-weight: 400;
`;

export const InputStyle = styled.input`
	color: var(--text-color);
	border-bottom: 1px solid;
	padding: 1.2rem 1rem;
	width: 100%;
	transition: 0.2s;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}

	&:focus-visible {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
	}
`;
