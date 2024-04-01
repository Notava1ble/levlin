import { Link } from "react-router-dom";

const Buttons = ({ width, children, path }) => {
	return (
		<Link to={`/levlin/${path}`} className={`${width && width}`}>
			<button className="w-full uppercase font-foe text-white  my-3 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all">
				{children} &gt;
			</button>
		</Link>
	);
};
export default Buttons;
