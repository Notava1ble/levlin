import { useState } from "react";
import Heading from "../components/Heading";
import Buttons from "../components/Buttons";

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
			<div className="w-[85%] border border-white mx-auto mt-14 md:mt-10 flex justify-center items-center flex-col transition-all p-3">
				<Buttons className={"w-[90%]"}>Quests</Buttons>
				<Buttons className={"w-[90%]"}>Inventory</Buttons>
				<div className="w-[90%] flex justify-between items-center">
					<Buttons className={"w-[47%]"}>Inventory</Buttons>
					<Buttons className={"w-[47%]"}>Settings</Buttons>
				</div>
			</div>
		</section>
	);
};
export default Status;
