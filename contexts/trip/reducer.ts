import { ActionType, TripAction } from './actions';
import { TripModel } from './interfaces';

export const reducer = (state: TripModel, action: ActionType) => {
  switch (action.type) {
    case TripAction.UPDATE_TRIP_CONTEXT_ACTION: {
      return {
        ...state,
        ...action.payload.body,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};
