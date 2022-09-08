import type { FC } from "react";

import { SITE } from "configs/site";

export const HeadContent: FC = () => (
	<>
		<meta name="keywords" content="investimento simulação carteira simulador" />
		<meta name="robots" content="index,follow" />
		<meta
			name="description"
			content="Simulador de investimentos seguindo o padrão b3."
		/>
		<meta
			name="og:description"
			content="Simulador de investimentos seguindo o padrão b3"
		/>
		<meta
			name="og:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="ForecastThi" />
		<meta
			name="twitter:description"
			content="Simulador de investimentos seguindo o padrão b3"
		/>
		<meta
			name="twitter:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content="pt_BR" />
		<link rel="cannonical" href={SITE.url} />
	</>
);
