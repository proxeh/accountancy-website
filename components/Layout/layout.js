import { Box, Container } from "@mui/material";
import NavBar from "./NavBar";
import HeroImage from "./HeroImage";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<HeroImage />
			{children}
			<Footer />
		</>
	);
}
