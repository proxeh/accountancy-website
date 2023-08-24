import Head from "next/head";
import { Box, Container, Divider, Typography } from "@mui/material";
import ContactForm from "../components/Contact/ContactForm";

export default function ContactMe() {
	return (
		<div>
			<Head>
				<title>David McElhinney Accountancy - Contact Me</title>
				<meta name="description" content="David McElhinney Accountancy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ padding: "2rem 0" }}>
				<Container maxWidth="lg">
					<Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
						Get in touch
					</Typography>
					<Divider />
					<ContactForm />
				</Container>
			</main>
		</div>
	);
}
