import PageHead from "../content/PageHead";
import { Box, Container, Divider, Typography } from "@mui/material";
import ContactForm from "../components/Contact/ContactForm";

export default function ContactMe() {
	return (
		<div>
			<PageHead pageName="Contact Me" />
			<main>
				<Container
					maxWidth="lg"
					sx={{ padding: "2rem 0", backgroundColor: "#CCC" }}
				>
					<Typography
						variant="h3"
						component="h2"
						textAlign="center"
						fontWeight="600"
						gutterBottom
					>
						Get in touch
					</Typography>
					<Divider sx={{ marginBottom: "2rem" }} />
					<ContactForm />
				</Container>
			</main>
		</div>
	);
}
