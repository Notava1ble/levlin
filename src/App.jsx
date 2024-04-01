import Status from "./pages/Status";

function App() {
	return (
		<div className="bg-sung absolute top-0 bottom-0 right-0 left-0 overflow-hidden bg-cover bg-center bg-no-repeat">
			<div className="w-full h-full backdrop-blur-lg overflow-hidden">
				<div className="w-full h-full flex items-center justify-center">
					<Status />
				</div>
			</div>
		</div>
	);
}

export default App;
