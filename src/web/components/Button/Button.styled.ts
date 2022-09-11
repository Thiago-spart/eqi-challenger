import styled from "styled-components";

import type { ButtonProps } from "./Button.types";

type ButtonStyleProps = Omit<ButtonProps, "children">;

const themeBackgroundColor: Record<ButtonProps["schema"], string> = {
	outlined: "transparent",
	primary: "var(--primary)",
};

const themeBorderColor: Record<ButtonProps["schema"], string> = {
	outlined: "var(--dark)",
	primary: "transparent",
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.1rem 1rem;
	width: ${({ isFullWidth }) => isFullWidth && "100%"};
	border-radius: 0.8rem;
	border: 1px solid;
	background-color: ${({ schema }) =>
		schema ? themeBackgroundColor[schema] : themeBackgroundColor.primary};
	border-color: ${({ schema }) =>
		schema ? themeBorderColor[schema] : themeBorderColor.primary};

	transition: 0.2s;
	cursor: pointer;

	&:focus-visible {
		box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
		outline: none;
	}

	&:hover:not(:disabled) {
		filter: brightness(0.8);
	}

	&:disabled {
		cursor: default;
		filter: grayscale(100%);
	}
`;
