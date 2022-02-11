import React from 'react';
import { createUseContextFunction } from '../utils';
import { ActionType } from './actions';
import { TripModel } from './interfaces';

export const defaultTripState: TripModel = new TripModel();

export type TripStateContextType = TripModel;
export type TripDispatchContextType = (action: ActionType) => void;

export const TripStateContext = React.createContext<TripStateContextType>(defaultTripState);
export const TripDispatchContext = React.createContext<TripDispatchContextType>((action) => {});

export const useTripState = createUseContextFunction<TripStateContextType>(TripStateContext);
export const useTripDispatch = createUseContextFunction<TripDispatchContextType>(TripDispatchContext);

export const useTrip = (): [TripStateContextType, TripDispatchContextType] => [useTripState(), useTripDispatch()];
