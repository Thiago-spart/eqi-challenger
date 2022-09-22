import dynamic from "next/dynamic";

import { Card } from "web/components/Card/Button/Card.index";

import { ChartOptions } from "./ChartOptions";
import * as S from "./SimulateResult.styled";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

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

			<S.ChartContainer>
				<Chart
					type="bar"
					height="300"
					width="600px"
					series={[
						{
							name: "Com aporte",
							data: Array(18).fill(2),
						},
						{
							name: "Sem aporte",
							data: Array(18)
								.fill(null)
								.map((_, i) => i + 2),
						},
					]}
					options={ChartOptions}
				/>
			</S.ChartContainer>
		</S.Container>
	);
};
