import { atom } from "@reatom/framework";
import { Modal } from "./modal";
import { isModalOpenAtom } from "./model";

export const Calculate = () => {
	return (
		<>
			{atom((ctx) => (
				<>
					<button
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						on:click={isModalOpenAtom.toggle.bind(this, ctx)}
						data-modal-target="default-modal"
					>
						Рассчитать
					</button>

					<Modal
						isOpen={ctx.spy(isModalOpenAtom)}
						onClose={isModalOpenAtom.toggle.bind(this, ctx)}
					/>
				</>
			))}
		</>
	);
};
