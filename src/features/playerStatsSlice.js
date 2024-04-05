import { createSlice } from "@reduxjs/toolkit";

const areTodaysQuestsCompleted = localStorage.getItem(
	"areTodaysQuestsCompleted"
)
	? localStorage.getItem("areTodaysQuestsCompleted")
	: false;

const level = localStorage.getItem("level")
	? parseInt(localStorage.getItem("level"))
	: 1;
const xp = localStorage.getItem("xp")
	? parseInt(localStorage.getItem("xp"))
	: 1;

const initialState = {
	level: level,
	xp: xp,
	areTodaysQuestsCompleted: areTodaysQuestsCompleted,
};

export const playerStatsSlice = createSlice({
	name: "playerStats",
	initialState,
	reducers: {
		addXp: (state) => {
			if (state.areTodaysQuestsCompleted === false) {
				const xpGotten = Math.round((state.level / (Math.PI / 40)) ** 1.65);
				const xpNeeded = Math.round((state.level / (Math.PI / 31)) ** 2);
				console.log(xpGotten, xpNeeded, state.xp, state.level);
				state.xp = state.xp + xpGotten;
				state.areTodaysQuestsCompleted = true;

				if (state.xp >= xpNeeded) {
					state.level += 1;
					state.xp = state.xp - xpNeeded;
				}
				localStorage.setItem("level", state.level);
				localStorage.setItem("xp", state.xp);
				console.log(xpGotten, xpNeeded, state.xp, state.level);
			}
		},
		log: (state) => {
			console.log(state.areTodaysQuestsCompleted);
		},
		newDay: (state) => {
			state.areTodaysQuestsCompleted = false;
		},
	},
});

export const { addXp, log, newDay } = playerStatsSlice.actions;

export default playerStatsSlice.reducer;
