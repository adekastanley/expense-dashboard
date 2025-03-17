"use client";

import MobileNav from "./MobileNav";
import PcNav from "./PcNav";

export default function Nav() {
	const isMobile = window.innerWidth < 768;
	return <>{isMobile ? <MobileNav /> : <PcNav />}</>;
}
