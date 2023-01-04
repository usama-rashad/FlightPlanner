import {useReducer} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";

enum E_CreateNewAirlineReducerActions {
	Wait,
	AddAirline,
	AddFail,
	AddSuccess,
}

interface I_CreateNewAirlineReducer {
	isUploading: boolean;
	isUploaded: boolean;
	isFailed: boolean;
	successResponse: AxiosResponse;
	failError: AxiosError;
}

let cleanResponse: AxiosResponse | null = null;

const createNewAirlineReducer = (
	state: I_CreateNewAirlineReducer,
	actions: E_CreateNewAirlineReducerActions
) => {
	switch (actions) {
		case E_CreateNewAirlineReducerActions.Wait:
			return {
				...state,
				value:
					((state.isFailed = false),
					(state.isUploaded = false),
					(state.isUploading = false),
					(state.failError = new AxiosError()),
					(state.successResponse = cleanResponse as AxiosResponse)),
			};
			break;
		case E_CreateNewAirlineReducerActions.AddAirline:
			axios({
				method: "POST",
				url: "",
				data: FormData,
			})
				.then((res: AxiosResponse) => {
					actions = E_CreateNewAirlineReducerActions.AddSuccess;
					state.successResponse = res;
				})
				.catch((err: AxiosError) => {
					actions = E_CreateNewAirlineReducerActions.AddFail;
					state.failError = err;
				});

			return {
				...state,
				value:
					((state.isFailed = false),
					(state.isUploaded = false),
					(state.isUploading = true)),
			};
			break;
		case E_CreateNewAirlineReducerActions.AddSuccess:
			return {
				...state,
				value:
					((state.isFailed = false),
					(state.isUploaded = true),
					(state.isUploading = false)),
			};
			break;
		case E_CreateNewAirlineReducerActions.AddFail:
			return {
				...state,
				value:
					((state.isFailed = true),
					(state.isUploaded = false),
					(state.isUploading = false)),
			};
			break;
	}
};
