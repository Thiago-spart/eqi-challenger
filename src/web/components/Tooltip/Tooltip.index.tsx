import type { TooltipProps } from "./Tooltip.types";

import * as S from "./Tooltip.styled";

export const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
	return (
		<S.Container role="tooltip" data-tooltip={message}>
			{children}
		</S.Container>
	);
};
