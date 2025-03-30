import Footer from './Footer'
import { Aside } from "./Aside";
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="container">
			<Aside />
			{children}
			<Footer />
		</main>
	);
};

export default Layout