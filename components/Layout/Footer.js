import { Container, Grid, Typography } from "@mui/material";
import { pages } from "../../content/navigation";
import Link from "next/link";

const Page = ({ name, url, id }) => (
	<Grid item gap={1} key={id} textAlign="left">
		<Link href={`${url}`}>
			<Typography variant="body2" component="span">
				{name}
			</Typography>
		</Link>
	</Grid>
);

export default function Footer() {
	return (
		<Container maxWidth="lg" component="footer" sx={{ py: 2 }}>
			<Grid
				container
				maxWidth="lg"
				direction="column"
				alignContent="flex-start"
			>
				<Grid item>
					<Typography variant="body1" component="h3">
						Footer
					</Typography>
				</Grid>
				{pages.map(Page)}
			</Grid>
		</Container>
	);
}
