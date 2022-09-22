/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { ApexOptions } from "apexcharts";

export const ChartOptions: ApexOptions = {
	title: {
		text: "Projeção de valores",
		style: {
			fontSize: "18px",
			fontWeight: "700",
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: false,
	},
	chart: {
		toolbar: {
			show: false,
		},
		stacked: true,
		zoom: {
			enabled: false,
		},
	},
	plotOptions: {
		bar: {
			barHeight: "100%",
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["hsl(0deg 0% 0%)", "hsl(23deg 81% 63%)"],
};
