import { Box, Button, Card, Container, Link, Typography } from "@mui/material";

export default function HeroImage() {
	const minHeight = "250px";
	return (
		<Box
			sx={{
				width: "100vw",
				minHeight: minHeight,
				backgroundImage: `url('https://picsum.photos/1440/500?grayscale&blur')`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box
				sx={{
					backgroundColor: "rgba(255,255,255,0.15)",
					padding: "2rem 0",
					width: "100%",
					minHeight: minHeight,
				}}
			>
				<Container maxWidth="lg">
					<Card
						sx={{
							backgroundColor: "rgba(255,255,255,0.5)",
							padding: "1rem",
							borderRadius: "1rem",
						}}
					>
						<Typography variant="h4" component="h1" gutterBottom>
							David McElhinney
						</Typography>
						<Typography variant="body1" component="p" gutterBottom>
							A chartered accountant based in Paisley, Glasgow. Catering for any
							and all needs for small businesses.
							<br />
							Click below to see our current services, or{" "}
							<Link href="/contact-me">click here</Link> to get in touch today!
						</Typography>
						<Link href="#ourservices">
							<Button variant="contained">Our Services</Button>
						</Link>
					</Card>
				</Container>
			</Box>
		</Box>
	);
}