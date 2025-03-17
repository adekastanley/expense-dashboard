"use client";

import { usePathname } from "next/navigation";

type Path = {
	title: string;
	url: string;
};

interface DisplayPathsProps {
	paths: Path[];
}

// export default function DisplayPaths({ paths }: { paths: Path }) {
const DisplayPaths: React.FC<DisplayPathsProps> = ({ paths }) => {
	const currentRoute = usePathname();
	console.log(currentRoute);
	return (
		<ul className="gap-5 flex flex-col">
			{paths.map((item, index) => (
				<li
					key={index}
					className={`font-semibold text-3xl ${
						currentRoute === item.url ? "text-white" : "text-gray-500"
					}`}
				>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	);
};

export default DisplayPaths;
