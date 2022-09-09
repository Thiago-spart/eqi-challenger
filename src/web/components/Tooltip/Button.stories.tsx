/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Tooltip } from "./Tooltip.index";

const meta: Meta<typeof Tooltip> = {
	title: "Componentes/Tooltip",
	component: Tooltip,
};

const Template: ComponentStory<typeof Tooltip> = ({ message }) => (
	<Tooltip message={message}>
		<h1>hover me</h1>
	</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
	message: "Some advise",
};

export default meta;
