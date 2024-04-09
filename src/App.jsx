import Status from "./pages/Status";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import QuestPage from "./pages/QuestPage";

function App() {
	return (
		<div className="bg-sung absolute top-0 bottom-0 right-0 left-0 overflow-hidden bg-cover bg-center bg-no-repeat">
			<div className="w-full h-full backdrop-blur-lg overflow-hidden">
				<ToastContainer
					position="top-center"
					draggablePercent={60}
					draggable
					stacked
				/>
				<div className="w-full h-full flex items-center justify-center">
					<BrowserRouter>
						<Routes>
							<Route path="/levlin" element={<Status />} />
							<Route path="/levlin/quests" element={<QuestPage />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}

export default App;
