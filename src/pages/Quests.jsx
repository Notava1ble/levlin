import Page from "../components/Page";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import { FaPlus } from "react-icons/fa";

import questData from "../data/questData";
import clockSvg from "../assets/clock.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	completePunishments,
	addXp,
	newDay,
} from "../features/playerStatsSlice";

const questsObject = {};

questData.quests.map((q) => {
	questsObject[q.id] = false;
});

const Quests = () => {
	const [questsCompleted, setQuestscompleted] = useState(questsObject);
	const [showPunishments, setShowPunishments] = useState(false);
	const [time, setTime] = useState(new Date());
	const [timeLeftToSix, setTimeLeftToSix] = useState("");
	const [countdownTime, setCountdownTime] = useState(null);
	const dispatch = useDispatch();

	const date = useSelector((state) => state.playerStats.date);
	const randpunishment = useSelector(
		(state) => state.playerStats.randpunishment
	);
	const arePunishmentsCompleted = useSelector(
		(state) => state.playerStats.arePunishmentsCompleted
	);

	useEffect(() => {
		const timerID = setInterval(() => {
			const now = new Date();
			const hours = now.getHours();
			if (hours >= 17 && hours <= 22 && !questsCompleted) {
				// 5 PM or later
				const minutesLeft = 59 - now.getMinutes();
				const secondsLeft = 59 - now.getSeconds();
				setTimeLeftToSix(`0: ${minutesLeft}: ${secondsLeft}`);
			} else {
				setTimeLeftToSix("");
				setTime(new Date());
			}

			if (hours >= 18 && hours <= 22 && !questsCompleted) {
				const hoursRemaining = 21 - now.getHours();
				const minutesRemaining = 59 - now.getMinutes();
				const secondsRemaining = 59 - now.getSeconds();
				setCountdownTime(
					`${hoursRemaining}: ${minutesRemaining}: ${secondsRemaining}`
				);
				setShowPunishments(true);
			}

			if (!arePunishmentsCompleted && hours >= 22) {
			}

			if (now.getDate() > date) resetQuestsCompleted();
		}, 1000);

		return () => clearInterval(timerID);
	});

	useEffect(() => {
		if (localStorage.getItem("questsCompleted")) {
			setQuestscompleted(JSON.parse(localStorage.getItem("questsCompleted")));
		}
	}, []);

	const handleDone = (id) => {
		if (showPunishments === true) {
			dispatch(completePunishments());
		} else {
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
		}
	};

	const resetQuestsCompleted = () => {
		setQuestscompleted(questsObject);
		dispatch(newDay());
	};

	return (
		<Page>
			<Link to="/levlin">
				<Back />
			</Link>
			<Heading>{showPunishments ? "Punishment" : "Quests"}</Heading>
			<div className="w-fit mx-auto">
				<h1 className="text-g font-foe uppercase text-5xl text-shadow">Goal</h1>
			</div>
			<div className="w-[80%] mx-auto flex md:px-16 mt-10 justify-center items-center flex-col">
				{showPunishments ? (
					<div
						className={`w-full flex justify-between ${
							arePunishmentsCompleted
								? "text-gray-400 line-through"
								: "text-white"
						}`}
					>
						<p className="font-foe text-3xl uppercase text-shadow stroke-black">
							{randpunishment.work}
						</p>
						<p className="font-foe text-3xl uppercase text-shadow stroke-black">
							&#91;0/{randpunishment.goal}&#93; className=
							{`ml-1 ${arePunishmentsCompleted && "hidden"}`}
							<button>
								<FaPlus className="size-5	" onClick={() => handleDone()} />
							</button>
						</p>
					</div>
				) : (
					questData.quests.map((quest) => (
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
					))
				)}
			</div>
			<div
				className={`flex flex-col w-[80%] sm:w-[70%] mx-auto mt-12 justify-center items-center ${
					showPunishments && "mt-20"
				}`}
			>
				<p className="text-center text-white font-foe text-2xl text-shadow stroke-black font-thin">
					<span className="text-red-500">WARNING!</span> - FAILING TO COMPLETE
					THIS DAILY QUEST WILL RESULT INTO A PUNISHMENT.
				</p>
				<div className="flex items-center justify-center gap-3 mt-4">
					<img
						src={clockSvg}
						alt="clock"
						className="w-10 h-10"
						onClick={() => {
							resetQuestsCompleted();
						}}
					/>
					<p className="text-white font-foe text-lg md:text-2xl uppercase px-1">
						{countdownTime
							? `you have  ${countdownTime} left`
							: timeLeftToSix
							? `Complete quests before: ${timeLeftToSix}`
							: time.toLocaleTimeString()}
					</p>
				</div>
			</div>
		</Page>
	);
};
export default Quests;
