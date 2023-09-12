import PageHead from "../content/PageHead";

import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import OurServicesCards from "../components/OurServices/OurServicesCards";
import Testimonials from "../components/Testimonials";

export default function Home() {
	return (
		<div>
			<PageHead />

			<main style={{ background: "white" }}>
				<AboutMeBlurb />
				<OurServicesCards />
			</main>
			<Testimonials />
		</div>
	);
}
