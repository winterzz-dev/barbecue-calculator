interface IProps {
	children: string;
	isPressed: boolean;
	onClick: () => void;
}

export const ToggleButton = ({ children, isPressed, onClick }: IProps) => (
	<div
		on:click={onClick}
		class={`flex items-center justify-center size-16 rounded-lg border-2 text-4xl cursor-pointer ${isPressed ? "bg-slate-300 border-gray-600 dark:bg-gray-500 dark:border-gray-400" : "bg-slate-50 border-gray-400 dark:bg-gray-700 dark:border-gray-600"}`}
	>
		{children}
	</div>
);
