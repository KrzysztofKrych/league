import { TripModel } from './interfaces';

export enum TripAction {
  UPDATE_TRIP_CONTEXT_ACTION = 'UPDATE_TRIP_CONTEXT_ACTION',
}
export interface UpdateTripContextAction {
  type: TripAction.UPDATE_TRIP_CONTEXT_ACTION;
  payload: { body: Partial<TripModel> };
}

export type ActionType = UpdateTripContextAction;
