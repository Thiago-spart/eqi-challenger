import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 2.5rem 3rem;
`;

export const DashBoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6rem;
	width: 100%;
	background-color: var(--dashboard-background-color);
	padding: 3rem;
`;

export const SimulateContent = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
`;
