import React from 'react';

import Container from './components/Container';
import Column from './components/Column';
import Card from './components/Card';

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
  </Container>
);

export default App;
