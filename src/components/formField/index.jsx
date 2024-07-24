import { FormContainer } from './style'

import { InputField } from '../inputField'
import { InputTeamSelect } from '../inputTeamSelect'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Zod from 'zod'

import { backgroundTeamsColorsDefault } from '../../styles/themes/teamsColors'

const validationSchema = Zod.object({
  name: Zod.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(50),
  office: Zod.string()
    .min(3, 'O cargo deve ter pelo menos 3 caracteres')
    .max(50),
  image: Zod.string()
    .min(1, 'A URL deve ter pelo menos 1 caractere')
    .max(50, 'A URL deve ter no máximo 50 caracteres')
    .refine((value) => value.startsWith('http'), {
      message: 'A URL deve começar com "http"',
    }),
  team: Zod.string().min(3, 'Selecione um time').max(50),
})

export const FormField = ({
  formDataToRegisterCollaborator,
  toggleFormScreen,
}) => {
  const nameOfEachTeam = Object.keys(backgroundTeamsColorsDefault)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: '',
      office: '',
      image: '',
      team: '',
    },
  })

  const handleFormData = (data) => {
    formDataToRegisterCollaborator(data)
    reset()
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleFormData)}
      $toggleFormScreen={toggleFormScreen}
      $marginButton={errors.team}
    >
      <h2>Preencha os dados para criar o card do colaborador.</h2>

      <InputField
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        {...register('name')}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <InputField
        label="Cargo"
        type="text"
        placeholder="Digite seu cargo"
        {...register('office')}
      />
      {errors.office && <span>{errors.office.message}</span>}

      <InputField
        label="Imagem"
        type="text"
        placeholder="Informe o endereço da imagem"
        {...register('image')}
      />
      {errors.image && <span>{errors.image.message}</span>}

      <InputTeamSelect
        id="team"
        label="Time"
        listData={nameOfEachTeam}
        {...register('team')}
      />
      {errors.team && <span>{errors.team.message}</span>}

      <button type="submit">Criar Card</button>
    </FormContainer>
  )
}
