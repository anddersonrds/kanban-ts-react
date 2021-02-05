import React from 'react';

import { useAppState } from './context/AppStateContext';

import Container from './components/Container';
import Column from './components/Column';
import AddNewItem from './components/AddNewItem';

const App = () => {
  const { state } = useAppState();

  return (
    <Container>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </Container>
  );
};

export default App;
