import type {
	CHICKEN_EMOJI,
	FISH_EMOJI,
	PIG_EMOJI,
	VEGETABLES_EMOJI,
} from "./constants";

export type HTMLInputChangeEvent = Event & {
	currentTarget: HTMLInputElement;
	target: HTMLInputElement;
};

export type MeatType =
	| typeof CHICKEN_EMOJI
	| typeof PIG_EMOJI
	| typeof FISH_EMOJI
	| typeof VEGETABLES_EMOJI;
