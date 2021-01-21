import React from 'react';

import * as S from './styles';

type CardProps = {
  text: string;
};

export const Card = ({ text }: CardProps) => <S.Container>{text}</S.Container>;

export default Card;
