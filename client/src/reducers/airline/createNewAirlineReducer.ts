import {useReducer} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";

export enum E_CreateNewAirlineReducerActionTypes {
	Wait,
	AddAirline,
	AddFail,
	AddSuccess,
}

export interface I_CreateNewAirlineReducerActions {
	action: E_CreateNewAirlineReducerActionTypes;
	payload: FormData;
}

interface I_CreateNewAirlineReducer {
	isUploading: boolean;
	isUploaded: boolean;
	isFailed: boolean;
	successResponse: AxiosResponse;
	failError: AxiosError;
	successCount: number;
	failCount: number;
}
let cleanResponse: AxiosResponse | null = null;

export const createAirlineReducerInitialState: I_CreateNewAirlineReducer = {
	failCount: 0,
	successCount: 0,
	failError: new AxiosError(),
	successResponse: cleanResponse as unknown as AxiosResponse,
	isFailed: false,
	isUploaded: false,
	isUploading: false,
};

export const createNewAirlineReducer = (
	state: I_CreateNewAirlineReducer,
	actions: I_CreateNewAirlineReducerActions
) => {
	switch (actions.action) {
		case E_CreateNewAirlineReducerActionTypes.Wait:
			return {
				...state,
			};
			break;
		case E_CreateNewAirlineReducerActionTypes.AddAirline:
			axios({
				method: "POST",
				url: "http://localhost:5000/api/v1/createAirline",
				data: FormData,
			})
				.then((res: AxiosResponse) => {
					actions.action = E_CreateNewAirlineReducerActionTypes.AddSuccess;
					console.log("File sent");
					state.successResponse = res;
				})
				.catch((err: AxiosError) => {
					actions.action = E_CreateNewAirlineReducerActionTypes.AddFail;
					console.log("File send error");
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
		case E_CreateNewAirlineReducerActionTypes.AddSuccess:
			return {
				...state,
				value:
					((state.isFailed = false),
					(state.isUploaded = true),
					(state.isUploading = false)),
			};
			break;
		case E_CreateNewAirlineReducerActionTypes.AddFail:
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
