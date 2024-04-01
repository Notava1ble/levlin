import { useState } from "react";
import Heading from "../components/Heading";

const Status = () => {
	const [level, setLevel] = useState(1);

	return (
		<section className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[85%] bg-bgblue-100/90 main-shadow">
			<Heading>status</Heading>
			<main className="flex items-center justify-center font-roboto">
				<div className="flex flex-col justify-center items-center w-fit">
					<p className="text-7xl text-white">{level}</p>{" "}
					<span className="text-lg text-white uppercase">Level</span>
				</div>
				<div className="flex flex-col justify-center items-start w-fit ml-9 text-sm">
					<p className="text-white">
						<span className="uppercase text-gray-400">job:</span> None
					</p>
					<p className="text-white">
						<span className="uppercase text-gray-400">title:</span> hunter
					</p>
				</div>
			</main>
			<div className="w-[85%] border border-white mx-auto mt-10 flex justify-center items-center flex-col ">
				<button className="w-[90%] uppercase font-foe text-white  my-3 mt-6 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all">
					Quests &gt;
				</button>
				<button className="w-[90%] uppercase font-foe text-white  my-3 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all">
					Inventory &gt;
				</button>
				<div className="w-[90%] flex justify-between items-center">
					<button className="w-[45%] uppercase font-foe text-white  my-3 mb-6 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all">
						Inventory &gt;
					</button>
					<button className="w-[45%] uppercase font-foe text-white  my-3 mb-6 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all">
						Inventory &gt;
					</button>
				</div>
			</div>
		</section>
	);
};
export default Status;
