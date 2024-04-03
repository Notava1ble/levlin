import { configureStore } from "@reduxjs/toolkit";
import playerStatsReducer from "../features/playerStatsSlice";

export const store = configureStore({
	reducer: {
		playerStats: playerStatsReducer,
	},
});
