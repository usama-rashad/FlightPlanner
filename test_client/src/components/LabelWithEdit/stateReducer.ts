export type TReducerState = {
  isIdling: boolean;
  isApplying: boolean;
  isEditing: boolean;
  isCanceling: boolean;
  isError: boolean; // No error state is opposite
};

// Reducer goes through these states in the following order :
// 1) 	IDLE 	MODE	=> Nothing is happening.  	Inputs available are : Edit button to start the editing process.
// 2) 	EDIT 	MODE 	=> Awaits user input.  		Inputs available are : Cancel editing and accecpt changes. i.e. Two buttons
// 3.1) APPLY 	MODE 	=> Sends modification request to the server. Cancel input is available.
// 3.2) CANCEL 	MODE 	=> Cancels the server request.
// Consult flow chart made in MS Visio in the documents folder

export enum EReducerActions {
  IDLE,
  APPLY,
  EDIT,
  CANCEL,
  ERROR,
  NO_ERROR,
}

export const stateReducer = (state: TReducerState, action: EReducerActions): TReducerState => {
  switch (action) {
    case EReducerActions.IDLE: {
      return {
        ...state,
        isIdling: true,
        isApplying: false,
        isEditing: false,
        isCanceling: false,
        isError: false,
      };
    }
    case EReducerActions.APPLY: {
      return {
        ...state,
        isIdling: false,
        isApplying: true,
        isEditing: false,
        isCanceling: false,
        isError: false,
      };
    }
    case EReducerActions.EDIT: {
      console.log("Edit mode");
      return {
        ...state,
        isIdling: false,
        isApplying: false,
        isEditing: true,
        isCanceling: false,
        isError: false,
      };
    }
    case EReducerActions.CANCEL: {
      return {
        ...state,
        isIdling: false,
        isApplying: false,
        isEditing: false,
        isCanceling: true,
        isError: false,
      };
    }

    case EReducerActions.NO_ERROR: {
      return {
        ...state,
        isIdling: false,
        isApplying: false,
        isEditing: false,
        isCanceling: false,
        isError: true,
      };
    }

    default:
      return {
        ...state,
        isIdling: false,
        isApplying: false,
        isEditing: false,
        isCanceling: false,
        isError: false,
      };
  }
};

export {};
