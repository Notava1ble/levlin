import { useEffect, useState } from "react";
import clockSvg from "../assets/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { newDay, penalty, setMode } from "../features/playerStatsSlice";
import { toast } from "react-toastify";

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

			if (date !== now.getDate()) {
				if (!arePunishmentsCompleted && !areTodaysQuestsCompleted)
					dispatch(penalty());
				dispatch(newDay());
			}

			// Mode Logic
			switch (mode) {
				case "quest":
					if (areTodaysQuestsCompleted) {
						dispatch(setMode("rest"));
					} else if (now.getHours() >= 18 && now.getHours() < 22) {
						dispatch(setMode("punishment"));
						toast.warning("Quests not completed. Activating Punishment");
					} else if (now.getHours() >= 22) {
						dispatch(penalty());
						dispatch(setMode("rest"));
					}
				case "punishment":
					if (arePunishmentsCompleted) {
						dispatch(setMode("rest"));
					} else if (now.getHours() >= 22) {
						dispatch(penalty);
						dispatch(setMode("rest"));
					}
			}
		}, 1000);

		return () => clearInterval(timerId);
	});

	return (
		<div className="flex items-center justify-center gap-3 mt-4">
			<img src={clockSvg} alt="clock" className="w-10 h-10" />
			<p className="text-white font-foe text-lg md:text-2xl uppercase px-1">
				{time}
			</p>
		</div>
	);
};
export default Clock;
