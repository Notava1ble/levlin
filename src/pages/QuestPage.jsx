import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import Back from "../components/Back";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Quests from "../components/Quests";

const QuestsPage = () => {
	const mode = useSelector((state) => state.playerStats.mode);

	return (
		<Page>
			<Link to="/levlin">
				<Back />
			</Link>
			<Heading>{mode}</Heading>
			<div className="w-fit mx-auto">
				<h1 className="text-g font-foe uppercase text-5xl text-shadow">Goal</h1>
			</div>
			<Quests />
			<Footer clock={true}>
				{mode === "quest" && <span className="text-red-500">Warning: </span>}
				{mode === "quest" &&
					"Failing to complete thisquest will result into a punishment associated with it."}
			</Footer>
		</Page>
	);
};
export default QuestsPage;
