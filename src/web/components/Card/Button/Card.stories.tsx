/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Card } from "./Card.index";

const meta: Meta<typeof Card> = {
	title: "Componentes/Card",
	component: Card,
};

const Template: ComponentStory<typeof Card> = props => <Card {...props} />;

export const Default = Template.bind({});
Default.args = {
	title: "title",
	value: "R$ 41,00",
};

export default meta;
