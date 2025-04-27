interface IProps {
	type: string;
	value: string;
}

export const MeatTypeItem = ({ type, value }: IProps) => (
	<div class="flex flex-col justify-center items-center gap-2 size-16 rounded-lg border-2 text-md bg-slate-200 border-gray-600 dark:bg-gray-700 dark:border-gray-600">
		<span class="text-2xl">{type}</span>
		<span class="dark:text-slate-100">{value}</span>
	</div>
);
