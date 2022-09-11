export interface RatioItem {
	value: string;
	label: string;
	isActive: boolean;
}

export interface RadioInputProp {
	name: string;
	ratios: Array<RatioItem>;
}
