export type TReducerState = {
	isApplying: boolean;
	isEditing: boolean;
	isError: boolean;
};

// Reducer goes through these states in the following order :
// 1) 	IDLE 	MODE	=> Nothing is happening.  	Inputs available are : Edit button to start the editing process.
// 2) 	EDIT 	MODE 	=> Awaits user input.  		Inputs available are : Cancel editing and accecpt changes. i.e. Two buttons
// 3.1) APPLY 	MODE 	=> Sends modification request to the server. Cancel input is available.
// 3.2) CANCEL 	MODE 	=> Cancels the server request.

export enum EReducerActions {
	APPLY,
	EDIT,
	ERROR,
	NO_ERROR,
}

export const stateReducer = (state: TReducerState, action: EReducerActions): TReducerState => {
	switch (action) {
		case EReducerActions.APPLY: {
			return {
				...state,
				isEditing: false,
				isApplying: true,
				isError: false,
			};
		}
		case EReducerActions.EDIT: {
			console.log("Edit mode");
			return {
				...state,
				isEditing: true,
				isApplying: false,
				isError: false,
			};
		}
		case EReducerActions.ERROR: {
			return {
				...state,
				isEditing: false,
				isApplying: false,
				isError: true,
			};
		}
		case EReducerActions.NO_ERROR: {
			return {
				...state,
				isEditing: false,
				isApplying: false,
				isError: false,
			};
		}

		default:
			return {
				...state,
				isEditing: false,
				isApplying: false,
				isError: false,
			};
	}
};

export {};
