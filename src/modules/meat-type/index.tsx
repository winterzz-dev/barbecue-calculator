import { atom } from "@reatom/framework";
import { MEAT_TYPES } from "../../shared/constants";
import { isMeatType } from "../../shared/utils";
import { Title } from "../../ui/title";
import { ToggleButton } from "../../ui/toggle-button";
import { selectedMeatTypesAtom, toggleTypeAction } from "./model";

export { selectedMeatTypesAtom } from "./model";

export const MeatType = () => {
	return (
		<section>
			<Title>Что будем готовить?</Title>
			{atom((ctx) => (
				<div class="flex gap-2 mt-4">
					{MEAT_TYPES.map(
						(item) =>
							isMeatType(item) && (
								<ToggleButton
									isPressed={ctx.spy(selectedMeatTypesAtom).includes(item)}
									onClick={() => toggleTypeAction(ctx, item)}
								>
									{item}
								</ToggleButton>
							),
					)}
				</div>
			))}
		</section>
	);
};
