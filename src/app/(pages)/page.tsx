import HomePage from "@/components/pages/homepage/hero";
import Section1 from "@/components/pages/homepage/Section1";
import Section2 from "@/components/pages/homepage/Section2";

export default function Home() {
	return (
		<div>
			<main>
				<HomePage />
				<section className="px-5">
					<Section1 />
					<Section2 />
				</section>
			</main>
		</div>
	);
}
