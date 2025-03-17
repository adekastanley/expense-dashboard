"use client";

import MobileNav from "./MobileNav";
import PcNav from "./PcNav";

import { useIsMobile } from "@/hooks/use-mobile";
export default function Nav() {
	const isMobile = useIsMobile();
	// const isMobile = window.innerWidth < 768;
	return <>{isMobile ? <MobileNav /> : <PcNav />}</>;
}
