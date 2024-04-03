import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	level: 1,
	xp: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addXp: (state) => {
			const xpGotten = Math.round((state.level / (Math.PI / 40)) ** 1.65);
			const xpNeeded = Math.round((state.level / (Math.PI / 31)) ** 2);
			console.log(xpGotten, xpNeeded);
			state.xp = state.xp + xpGotten;

			if (state.xp >= xpNeeded) {
				state.level += 1;
				state.xp = state.xp - xpNeeded;
			}
		},
	},
});

export const { addXp } = counterSlice.actions;

export default counterSlice.reducer;
