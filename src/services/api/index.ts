import type {StoreType} from "@store/index";

/**
 * Injects redux-store to the local variable reduxStore which gets used
 * inside the axios interceptors.
 *
 * For more details, please refer:
 * https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
 *
 * @param store
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const injectStore = (store: StoreType): void => {};
