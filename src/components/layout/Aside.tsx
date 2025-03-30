import { useState } from "react";

const sections = [
	{
		id: "1section",
		label: "1 section",
	},
	{
		id: "2section",
		label: "2 section",
	},
	{
		id: "3section",
		label: "3 section",
	},
	{
		id: "4section",
		label: "4 section",
	},
];

export const Aside = () => {
	const [currentSection, setCurrentSection] = useState<string | null>(
		sections[0].id
	);

	return (
		<aside className="aside">
			<ul className="aside-content">
				{sections.map((section) => (
					<li key={section.id}>
						<a
							onClick={() => setCurrentSection(section.id)}
							href={`#${section.id}`}
							className={
								currentSection === section.id
									? "aside-link-active"
									: "aside-link-inactive"
							}
						>
							{section.label}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
};
