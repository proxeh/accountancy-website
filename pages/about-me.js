import Head from "next/head";
import { Container, Typography } from "@mui/material";

export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>David McElhinney Accountancy</title>
				<meta name="description" content="David McElhinney Accountancy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ padding: "2rem 0" }}>
				<Container maxWidth="lg">
					<Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
						About Us
					</Typography>
				</Container>
			</main>
		</div>
	);
}
