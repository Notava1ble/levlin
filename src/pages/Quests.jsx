import Page from "../components/Page";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import { FaPlus } from "react-icons/fa";

import questData from "../data/questData";
import clockSvg from "../assets/clock.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addXp, log, newDay } from "../features/playerStatsSlice";

const questsObject = {};

questData.quests.map((q) => {
	questsObject[q.id] = false;
});

const Quests = () => {
	const [questsCompleted, setQuestscompleted] = useState(questsObject);
	const dispatch = useDispatch();

	dispatch(log());

	useEffect(() => {
		if (localStorage.getItem("questsCompleted")) {
			setQuestscompleted(JSON.parse(localStorage.getItem("questsCompleted")));
		}
	}, []);

	const handleDone = (id) => {
		setQuestscompleted((prevQuestsCompleted) => {
			const newState = { ...prevQuestsCompleted, [id]: true };
			localStorage.setItem("questsCompleted", JSON.stringify(newState));

			if (Object.values(newState).every((item) => item === true)) {
				console.log(
					Object.values(questsCompleted).every((item) => item === true)
				);
				localStorage.setItem("areTodaysQuestsCompleted", true);
				dispatch(addXp());
			}

			return newState;
		});
	};

	const resetQuestsCompleted = () => {
		setQuestscompleted(questsObject);
		localStorage.setItem("questsCompleted", JSON.stringify(questsObject));
		dispatch(newDay());
	};

	return (
		<Page>
			<Link to="/levlin">
				<Back />
			</Link>
			<Heading>Quests</Heading>
			<div className="w-fit mx-auto">
				<h1 className="text-g font-foe uppercase text-5xl text-shadow">Goal</h1>
			</div>
			<div className="w-[80%] mx-auto flex px-16 mt-10 justify-center items-center flex-col">
				{questData.quests.map((quest) => (
					<div
						className={`w-full flex justify-between ${
							questsCompleted[quest.id]
								? "text-gray-400 line-through"
								: "text-white"
						}`}
						key={quest.id}
					>
						<p
							className={`font-foe text-3xl uppercase text-shadow stroke-black `}
						>
							{questsCompleted[quest.id] && "completed/ "}
							{quest.work}
						</p>
						<p
							className={`font-foe text-3xl uppercase text-shadow stroke-black ${
								questsCompleted[quest.id] && "text-gray-400"
							}`}
						>
							&#91;0/{quest.goal}&#93;
							<button
								className={`ml-1 ${questsCompleted[quest.id] && "hidden"}`}
								onClick={() => handleDone(quest.id)}
							>
								<FaPlus className="size-5	" />
							</button>
						</p>
					</div>
				))}
			</div>
			<div className="flex flex-col w-[70%] mx-auto mt-12 justify-center items-center">
				<p className="text-center text-white font-foe text-2xl text-shadow stroke-black font-thin">
					WARNING! - FAILING TO COMPLETE THIS DAILY QUEST WILL RESULT INTO A
					PUNISHMENT.
				</p>
				<img
					src={clockSvg}
					alt="clock"
					className="w-24 h-24 mt-2"
					onClick={() => {
						resetQuestsCompleted();
					}}
				/>
			</div>
		</Page>
	);
};
export default Quests;
