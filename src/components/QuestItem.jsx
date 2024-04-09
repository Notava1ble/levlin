import { FaPlus } from "react-icons/fa";

const QuestItem = ({ work, goal, unit, questsCompleted, handleDone, id }) => {
	const completed = questsCompleted[id];

	return (
		<div
			className={`w-full flex justify-between items-center ${
				completed ? "text-gray-500 line-through" : "text-white"
			}`}
		>
			<p className="font-foe text-3xl uppercase text-shadow stroke-black">
				{work}
			</p>
			<p className="font-foe text-3xl capitalise text-shadow stroke-black">
				&#91;{completed ? `100/${goal}` : `0/${goal}`}
				{unit && unit}&#93;
				{!completed && (
					<button onClick={() => handleDone(id)}>
						<FaPlus className="size-5	ml-1" />
					</button>
				)}
			</p>
		</div>
	);
};
export default QuestItem;
