import Head from "next/head";
import { Container, Divider, Grid, Typography } from "@mui/material";

import { services } from "../content/services";

export default function OurServices() {
	return (
		<div>
			<Head>
				<title>David McElhinney Accountancy</title>
				<meta name="description" content="David McElhinney Accountancy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
					<Typography variant="h4" component="h2" textAlign="center">
						Our Services
					</Typography>
					<Grid container direction="column">
						{services.map((service, index) => {
							const id = Math.floor(Math.random() * 100);
							return (
								<Grid item xs={12} key={index}>
									<Typography variant="h3" component="h3">
										{service.name}
									</Typography>
									<Typography variant="body2">{service.description}</Typography>
									<Divider />
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</main>
		</div>
	);
}
