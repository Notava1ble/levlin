import Heading from "../components/Heading";
import Buttons from "../components/Buttons";
import Page from "../components/Page";

import { useDispatch, useSelector } from "react-redux";
import {} from "../features/playerStatsSlice";
import { useEffect } from "react";

const Status = () => {
	useEffect(() => {
		if (localStorage.getItem("level")) {
			localStorage.clear();
		}
	});
	const xp = useSelector((state) => state.playerStats.xp);
	const level = useSelector((state) => state.playerStats.level);
	const xpNeeded = Math.round((level / (Math.PI / 31)) ** 2);
	const dispatch = useDispatch();

	return (
		<Page>
			<Heading>status</Heading>
			<main className="flex items-center justify-center font-roboto">
				<div className="flex flex-col justify-center items-center w-fit">
					<p className="text-7xl text-white">
						{level}
						<span className="text-sm">
							{xp}/{xpNeeded}
						</span>
					</p>
					<span className="text-lg text-white uppercase">Level</span>
					<div></div>
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
				<Buttons width={"w-[90%]"} path="quests">
					Quests
				</Buttons>
				<Buttons width={"w-[90%]"} path="shop">
					Shop
				</Buttons>
				<div className="w-[90%] flex justify-between items-center">
					<Buttons width={"w-[47%]"} path="inventory">
						Inventory
					</Buttons>
					<Buttons width={"w-[47%]"} path="settings">
						Settings
					</Buttons>
				</div>
			</div>
			<div className="w-[85%] border border-white mx-auto hidden justify-center items-center transition-all p-3 gap-2">
				<button
					className="text-white border p-1 mt-1"
					onClick={() => {
						localStorage.clear(), location.reload();
					}}
				>
					Dev: reset data
				</button>
				<button
					className="text-white border p-1 mt-1 hidden"
					onClick={() => dispatch(addXp())}
				>
					Dev: addXp
				</button>
			</div>
		</Page>
	);
};
export default Status;
