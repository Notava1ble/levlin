import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import punishments from "../data/punishments";
import questData from "../data/questData";

const questsObject = {};

questData.map((q) => {
	questsObject[q.id] = false;
});

const initialState = {
	date: new Date().getDate(),
	level: 1,
	xp: 0,
	mode: "quest",
	areTodaysQuestsCompleted: false,
	arePunishmentsCompleted: false,
	doneQuestsObject: questsObject,
	randpunishment: punishments[Math.floor(Math.random() * punishments.length)],
	quests: questData,
};

export const playerStatsSlice = createSlice({
	name: "playerStats",
	initialState,
	reducers: {
		addXp: (state) => {
			if (state.areTodaysQuestsCompleted === false) {
				const xpGotten = Math.round((state.level / (Math.PI / 40)) ** 1.65);
				const xpNeeded = Math.round((state.level / (Math.PI / 31)) ** 2);
				state.xp = state.xp + xpGotten;
				state.areTodaysQuestsCompleted = true;
				state.mode = "rest";
				toast.success(`You earned ${xpGotten} xp`, {
					autoClose: 3000,
					className:
						"bg-bgblue-200/60 text-white font-foe text-xl uppercase backdrop-blur",
				});

				if (state.xp >= xpNeeded) {
					state.level += 1;
					state.xp = state.xp - xpNeeded;
					toast.success(`You reached Level ${state.level}`, {
						delay: 1000,
						className:
							"bg-bgblue-200/60 text-white font-foe text-xl uppercase backdrop-blur",
					});
				}
				console.log(xpGotten, xpNeeded, state.xp, state.level);
			}
		},
		log: (state) => {
			console.log(state.areTodaysQuestsCompleted);
		},
		newDay: (state) => {
			state.areTodaysQuestsCompleted = false;
			state.arePunishmentsCompleted = false;
			state.randpunishment =
				punishments[Math.floor(Math.random() * punishments.length)];
			state.date = new Date().getDate();
			state.doneQuestsObject = questsObject;
			state.mode = "quest";
		},
		completePunishments: (state) => {
			state.level = state.level + 1;
			state.arePunishmentsCompleted = true;
			state.randpunishment =
				punishments[Math.floor(Math.random() * punishments.length)];
			state.mode = "rest";
			toast.success(`You reached Level ${state.level}`, {
				delay: 1000,
				className:
					"bg-bgblue-200/60 text-white font-foe text-xl uppercase backdrop-blur",
			});
		},
		completeQuest: (state, id) => {
			const newState = { ...state.doneQuestsObject, [id.payload]: true };
			state.doneQuestsObject = newState;
		},
		showNotif: (state, action) => {
			toast.success(action.payload, {
				delay: 1000,
				className:
					"bg-bgblue-200/60 text-white font-foe text-xl uppercase backdrop-blur",
			});
		},
		setMode: (state, action) => {
			state.mode = action.payload;
		},
		penalty: (state) => {
			state.arePunishmentsCompleted = true;
			if (state.level === 1) {
				toast.error("Level to low. Failed to give punishment");
			} else {
				state.level -= 1;
				toast.success("Failed to Complete the Punishment. You Lost 1 Level", {
					delay: 1000,
					className:
						"bg-bgblue-200/60 text-white font-foe text-xl uppercase backdrop-blur",
				});
			}
		},
	},
});

export const {
	addXp,
	log,
	newDay,
	completePunishments,
	completeQuest,
	showNotif,
	setMode,
	penalty,
} = playerStatsSlice.actions;

export default playerStatsSlice.reducer;
