import React from 'react';
import { reducer } from './reducer';
import { defaultTripState, TripDispatchContext, TripStateContext } from './context';
import { ProviderProps } from '../utils';

export const TripProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, defaultTripState);

  return (
    <TripStateContext.Provider value={state}>
      <TripDispatchContext.Provider value={dispatch}>{children}</TripDispatchContext.Provider>
    </TripStateContext.Provider>
  );
};
