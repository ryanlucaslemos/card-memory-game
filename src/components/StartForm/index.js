import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import {
  Select, Label, Button,
} from './styles';

import Context from '../../context';

import { DIFFICULTIES, STATUS } from '../../env';

export default function StartForm() {
  const { setDifficulty, setStatus } = useContext(Context);
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    setDifficulty(data.difficulty);
    setStatus(STATUS.STARTED);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="difficulty">
        Selecione a dificuldade
        <Select name="difficulty" id="difficulty" ref={register({ required: true })}>
          <option value={DIFFICULTIES.EASY}>Fácil</option>
          <option value={DIFFICULTIES.MEDIUM}>Médio</option>
          <option value={DIFFICULTIES.HARD}>Dificil</option>
        </Select>
        {errors.difficulty && 'Escolha uma dificuldade'}
      </Label>

      <Button type="submit">Jogar</Button>
    </form>
  );
}
