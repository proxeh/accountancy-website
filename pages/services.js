import PageHead from "../content/PageHead";
import {
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	Paper,
	Typography,
} from "@mui/material";

import { services } from "../content/services";

export default function OurServices() {
	return (
		<div>
			<PageHead pageName="Our Services" />

			<Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
				<Typography
					variant="h3"
					component="h2"
					textAlign="center"
					fontWeight="600"
					gutterBottom
				>
					My Services
				</Typography>
				<Divider sx={{ marginBottom: "2rem" }} />
				<Grid container direction="column" spacing={2}>
					{services.map((service, index) => {
						return (
							<Grid item xs={12} key={index}>
								<Paper>
									<Card>
										<CardContent>
											<Typography variant="h5" component="h3" fontWeight="600">
												{service.name}
											</Typography>
											<Typography variant="body2">
												{service.description}
											</Typography>
										</CardContent>
									</Card>
								</Paper>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
}
