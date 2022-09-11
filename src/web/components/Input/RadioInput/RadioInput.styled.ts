import styled from "styled-components";

import type { RatioItem } from "./RadioInput.types";

type StyleRatioProps = Pick<RatioItem, "isActive">;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const StyleRatio = styled.div<StyleRatioProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	gap: 0.5rem;
	width: 100%;
	border: 1px solid var(--dark);
	background-color: ${({ isActive }) => isActive && "var(--primary)"};
	color: ${({ isActive }) => isActive && "hsl(0deg 0% 100%)"};

	&:first-child {
		border-radius: 0.8rem 0 0 0.8rem;
	}

	&:last-child {
		border-radius: 0 0.8rem 0.8rem 0;
	}

	input {
		width: 100%;
		background-color: black;
		height: 3rem;
		padding: 1rem;
		padding-left: 1.5rem;
		opacity: 0;
	}

	label {
		position: absolute;
		pointer-events: none;
		font-size: 1.4rem;
	}

	svg {
		position: absolute;
		left: -18px;
		bottom: 2px;
		font-size: 1.8rem;
		pointer-events: none;
	}
`;
