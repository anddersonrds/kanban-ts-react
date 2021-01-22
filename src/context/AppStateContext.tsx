import React, { createContext } from 'react';

import { appData, AppState } from '../utils/appData';

type AppStateContextProps = {
  state: AppState;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
