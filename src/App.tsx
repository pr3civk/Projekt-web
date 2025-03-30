import Layout from "./components/layout/_index";
import { Card } from "./components/Card";
import { Section1 } from "./features/section_1/_index";
import { Section2 } from "./features/section_2/_index";
import { Section3 } from "./features/section_3/_index";
import { Section4 } from "./features/section_4/_index";
import { Section5 } from "./features/section_5/_index";
import { Section6 } from "./features/section_6/_index";
import { Section7 } from "./features/section_7/_index";
import { Section8 } from "./features/section_8/_index";
import { Section9 } from "./features/section_9/_index";
import { Section10 } from "./features/section_10/_index";
import { Section11 } from "./features/section_11/_index";
import { Fragment } from "react/jsx-runtime";

const sections = [
	{ id: "1", component: <Section1 /> },
	{ id: "2", component: <Section2 /> },
	{ id: "3", component: <Section3 /> },
	{ id: "4", component: <Section4 /> },
	{ id: "5", component: <Section5 /> },
	{ id: "6", component: <Section6 /> },
	{ id: "7", component: <Section7 /> },
	{ id: "8", component: <Section8 /> },
	{ id: "9", component: <Section9 /> },
	{ id: "10", component: <Section10 /> },
	{ id: "11", component: <Section11 /> },
];

export default function App() {
	return (
		<Layout>
			<Card.Wrapper>
				{sections.map((section) => (
					<Fragment key={section.id}>{section.component}</Fragment>
				))}
			</Card.Wrapper>
		</Layout>
	);
}
