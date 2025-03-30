import { useState } from "react";

const sections = [
	{ id: "1", label: "1 section" },
	{ id: "2", label: "2 section" },
	{ id: "3", label: "3 section" },
	{ id: "4", label: "4 section" },
	{ id: "5", label: "5 section" },
	{ id: "6", label: "6 section" },
	{ id: "7", label: "7 section" },
	{ id: "8", label: "8 section" },
	{ id: "9", label: "9 section" },
	{ id: "10", label: "10 section" },
	{ id: "11", label: "11 section" },
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
