/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { RadioInput } from "./RadioInput.index";

const meta: Meta<typeof RadioInput> = {
	title: "Componentes/Input/Radio",
	component: RadioInput,
};

const mockedRadiosData = [
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

const Template: ComponentStory<typeof RadioInput> = () => (
	<RadioInput ratios={mockedRadiosData} name="test-radios" />
);

export const Default = Template.bind({});
Default.args = {};

export default meta;
