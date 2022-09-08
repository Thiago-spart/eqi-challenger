import type { NextPage } from "next";
import Head from "next/head";

import { HomePage as Page } from "web/pages/HomePage/HomePage.index";

import { SITE } from "../configs/site";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>{`Calculadora de investimentos | ${SITE.name}`}</title>
			</Head>
			<Page />
		</>
	);
};

/*
 * export const getServerSideProps: GetServerSideProps = async () => {
 * 	const res = await api.get("v1/forecast.json");
 */

// 	const simulationData = res.data;

/*
 * 	return {
 * 		props: {
 * 			data: simulationData,
 * 		},
 * 	};
 * };
 */

export default HomePage;
