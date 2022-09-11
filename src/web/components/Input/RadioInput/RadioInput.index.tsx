import { BsCheck2 } from "react-icons/bs";

import type { RadioInputProp } from "./RadioInput.types";

import * as S from "./RadioInput.styled";

export const RadioInput: React.FC<RadioInputProp> = ({ name, ratios }) => {
	return (
		<S.Container>
			{ratios.map(ratio => (
				<S.StyleRatio key={ratio.value} isActive={ratio.isActive}>
					<label htmlFor={ratio.value}>
						{ratio.isActive && <BsCheck2 />}
						{ratio.label}
					</label>
					<input
						type="radio"
						id={ratio.value}
						name={name}
						value={ratio.value}
						checked={ratio.isActive}
					/>
				</S.StyleRatio>
			))}
		</S.Container>
	);
};
