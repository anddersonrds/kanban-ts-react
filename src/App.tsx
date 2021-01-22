import React from 'react';

import Container from './components/Container';
import Column from './components/Column';
import Card from './components/Card';
import AddNewItem from './components/AddNewItem';

const App = () => (
  <Container>
    <Column text="To Do">
      <Card text="Ganerate app scafold" />
    </Column>

    <Column text="In Progress">
      <Card text="Learn Typescript" />
    </Column>

    <Column text="Done">
      <Card text="Begin to use static typing" />
    </Column>

    <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
  </Container>
);

export default App;
