import React, { createContext, useContext } from 'react';

import { appData, AppState } from '../utils/appData';

type AppStateContextProps = {
  state: AppState;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: {
        text: string;
        listId: string;
      };
    };

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
