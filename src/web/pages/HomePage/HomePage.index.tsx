import { Header } from "web/components/Header/Header.index";

import { SimulateForm } from "./components/SimulateForm/SimulateForm.index";
import { SimulateResult } from "./components/SimulateResult/SimulateResult";

import * as S from "./HomePage.styled";

export const HomePage: React.FC = () => {
	return (
		<S.Container>
			<S.DashBoardContainer>
				<Header />

				<S.SimulateContent>
					<SimulateForm />
					<SimulateResult />
				</S.SimulateContent>
			</S.DashBoardContainer>
		</S.Container>
	);
};
