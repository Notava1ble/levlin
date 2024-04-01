const Page = ({ children, className }) => {
	return (
		<section
			className={`${
				className && className
			} w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[85%] bg-bgblue-100/90 main-shadow relative overflow-hidden`}
		>
			{children}
		</section>
	);
};
export default Page;
