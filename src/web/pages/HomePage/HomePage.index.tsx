import { Header } from "web/components/Header/Header.index";

import * as S from "./HomePage.styled";

export const HomePage: React.FC = () => {
	return (
		<S.Container>
			<S.DashBoardContainer>
				<Header />

				<S.SimulateContent>
					<h1>Form</h1>
					<h1>Conteúdo</h1>
				</S.SimulateContent>
			</S.DashBoardContainer>
		</S.Container>
	);
};
