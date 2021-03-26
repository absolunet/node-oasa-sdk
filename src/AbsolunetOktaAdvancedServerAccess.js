//--------------------------------------------------------
//-- AbsolunetOktaAdvancedServerAccess
//--------------------------------------------------------
import capturingGroupValues      from '@absolunet/capturing-group-values';
import { Joi, validateArgument } from '@absolunet/joi';
import { terminal }              from '@absolunet/terminal';



// Binary
const BINARY = 'sft';

// Waiting on browser...
// Browser step completed successfully.
const BROWSER_VERIFICATION = 'Waiting on browser\\.\\.\\.\nBrowser step completed successfully\\.\n';






/**
 * Okta Advanced Server Access SDK.
 */
class AbsolunetOktaAdvancedServerAccess {

	/**
	 * Get binary name.
	 *
	 * @type {string}
	 */
	get binary() {
		return BINARY;
	}


	/**
	 * Get service name.
	 *
	 * @type {string}
	 */
	get name() {
		return 'Okta Advanced Server Access';
	}


	/**
	 * Get the login command.
	 *
	 * @type {string}
	 */
	get loginCommand() {
		return `${this.binary} enroll`;
	}


	/**
	 * Check if CLI is installed.
	 *
	 * @returns {boolean} If installed.
	 */
	isCLIInstalled() {
		try {
			return Boolean(terminal.process.runAndRead(`which ${this.binary}`));
		} catch {
			return false;
		}
	}


	/**
	 * Run an action and get the response.
	 *
	 * @param {string} action - CLI action.
	 * @returns {string} Response.
	 * @throws {Error} If command fails.
	 */
	runAndRead(action) {
		validateArgument('action', action, Joi.string().required().empty());
		const raw      = terminal.process.runAndRead(`${BINARY} ${action} 2>&1`);
		const { data } = capturingGroupValues(raw, new RegExp(`^(${BROWSER_VERIFICATION})?(?<data>.+)$`, 'us'));

		return data;
	}


	/**
	 * Run an action and get the parsed JSON response.
	 *
	 * @param {string} action - CLI action.
	 * @returns {object|Array} Parsed response.
	 * @throws {Error} If command fails.
	 * @throws {Error} If JSON parsing fails.
	 */
	runAndParseJSON(action) {
		validateArgument('action', action, Joi.string().required().empty());
		const data = this.runAndRead(`${action} --output=json`);

		return JSON.parse(data);
	}


	/**
	 * Check if user is logged and enrolled.
	 *
	 * @returns {boolean} If logged.
	 * @throws {Error} If CLI not installed.
	 */
	isLogged() {
		if (!this.isCLIInstalled()) {
			throw new Error(`${this.binary} CLI is not installed`);
		}

		try {
			return this.runAndParseJSON('list-accounts').length > 0;
		} catch {
			return false;
		}
	}


	/**
	 * List servers available.
	 *
	 * @returns {Array<object>} List of servers in RJSON format.
	 * @throws {Error} If command fails.
	 */
	listServers() {
		return this.runAndParseJSON('list-servers');
	}


	/**
	 * List accounts available.
	 *
	 * @returns {Array<object>} List of acounts.
	 * @throws {Error} If command fails.
	 */
	listAccounts() {
		return this.runAndParseJSON('list-accounts');
	}

}


export default AbsolunetOktaAdvancedServerAccess;
