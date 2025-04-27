import { action, atom } from "@reatom/framework";
import { CHICKEN_EMOJI, PIG_EMOJI } from "../../shared/constants";
import type { MeatType } from "../../shared/types";

export const selectedMeatTypesAtom = atom<MeatType[]>([
	CHICKEN_EMOJI,
	PIG_EMOJI,
]);

export const toggleTypeAction = action<[MeatType]>((ctx, type) => {
	if (ctx.get(selectedMeatTypesAtom).includes(type)) {
		return selectedMeatTypesAtom(
			ctx,
			ctx.get(selectedMeatTypesAtom).filter((meatType) => meatType !== type),
		);
	}

	selectedMeatTypesAtom(ctx, [...ctx.get(selectedMeatTypesAtom), type]);
});
