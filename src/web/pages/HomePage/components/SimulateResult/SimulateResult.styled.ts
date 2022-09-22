import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 50%;
	gap: 2rem;
`;

export const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem 4rem;
`;

export const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
`;
