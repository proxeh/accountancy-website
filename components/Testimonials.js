import {
	Avatar,
	Box,
	Button,
	Grid,
	Container,
	Typography,
	Divider,
} from "@mui/material";
import { green } from "@mui/material/colors";
import Carousel from "react-material-ui-carousel";

import { testimonials } from "../content/testimonials";

export default function Testimonials() {
	return (
		<Box
			bgcolor={`#222`}
			color={`#FFF`}
			padding={`2rem 0`}
			width={`100vw`}
			minHeight={200}
		>
			<Container maxWidth="lg" sx={{ textAlign: "center" }}>
				<Carousel
					autoPlay
					interval="10000"
					animation="slide"
					activeIndicatorIconButtonProps={{
						style: {
							color: green[500],
						},
					}}
				>
					{testimonials.map((review, index) => {
						return (
							<Grid container maxWidth="lg" key={index} direction="column">
								<Grid item>
									<Typography variant="body1" component="span">
										{'"' + review.description + '"'}
									</Typography>
								</Grid>
								<Grid item>
									<Avatar
										variant="rounded"
										sx={{ margin: "2rem auto 1rem", bgcolor: green[500] }}
									/>
								</Grid>
								<Grid item>
									<Typography variant="body2" component="span">
										<em>
											{review.person},<br />
											{review.businessName}
										</em>
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Carousel>
			</Container>
		</Box>
	);
}
