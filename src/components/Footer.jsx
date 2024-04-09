import Clock from "./Clock";

const Footer = ({ clock, children }) => {
	return (
		<div
			className={`flex flex-col w-[80%] sm:w-[70%] mx-auto mt-12 justify-center items-center $`}
		>
			<p className="text-center text-white font-foe text-2xl text-shadow stroke-black font-thin">
				{children}
			</p>
			{clock && <Clock />}
		</div>
	);
};
export default Footer;
