import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 50%;
	gap: 2rem;
`;

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 5rem;
`;

export const FormGroup = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 2rem;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	h5 {
		font-weight: 400;
	}
`;
