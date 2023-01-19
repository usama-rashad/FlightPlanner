export type TReducerState = {
	isApplying: boolean;
	isEditing: boolean;
	isError: boolean;
};

// Reducer goes through these states in the following order :
// 1) Edit setting
// 2) Apply new setting
// 3) Error if setting is not applicable

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
