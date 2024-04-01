const Heading = ({ children }) => {
	return (
		<div>
			<div className="m-9 w-[60%] mx-auto">
				<div className="status-border h-1 " />
				<div className="status-gradient flex justify-center items-center">
					<h1 className="font-foe uppercase 2xl:text-8xl lg:text-7xl md:text-5xl text-4xl text-white md:-translate-y-1 lg:-translate-y-2 select-none">
						{children}
					</h1>
				</div>
				<div className="status-border h-1" />
			</div>
			<div className="status-border" />
		</div>
	);
};
export default Heading;
