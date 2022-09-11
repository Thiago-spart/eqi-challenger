import { Header } from "web/components/Header/Header.index";

import { SimulateForm } from "./components/SimulateForm/SimulateForm.index";

import * as S from "./HomePage.styled";

export const HomePage: React.FC = () => {
	return (
		<S.Container>
			<S.DashBoardContainer>
				<Header />

				<S.SimulateContent>
					<SimulateForm />
					<h1>Conteúdo</h1>
				</S.SimulateContent>
			</S.DashBoardContainer>
		</S.Container>
	);
};
