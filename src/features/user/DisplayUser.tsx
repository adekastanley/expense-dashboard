import Image from "next/image";

export default function DisplayUser() {
	return (
		<div className="w-full flex  flex-col items-start  gap-5">
			<Image
				src="https://www.goodfreephotos.com/albums/people/pretty-young-women-smiling.jpg"
				width={80}
				height={80}
				alt="Picture of the author"
				className="rounded-xl aspect-square object-fill"
			/>
			<div className="gap-1 text-white font-semibold">
				<h1 className="text-3xl">Samantha</h1>
				<h2 className="text-sm font-light text-gray-500">samantha@email.com</h2>
			</div>
		</div>
	);
}
