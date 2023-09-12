import PageHead from "../content/PageHead";
import AboutMeContent from "../content/AboutMeContent";
import {
	Card,
	CardContent,
	Container,
	Divider,
	Paper,
	Typography,
} from "@mui/material";

export default function AboutMe() {
	return (
		<div>
			<PageHead pageName="About Me" />

			<Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
				<Typography
					variant="h3"
					component="h2"
					textAlign="center"
					fontWeight="600"
					gutterBottom
				>
					About Me
				</Typography>
				<Divider sx={{ marginBottom: "2rem" }} />
				<Paper>
					<Card>
						<CardContent>
							<AboutMeContent />
						</CardContent>
					</Card>
				</Paper>
			</Container>
		</div>
	);
}
