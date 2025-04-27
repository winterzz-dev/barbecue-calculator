import { Calculate } from "./modules/calculate";
import { HumanCounter } from "./modules/human-counter";
import { MeatType } from "./modules/meat-type";
import { PartyDuration } from "./modules/party-duration";

export const App = () => (
	<main class="flex flex-col gap-8 py-10 px-4 w-screen max-w-lg m-auto">
		<h1 class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
			Калькулятор шашлыка 🍗
		</h1>

		<div class="flex flex-col gap-10">
			<MeatType />
			<HumanCounter />
			<PartyDuration />
			<Calculate />
		</div>
	</main>
);
