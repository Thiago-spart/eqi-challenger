import type { CardProps } from "./Card.types";

import * as S from "./Card.styled";

export const Card: React.FC<CardProps> = ({ title, value }) => {
	return (
		<S.Container>
			<p>{title}</p>
			<span>{value}</span>
		</S.Container>
	);
};
