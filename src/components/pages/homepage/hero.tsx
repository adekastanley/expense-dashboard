import { Button } from "@/components/ui/button";

export default function HomePage() {
	return (
		<section className="h-screen w-full bg-red bg-[url(/assets/backgrounds/bg1.svg)] bg-no-repeat bg-cover bg-center ">
			<div className="w-full h-full flex flex-col gap-5 justify-center relative items-center ">
				<h1 className="text-3xl lg:text-7xl text-white font-bold  text-center">
					Track what matters <br />
					in less time
				</h1>
				<div className="gap-5 flex ">
					<Button size={"lg"}>Buy now</Button>
					<Button size={"lg"}>Try it out</Button>
				</div>
			</div>
		</section>
	);
}
