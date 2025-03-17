import Image from "next/image";

export default function DisplayUser() {
	return (
		<div>
			<Image
				src="https://www.goodfreephotos.com/albums/people/pretty-young-women-smiling.jpg"
				width={500}
				height={500}
				alt="Picture of the author"
			/>
		</div>
	);
}
