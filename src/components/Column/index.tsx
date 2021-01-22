import React from 'react';
import AddNewItem from '../AddNewItem';

import * as S from './styles';

type ColumnProps = {
  text: string;
};

export const Column = ({
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => (
  <S.Container>
    <S.Title>{text}</S.Title>
    {children}

    <AddNewItem
      toggleButtonText="+ Add another task"
      onAdd={console.log}
      dark
    />
  </S.Container>
);

export default Column;
