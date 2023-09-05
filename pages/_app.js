import "../styles/globals.css";
import Layout from "../components/Layout/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout style={{ background: "white" }}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
