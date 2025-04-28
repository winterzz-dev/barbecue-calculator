import {
	CHICKEN_EMOJI,
	FISH_EMOJI,
	PIG_EMOJI,
	VEGETABLES_EMOJI,
} from "../../shared/constants";

export const SHARE_DATA = {
	title: "Калькулятор шашлыка",
	text: "Быстро и легко рассчитать шашлык из мяса, рыбы и овощей на компанию.",
	url: "https://нашашлык.рф",
};

export const SUBSTANTIAL_COEFFICIENT = {
	[PIG_EMOJI]: 1,
	[CHICKEN_EMOJI]: 1.2,
	[FISH_EMOJI]: 1.3,
	[VEGETABLES_EMOJI]: 1.4,
};

export const LOSS_COEFFICIENT = 1.3;

export const HUMAN_BASE_VALUE = 350;
