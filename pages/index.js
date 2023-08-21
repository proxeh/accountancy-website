import Head from "next/head";
import { Container } from "@mui/material";

import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import OurServicesCards from "../components/OurServices/OurServicesCards";
import Testimonials from "../components/Testimonials";

export default function Home() {
	return (
		<div>
			<Head>
				<title>David McElhinney Accountancy</title>
				<meta name="description" content="David McElhinney Accountancy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AboutMeBlurb />
				<OurServicesCards />
			</main>
			<Testimonials />
		</div>
	);
}
