import { Card } from "web/components/Card/Button/Card.index";

import * as S from "./SimulateResult.styled";

export const SimulateResult: React.FC = () => {
	return (
		<S.Container>
			<h3>Resultado da simulação</h3>

			<S.CardContainer>
				<Card title="Valor Final Bruto" value="R$ 15.509,27" />
				<Card title="Alíquota do IR" value="20%" />
				<Card title="Valor Pago em IR" value="R$ 1.509,27" />
				<Card title="Valor Final Liquido" value="R$ 56.509,27" />
				<Card title="Valor Total Investido" value="R$ 9.509,27" />
				<Card title="Ganho Liquido" value="R$ 47.000,00" />
			</S.CardContainer>
		</S.Container>
	);
};
