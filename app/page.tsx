import logo from "@/public/passlock-logo.svg";
import twitter from "@/public/twitter.svg";
import Image from "next/image";
import github from "@/public/github.svg";
import teligram from "@/public/teligram.svg";

export default function Home() {
	return (
		<main className="bg-[#1F1F1F] text-white">
			<div className="container mx-auto max-w-6xl px-4">
			<a
					href="https://t.me/Oxdrac"
					target="_blank"
					className="hover:opacity-80 float-right mt-12 mr-8"
				>
					<Image src={teligram} alt="github" width="30" />
				</a>
				<a
					href="https://twitter.com/0xdrac"
					target="_blank"
					className="hover:opacity-80 float-right mt-12 mr-8"
				>
					<Image src={twitter} alt="twitter" width="30" />
				</a>
				<a
					href="https://github.com/rohan-201"
					target="_blank"
					className="hover:opacity-80 float-right mt-12 mr-8"
				>
					<Image src={github} alt="github" width="30" />
				</a>
				<div className="flex items-center  flex-col justify-around min-h-screen py-8">

					<h1 className="text-5xl">Hi my name is Drac / Rohan kumar</h1>
					

					<p className="text-3xl text-left">
						<p className="text-purple-500">I am 15 year old kiddo.</p>
						<br />
						<br />
						
						<p className="text-red-400">I am a full stack developr who is trying to learn more about solana ecosystem.</p>
						<br />
						<br /> 
						
						<p className = "text-green-400">I also have great knowlegde of video editing and UI/UX desiging</p>
						<br />
						<br />
						I am working on projects like <a className="text-pink-300" href="https://www.maker3.shop " target="_blank" >Maker3</a> and <a className="text-pink-300" href="https://passlocker.vercel.app/" target="_blank" >Passlocker</a>.
						<br /> 
						<br /> 
						<br /> 
						<p className="text-yellow-300">Super team contributer.</p>
						<br />
						<br />
						<p className="text-blue-300">TPH Buildoor.</p>

					</p>

					</div>

				

				

				
			</div>
		</main>
	);
}
