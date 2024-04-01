import Page from "../components/Page";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import questData from "../data/questData";
import clockSvg from "../assets/clock.svg";

const Quests = () => {
	return (
		<Page>
			<Link to="/levlin/">
				<Back />
			</Link>
			<Heading>Quests</Heading>
			<div className="w-fit mx-auto">
				<h1 className="text-g font-foe uppercase text-5xl text-shadow">Goal</h1>
			</div>
			<div className="w-[80%] mx-auto flex px-16 mt-10 justify-center items-center flex-col">
				{questData.quests.map((quest) => (
					<div className="w-full flex justify-between">
						<p className="text-white font-foe text-3xl uppercase text-shadow stroke-black">
							{quest.work}
						</p>
						<p className="text-white font-foe text-3xl uppercase text-shadow stroke-black">
							&#91;0/{quest.goal}&#93;
						</p>
					</div>
				))}
			</div>
			<div className="flex flex-col w-[70%] mx-auto mt-12 justify-center items-center">
				<p className="text-center text-white font-foe text-2xl text-shadow stroke-black font-thin">
					WARNING! - FAILING TO COMPLETE THIS DAILY QUEST WILL RESULT INTO A
					PUNISHMENT.
				</p>
				<img src={clockSvg} alt="clock" className="w-24 h-24 mt-2" />
			</div>
		</Page>
	);
};
export default Quests;
