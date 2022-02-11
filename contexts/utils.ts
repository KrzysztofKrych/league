import React, { Context } from 'react';

export type ProviderProps = { children: React.ReactNode };

export function createUseContextFunction<T>(contextType: Context<T>): () => T {
  return function () {
    const context = React.useContext<T>(contextType);
    if (!context) {
      throw new Error(`use${typeof contextType} must be used inside of provider`);
    }
    return context;
  };
}
