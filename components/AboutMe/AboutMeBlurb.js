import { Button, Container, Typography } from "@mui/material";
import AboutMeContent from "../../content/AboutMeContent";

export default function AboutMeBlurb() {
	return (
		<Container maxWidth="lg" sx={{ py: "2rem", color: "black" }}>
			<Typography variant="h4" component="h2">
				About Me
			</Typography>
			<AboutMeContent />
			<Typography variant="body1" component="p" textAlign="center">
				<Button
					variant="outlined"
					color="success"
					size="large"
					onClick={() =>
						document.getElementById("ourservices").scrollIntoView()
					}
				>
					What we offer
				</Button>
			</Typography>
		</Container>
	);
}
