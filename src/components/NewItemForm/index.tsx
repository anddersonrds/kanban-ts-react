import React, { useState } from 'react';

import { useFocus } from '../../utils/useFocus';

import * as S from './styles';

type NewItemformProps = {
  onAdd(text: string): void;
};

const NewItemform = ({ onAdd }: NewItemformProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  return (
    <S.NewItemFormContainer>
      <S.NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <S.NewItemButton onClick={() => onAdd(text)}>Create</S.NewItemButton>
    </S.NewItemFormContainer>
  );
};

export default NewItemform;
