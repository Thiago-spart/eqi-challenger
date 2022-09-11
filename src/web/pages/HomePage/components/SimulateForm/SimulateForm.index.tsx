import { BsExclamationCircle } from "react-icons/bs";

import { Button } from "web/components/Button/Button.index";
import Input from "web/components/Input/Input.index";
import { RadioInput } from "web/components/Input/RadioInput/RadioInput.index";
import { Tooltip } from "web/components/Tooltip/Tooltip.index";

import * as S from "./SimulateForm.styled";

const labelRatios = [
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

					<RadioInput name="final-amount" ratios={labelRatios} />

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
						name="initial_contribution"
						placeholder="5.34%"
					/>

					<Button schema="outlined" isFullWidth>
						Limpar campos
					</Button>
				</S.FormGroup>
				<S.FormGroup>grupo 2</S.FormGroup>
			</S.FormContainer>
		</S.Container>
	);
};
