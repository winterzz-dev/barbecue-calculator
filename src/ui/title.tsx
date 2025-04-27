interface IProps {
	children: string;
}

export const Title = ({ children }: IProps) => {
	return (
		<h2 class="text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
			{children}
		</h2>
	);
};
