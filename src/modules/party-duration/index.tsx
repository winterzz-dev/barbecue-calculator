import { type Ctx, atom } from "@reatom/framework";
import type { HTMLInputChangeEvent } from "../../shared/types";
import { Title } from "../../ui/title";
import { DURATION_TITLE_MAP } from "./constants";
import { partyDurationAtom } from "./model";

export const PartyDuration = () => {
	const onStepChange = (ctx: Ctx, e: HTMLInputChangeEvent) =>
		partyDurationAtom(ctx, Number(e.target.value));

	return (
		<section>
			<Title>Вечеринка будет долгая?</Title>

			{atom((ctx) => (
				<>
					<label
						for="steps-range"
						class="block my-2 text-md font-medium text-gray-900 dark:text-white"
					>
						{DURATION_TITLE_MAP[ctx.spy(partyDurationAtom)]}
					</label>
					<input
						id="steps-range"
						type="range"
						min="0.8"
						max="1.7"
						step="0.3"
						value={ctx.spy(partyDurationAtom)}
						on:change={onStepChange}
						class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
					/>
				</>
			))}
		</section>
	);
};
