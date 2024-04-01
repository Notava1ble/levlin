import Page from "../components/Page";
import Heading from "../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import Back from "../components/Back";

const Quests = () => {
	return (
		<Page>
			<Link to="/levlin/">
				<Back />
			</Link>
			<Heading>Quests</Heading>
		</Page>
	);
};
export default Quests;
