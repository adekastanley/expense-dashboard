import HomePage from "@/components/pages/homepage/hero";
import Section1 from "@/components/pages/homepage/Section1";
import ContentSection from "@/components/content-3";

import Features from "@/components/global/blocks/features";

export default function Home() {
	return (
		<div>
			<main>
				<HomePage />
				<section className="px-5 ">
					<Section1 />
					<ContentSection />
					<Features />
				</section>
			</main>
		</div>
	);
}
