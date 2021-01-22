import styled from 'styled-components';

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  text-align: left;
  border: none;
  border-radius: 3px;
  padding: 10px 12px;
  color: ${props => (props.dark ? '#000' : '#fff')};
  background-color: #ffffff3d;
  transition: background 85ms ease-in;

  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.button`
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 6px 12px;
  color: #fff;
  background-color: #5aac44;
  box-shadow: none;
`;

export const NewItemInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
