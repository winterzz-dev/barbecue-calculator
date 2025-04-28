import { Calculate } from "./modules/calculate";
import { HumanCounter } from "./modules/human-counter";
import { MeatType } from "./modules/meat-type";
import { PartyDuration } from "./modules/party-duration";

export const App = () => (
	<main class="flex flex-col gap-8 py-10 px-4 w-screen max-w-lg m-auto">
		<h1 class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
			нашашлык - калькулятор шашлыка 🍗
		</h1>

		<div class="flex flex-col gap-10">
			<MeatType />
			<HumanCounter />
			<PartyDuration />
			<Calculate />
		</div>

		<p className="text-gray-500 dark:text-gray-400">
			Было полезно? Поддержи проект:
		</p>
		<ul className="text-gray-500 list-disc list-inside dark:text-gray-400">
			<li>
				<span>Поставь звезду проекту на </span>
				<a
					href="https://github.com/winterzz-dev/barbecue-calculator"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					Github
				</a>
			</li>
			<li>Поделись с друзьями</li>
			<li>
				Добавь приложение на главный экран - так ты сможешь пользоваться им даже
				без сети
			</li>
		</ul>
	</main>
);
