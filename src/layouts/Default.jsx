import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
	return (
		<>
			<Header />
			<main className="flex-1 container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
