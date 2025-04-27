import { atom } from "@reatom/framework";
import { MeatTypeItem } from "./components/meat-type-item.tsx";
import { calculationResultAtom, canShareAtom, shareAction } from "./model";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: IProps) => (
	<>
		{atom((ctx) => (
			<div
				tabindex="-1"
				aria-hidden={!isOpen}
				class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-gray-500/40 dark:bg-slate-900/70 ${!isOpen && "hidden"}`}
			>
				<div class="absolute bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 p-4 w-full max-w-2xl max-h-full">
					<div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-800">
						<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
							<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
								Рецепт вашей вечеринки
							</h3>
						</div>
						<div class="p-4 md:p-5 space-y-4">
							<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								Готовь мясо порциями, чтобы не пересушить, и держи готовое в
								фольге. Овощи (перец, лук, грибы) жарь отдельно или нанизывай с
								мясом, но следи, чтобы не подгорели. Лаваш на решётке и стейки
								из овощей – отличное дополнение. Главное – контролируй огонь и
								время прожарки.
							</p>
							<p class="flex justify-center items-center gap-4">
								{Object.entries(ctx.spy(calculationResultAtom)).map(
									([type, value]) => (
										<MeatTypeItem type={type} value={value} />
									),
								)}
							</p>
						</div>

						<div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
							<button
								data-modal-hide="default-modal"
								type="button"
								on:click={onClose}
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
							>
								Спасибо
							</button>
							{ctx.get(canShareAtom) && (
								<button
									data-modal-hide="default-modal"
									type="button"
									class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
									on:click={shareAction.bind(this, ctx)}
								>
									Поделиться
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		))}
	</>
);
