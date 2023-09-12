import { Box, Container, Grid, Typography } from "@mui/material";
import { pages } from "../../content/navigation";
import Link from "next/link";

const Page = ({ name, url, id }) => (
	<Link href={`${url}`} key={id} style={{ mr: "0.5rem" }}>
		<Typography
			variant="body1"
			component="span"
			sx={{
				"&:hover": {
					textDecoration: "underline",
				},
			}}
		>
			{name}
		</Typography>
		{id !== pages.length && ", "}
	</Link>
);

export default function Footer() {
	return (
		<Box py={4} bgcolor="black" color="white">
			<Container maxWidth="lg" component="footer">
				<Typography variant="h4" component="h4" fontWeight="600">
					Footer
				</Typography>
				{pages.map(Page)}
			</Container>
		</Box>
	);
}
