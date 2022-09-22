import { BsExclamationCircle } from "react-icons/bs";

import { Button } from "web/components/Button/Button.index";
import Input from "web/components/Input/Input.index";
import { RadioInput } from "web/components/Input/RadioInput/RadioInput.index";
import { Tooltip } from "web/components/Tooltip/Tooltip.index";

import * as S from "./SimulateForm.styled";

const finalCurrencyType = [
	{
		isActive: false,
		label: "Bruto",
		value: "bruto",
	},
	{
		isActive: true,
		label: "Liquido",
		value: "liquido",
	},
];

const indexType = [
	{
		isActive: false,
		label: "PRÉ",
		value: "pre",
	},
	{
		isActive: true,
		label: "POS",
		value: "pos",
	},
	{
		isActive: false,
		label: "FIXADO",
		value: "fixado",
	},
];

export const SimulateForm: React.FC = () => {
	return (
		<S.Container>
			<h3>Simulador</h3>

			<S.FormContainer>
				<S.FormGroup>
					<S.TitleContainer>
						<h5>Rendimento</h5>

						<Tooltip message="aviso">
							<BsExclamationCircle />
						</Tooltip>
					</S.TitleContainer>

					<RadioInput name="final-amount" ratios={finalCurrencyType} />

					<Input
						type="text"
						label="Aporte Inicial"
						name="initial_contribution"
						placeholder="R$ 100,00"
					/>

					<Input
						type="number"
						label="Prazo (em meses)"
						name="terms_in_months"
						min="1"
						max="12"
						placeholder="5%"
					/>

					<Input
						type="number"
						label="IPCA (ao ano)"
						name="ipca"
						placeholder="5.34%"
					/>

					<Button schema="outlined" isFullWidth>
						Limpar campos
					</Button>
				</S.FormGroup>
				<S.FormGroup>
					<S.TitleContainer>
						<h5>Tipos de indexação</h5>

						<Tooltip message="aviso">
							<BsExclamationCircle />
						</Tooltip>
					</S.TitleContainer>

					<RadioInput name="final-amount" ratios={indexType} />

					<Input
						type="text"
						label="Aporte Mensal"
						name="month_contribution"
						placeholder="R$ 100,00"
					/>

					<Input
						type="number"
						label="Rentabilidade"
						name="profitability"
						placeholder="5"
					/>

					<Input
						type="number"
						label="CDI (ao ano)"
						name="cdi"
						placeholder="9,18%"
					/>

					<Button schema="primary" isFullWidth>
						Simular
					</Button>
				</S.FormGroup>
			</S.FormContainer>
		</S.Container>
	);
};
