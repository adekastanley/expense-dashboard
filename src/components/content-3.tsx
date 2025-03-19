import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dash from "../../public/assets/pictures/dash.jpg";

export default function ContentSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				{/* <img
		
					src="
              url(./public/assets/pictures/dash.jpg)"
					alt="team image"
					height=""
					width=""
					loading="lazy"
				/> */}
				<Image
					width={400}
					height={400}
					src={dash}
					alt={"dash"}
					className="rounded-(--radius)  w-full"
				/>

				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl font-medium">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos et ex
					</h2>
					<div className="space-y-6">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
							dolor suscipit modi odit architecto nisi quaerat. Soluta, numquam.
							Amet officia odit quidem commodi.
						</p>

						<Button
							asChild
							variant="secondary"
							size="sm"
							className="gap-1 pr-1.5"
						>
							<Link href="#">
								<span>Learn More</span>
								<ChevronRight className="size-2" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
