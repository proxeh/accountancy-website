import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { services } from "../../content/services";
import Router from "next/router";

export default function OurServicesCards() {
	return (
		<Box sx={{ background: "#ccc", py: "2rem" }}>
			<Container maxWidth="lg">
				<Box sx={{ flexGrow: 1 }} id="ourservices">
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography
								variant="h4"
								component="h3"
								textAlign="center"
								gutterBottom
							>
								Our Services
							</Typography>
						</Grid>
						{services.map((service, index) => {
							const id = Math.floor(Math.random() * 100);
							return (
								<Grid item xs={12} md={4} key={index}>
									<Card height="100%">
										<CardMedia
											component="img"
											alt={service.name}
											height="200"
											image={`https://picsum.photos/id/${id}/300/200`}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												fontWeight="600"
											>
												{service.name}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{service.description}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												size="small"
												variant="outlined"
												fullWidth
												onClick={() => Router.push(`${service.url}`)}
											>
												Learn More
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
						<Grid item xs={12} textAlign="center">
							<Button
								variant="contained"
								color="success"
								size="large"
								sx={{ fontWeight: "600" }}
								onClick={() => Router.push("/our-services")}
							>
								See all current services
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
