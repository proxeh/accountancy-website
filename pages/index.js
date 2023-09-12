import PageHead from "../content/PageHead";

import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import OurServicesCards from "../components/OurServices/OurServicesCards";
import Testimonials from "../components/Testimonials";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<div>
			<PageHead />

			<Box style={{ background: "white" }}>
				<AboutMeBlurb />
				<OurServicesCards />
			</Box>
			<Testimonials />
		</div>
	);
}
