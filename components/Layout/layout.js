import NavBar from "./NavBar";
import HeroImage from "./HeroImage";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<main>
			<NavBar />
			<HeroImage />
			{children}
			<Footer />
		</main>
	);
}
