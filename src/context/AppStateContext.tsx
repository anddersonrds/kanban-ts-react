import React, { createContext, useReducer, useContext } from 'react';
import { nanoid } from 'nanoid';

import { appData, AppState } from '../utils/appData';

type AppStateContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
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

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: []
          }
        ]
      };
    }
    case 'ADD_TASK': {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
