import { action, atom, reatomBoolean } from "@reatom/framework";
import { round } from "es-toolkit";
import type { MeatType } from "../../shared/types";
import { humanCounterAtom } from "../human-counter";
import { selectedMeatTypesAtom } from "../meat-type";
import {
	HUMAN_BASE_VALUE,
	LOSS_COEFFICIENT,
	SHARE_DATA,
	SUBSTANTIAL_COEFFICIENT,
} from "./constants";

export const isModalOpenAtom = reatomBoolean(false);

export const calculationResultAtom = atom((ctx) => {
	const humanCount = ctx.spy(humanCounterAtom);
	const meatTypes = ctx.spy(selectedMeatTypesAtom);

	const NEED_VALUE = humanCount * HUMAN_BASE_VALUE * LOSS_COEFFICIENT;
	const avgMeatTypeValue = NEED_VALUE / meatTypes.length;

	return meatTypes.reduce<Partial<Record<MeatType, string>>>((acc, type) => {
		acc[type] =
			`${round(avgMeatTypeValue * SUBSTANTIAL_COEFFICIENT[type], -2)} г`;

		return acc;
	}, {});
});

export const canShareAtom = atom(
	"share" in navigator && navigator.canShare(SHARE_DATA),
);

export const shareAction = action(() => navigator.share(SHARE_DATA));
