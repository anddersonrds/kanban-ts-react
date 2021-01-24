import React from 'react';
import AddNewItem from '../AddNewItem';

import { useAppState } from '../../context/AppStateContext';

import Card from '../Card';

import * as S from './styles';

type ColumnProps = {
  text: string;
  index: number;
};

export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <S.Container>
      <S.Title>{text}</S.Title>

      {state.lists[index].tasks.map(task => (
        <Card key={task.id} text={task.text} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </S.Container>
  );
};

export default Column;
