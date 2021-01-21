import React from 'react';

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
  </S.Container>
);

export default Column;
