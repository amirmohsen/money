import ExtendableError from 'es6-error';

/**
 * The base error for all custom errors thrown by the "Wealth" library.
 * It's useful when trying to catch all types of "Wealth" errors.
 * @example
 * try {
 *  // operation
 * }
 * catch(e) {
 *  if(e instanceof WealthError) {
 *      // handle error
 *  }
 * }
 */
export default class WealthError extends ExtendableError {

	/**
	 * @param {string} message - Error message
	 */
	constructor(message = 'Wealth error') {
		super(message);
	}
}
