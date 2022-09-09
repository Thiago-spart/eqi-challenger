import styled from "styled-components";

export const Container = styled.span`
	position: relative;

	&:hover[data-tooltip]:not([disabled])::before {
		opacity: 1;
		visibility: visible;
	}

	&[data-tooltip]:not([disabled])::before {
		transition: 0.2s;
		top: -5px;
		right: auto;
		bottom: auto;
		left: 50%;
		transform: translate(-50%, -100%);
		content: attr(data-tooltip);
		padding: 0.5rem 1rem;
		background: rgba(74, 74, 74, 0.9);
		border-radius: 0.25rem;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		opacity: 0;
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		visibility: hidden;
		z-index: 1020;
	}
`;
