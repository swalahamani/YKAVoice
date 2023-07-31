import {APIResponse} from "@config/types/NetworkTypes";

/**
 * This function helps the api service functions to return
 * a standard result-object.
 *
 * @param error
 * @param httpStatusCode
 * @param message
 * @param data
 * @returns
 */
function buildResult(
	error: any,
	httpStatusCode: any,
	message: any,
	data: any,
): APIResponse {
	return {
		error: error || null,
		httpStatusCode: httpStatusCode || null,
		message: message || null,
		data: data || null,
	};
}

export default {buildResult};
