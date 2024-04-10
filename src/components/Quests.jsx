import { useSelector, useDispatch } from "react-redux";
import QuestItem from "./QuestItem";
import {
	addXp,
	completePunishments,
	completeQuest,
	setMode,
} from "../features/playerStatsSlice";
import { FaPlus } from "react-icons/fa";

const Quests = () => {
	const dispatch = useDispatch();
	const questData = useSelector((state) => state.playerStats.quests);
	const mode = useSelector((state) => state.playerStats.mode);
	const randpunishment = useSelector(
		(state) => state.playerStats.randpunishment
	);
	const questsCompleted = useSelector(
		(state) => state.playerStats.doneQuestsObject
	);

	// Checks if quests are completed to add xp
	if (Object.values(questsCompleted).every((item) => item === true)) {
		dispatch(addXp());
	}

	// Completes Quest on Click
	const handleQuestDone = (id) => {
		dispatch(completeQuest(id));
	};
	const handlePunishmentDone = (id) => {
		dispatch(completePunishments());
	};

	// Switch mode logic

	switch (mode) {
		case "quest":
			return (
				<div className="w-[80%] mx-auto flex md:px-16 mt-10 justify-center items-center flex-col">
					{questData.map((item) => (
						<QuestItem
							work={item.work}
							goal={item.goal}
							unit={item.unit}
							key={item.id}
							id={item.id}
							questsCompleted={questsCompleted}
							handleDone={handleQuestDone}
						/>
					))}
				</div>
			);
		case "punishment":
			return (
				<div className="w-[80%] mx-auto flex md:px-16 mt-10 justify-between items-center text-3xl text-white uppercase">
					<p className="font-foe text-shadow stroke-black">
						{randpunishment.work}
					</p>
					<p className="font-foe text-shadow stroke-black">
						&#91;0/{randpunishment.goal}
						{randpunishment.unit && randpunishment.unit}&#93;
						<button onClick={() => handlePunishmentDone()}>
							<FaPlus className="size-5	ml-1" />
						</button>
					</p>
				</div>
			);
		default:
			return (
				<div className="w-[80%] mx-auto flex md:px-16 mt-10 justify-center items-center flex-col">
					<h1 className="text-gray-200 font-foe text-2xl text-shadow my-6">
						Enough for today. Come back tomorrow
					</h1>
				</div>
			);
	}
};
export default Quests;
