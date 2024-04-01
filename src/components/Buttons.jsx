const Buttons = ({ className, children }) => {
	return (
		<button
			className={`${
				className && className
			} uppercase font-foe text-white  my-3 p-1 border text-3xl border-gray-200 hover:bg-slate-100 hover:text-gray-900 active:bg-white transition-all`}
		>
			{children} &gt;
		</button>
	);
};
export default Buttons;
