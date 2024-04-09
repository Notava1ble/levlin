import { useEffect, useState } from "react";
import clockSvg from "../assets/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { newDay, penalty, setMode } from "../features/playerStatsSlice";

const Clock = () => {
	const dispatch = useDispatch();
	const [time, setTime] = useState("");
	const mode = useSelector((state) => state.playerStats.mode);
	const date = useSelector((state) => state.playerStats.date);
	const areTodaysQuestsCompleted = useSelector(
		(state) => state.playerStats.areTodaysQuestsCompleted
	);
	const arePunishmentsCompleted = useSelector(
		(state) => state.playerStats.arePunishmentsCompleted
	);

	useEffect(() => {
		const timerId = setInterval(() => {
			const now = new Date();
			const minutes = now.getMinutes();
			const seconds = now.getSeconds();

			// Hour Logic
			if (mode === "punishment") {
				const hours = -(18 - now.getHours());
				setTime(
					`Time Remaining: ${3 - hours}: ${59 - minutes}: ${59 - seconds}`
				);
			} else {
				const hours = now.getHours();
				setTime(`${hours}: ${minutes}: ${seconds}`);
			}

			// Mode Logic

			if (
				now.getHours() >= 18 &&
				now.getHours() < 22 &&
				!areTodaysQuestsCompleted &&
				mode === "quest"
			) {
				dispatch(setMode("punishment"));
			} else if (
				now.getHours() >= 18 &&
				areTodaysQuestsCompleted &&
				mode === "quest"
			) {
				dispatch(setMode("rest"));
			} else if (
				(now.getHours() >= 22 || date !== now.getDate()) &&
				!arePunishmentsCompleted &&
				!areTodaysQuestsCompleted
			) {
				dispatch(penalty());
			}

			if (date !== now.getDate()) {
				dispatch(newDay());
			}
		}, 1000);

		return () => clearInterval(timerId);
	});

	return (
		<div className="flex items-center justify-center gap-3 mt-4">
			<img
				src={clockSvg}
				alt="clock"
				className="w-10 h-10"
				onClick={() => dispatch(newDay())}
			/>
			<p className="text-white font-foe text-lg md:text-2xl uppercase px-1">
				{time}
			</p>
		</div>
	);
};
export default Clock;
