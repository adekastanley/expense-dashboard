import { Button } from "@/components/ui/button";

export default function HomePage() {
	return (
		// <section className="h-screen w-full  bg-no-repeat bg-cover bg-center ">
		<section className="h-screen w-full bg-red bg-[url(/assets/backgrounds/bg1.svg)] bg-no-repeat bg-cover bg-center ">
			<div className="w-full h-full flex flex-col gap-5 justify-center relative items-center ">
				<h1 className="text-3xl lg:text-7xl text-black font-bold  text-center">
					Track what matters <br />
					<span className="text-primary"> in less time</span>
				</h1>
				<p className="text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
					quia.
				</p>
				<div className="gap-5 flex ">
					<Button className="" size={"lg"}>
						Buy now
					</Button>
					<Button
						variant={"outline"}
						className="outline-primary outline-1 outline-solid hover:bg-primary hover:text-white"
						size={"lg"}
					>
						Try it out
					</Button>
				</div>
			</div>
		</section>
	);
}
