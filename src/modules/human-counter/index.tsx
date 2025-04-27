import { type Ctx, atom } from "@reatom/framework";
import plural from "plural-ru";
import type { HTMLInputChangeEvent } from "../../shared/types";
import { Title } from "../../ui/title";
import { humanCounterAtom } from "./model";

export { humanCounterAtom } from "./model";

export const HumanCounter = () => {
	const value = atom((ctx) => ctx.spy(humanCounterAtom));
	const valueTitle = atom((ctx) =>
		plural(ctx.spy(humanCounterAtom), "человек", "человека", "человек"),
	);

	const onStepChange = (ctx: Ctx, e: HTMLInputChangeEvent) =>
		humanCounterAtom(ctx, Number(e.target.value));

	return (
		<section>
			<Title>Сколько человек будет?</Title>

			{atom((ctx) => (
				<>
					<label
						for="steps-range"
						class="block my-2 text-md font-medium text-gray-900 dark:text-white"
					>
						{`${ctx.spy(value)} ${ctx.spy(valueTitle)}`}
					</label>
					<input
						id="steps-range"
						type="range"
						min="1"
						max="20"
						value={value}
						step="1"
						on:change={onStepChange}
						class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
					/>
				</>
			))}
		</section>
	);
};
