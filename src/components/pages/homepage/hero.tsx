"use client";
import { useRef, useState } from "react";
import { Cursor } from "../../../../components/motion-primitives/cursor";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { TextEffect } from "../../../../components/motion-primitives/text-effect";

export default function HomePage() {
	const [isHovering, setIsHovering] = useState(false);
	const targetRef = useRef<HTMLDivElement>(null);

	const handlePositionChange = (x: number, y: number) => {
		if (targetRef.current) {
			const rect = targetRef.current.getBoundingClientRect();
			const isInside =
				x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
			setIsHovering(isInside);
		}
	};
	return (
		// <section className="h-screen w-full  bg-no-repeat bg-cover bg-center ">
		<section className="h-screen w-full bg-red bg-[url(/assets/backgrounds/bg1.svg)] bg-no-repeat bg-cover bg-center ">
			<Cursor
				attachToParent
				variants={{
					initial: { scale: 0.3, opacity: 0 },
					animate: { scale: 1, opacity: 1 },
					exit: { scale: 0.3, opacity: 0 },
				}}
				springConfig={{
					bounce: 0.001,
				}}
				transition={{
					ease: "easeInOut",
					duration: 0.15,
				}}
				onPositionChange={handlePositionChange}
			>
				<motion.div
					animate={{
						width: isHovering ? 80 : 16,
						height: isHovering ? 32 : 16,
					}}
					className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
				>
					<AnimatePresence>
						{isHovering ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className="inline-flex w-full items-center justify-center"
							>
								<div className="inline-flex items-center text-sm text-white dark:text-black">
									Jump in
								</div>
							</motion.div>
						) : null}
					</AnimatePresence>
				</motion.div>
			</Cursor>
			<div className="w-full h-full flex flex-col gap-5 justify-center relative items-center ">
				<TextEffect
					per="word"
					as="h3"
					preset="blur"
					className="text-3xl lg:text-7xl text-black font-bold  text-center"
				>
					Track what matters
				</TextEffect>
				<TextEffect
					per="word"
					as="h3"
					delay={0.5}
					preset="blur"
					className=" text-primary text-3xl lg:text-7xl  font-bold  text-center"
				>
					in less time
				</TextEffect>
				<TextEffect
					per="char"
					delay={0.5}
					variants={{
						container: {
							hidden: {
								opacity: 0,
							},
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.05,
								},
							},
						},
						item: {
							hidden: {
								opacity: 0,
								rotateX: 90,
								y: 10,
							},
							visible: {
								opacity: 1,
								rotateX: 0,
								y: 0,
								transition: {
									duration: 0.2,
								},
							},
						},
					}}
				>
					Your all in one solution
				</TextEffect>
				<div className="gap-5 flex ">
					<div ref={targetRef}>
						<Button className="cursor-pointer" size={"lg"}>
							Buy now
						</Button>
					</div>
					<div ref={targetRef}>
						<Link href="/dashboard">
							<Button
								variant={"outline"}
								className="outline-primary  outline-1 outline-solid hover:bg-primary hover:text-white"
								size={"lg"}
							>
								Try demo
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
