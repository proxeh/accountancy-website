import Head from "next/head";

export default function PageHead({ pageName, description }) {
	return (
		<Head>
			<title>David McElhinney Accountancy - {pageName}</title>
			<meta name="description" content="David McElhinney Accountancy" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
