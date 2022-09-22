import { Card } from "web/components/Card/Button/Card.index";

import * as S from "./SimulateResult.styled";

export const SimulateResult: React.FC = () => {
	return (
		<S.Container>
			<h3>Resultado da simulação</h3>

			<Card title="Valor Final Bruto " value="R$ 15.509,27" />
		</S.Container>
	);
};
