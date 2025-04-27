import { MEAT_TYPES } from "./constants";
import type { MeatType } from "./types";

export const isMeatType = (type: string | MeatType): type is MeatType =>
	MEAT_TYPES.includes(type);
