import { useForm } from "react-hook-form";
import { BsExclamationCircle } from "react-icons/bs";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "web/components/Button/Button.index";
import Input from "web/components/Input/Input.index";
import { RadioInput } from "web/components/Input/RadioInput/RadioInput.index";
import { Tooltip } from "web/components/Tooltip/Tooltip.index";

import type { FormDataProps } from "./SimulateForm.types";

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

const schema = yup
	.object({
		initialContribution: yup.string().required(),
		termsInMonths: yup.string().required(),
		ipca: yup.string().required(),
		monthContribution: yup.string().required(),
		profitability: yup.string().required(),
		cdi: yup.string().required(),
	})
	.required();

export const SimulateForm: React.FC = () => {
	const {
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormDataProps) => console.log(data);

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
						label="Aporte Inicial"
						{...register("initialContribution")}
						placeholder="R$ 100,00"
					/>

					<Input
						label="Prazo (em meses)"
						{...register("termsInMonths")}
						placeholder="5%"
					/>

					<Input
						label="IPCA (ao ano)"
						{...register("ipca")}
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
						label="Aporte Mensal"
						{...register("monthContribution")}
						placeholder="R$ 100,00"
					/>

					<Input
						label="Rentabilidade"
						{...register("profitability")}
						placeholder="5"
					/>

					<Input
						label="CDI (ao ano)"
						{...register("cdi")}
						placeholder="9,18%"
					/>

					<Button schema="primary" isFullWidth onSubmit={() => onSubmit}>
						Simular
					</Button>
				</S.FormGroup>
			</S.FormContainer>
		</S.Container>
	);
};
