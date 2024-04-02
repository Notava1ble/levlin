import { useState } from "react";
import Status from "./pages/Status";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quests from "./pages/Quests";

function App() {
	const [isOpened, setIsOpened] = useState("Status");

	return (
		<div className="bg-sung absolute top-0 bottom-0 right-0 left-0 overflow-hidden bg-cover bg-center bg-no-repeat">
			<div className="w-full h-full backdrop-blur-lg overflow-hidden">
				<div className="w-full h-full flex items-center justify-center">
					<BrowserRouter>
						<Routes>
							<Route path="/levlin" element={<Status />} />
							<Route path="/levlin/quests" element={<Quests />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}

export default App;
