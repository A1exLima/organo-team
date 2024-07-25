import { FormContainer } from './style'
import { InputField } from '../inputField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Zod from 'zod'

const validationSchema = Zod.object({
  TeamName: Zod.string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(50),
  colorTeam: Zod.string()
    .length(7, 'Por favor, selecione uma cor válida')
    .regex(/^#[0-9A-Fa-f]{6}$/, 'Por favor, selecione uma cor válida'),
  colorCard: Zod.string()
    .length(7, 'Por favor, selecione uma cor válida')
    .regex(/^#[0-9A-Fa-f]{6}$/, 'Por favor, selecione uma cor válida'),
})

export const CreateTeamFormField = ({
  formDataToRegisterTeamColor,
  toggleFormScreen,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      TeamName: '',
      colorTeam: '#000000',
      colorCard: '#000000',
    },
  })

  const handleFormData = (data) => {
    formDataToRegisterTeamColor(data)
    reset({
      TeamName: '',
      colorTeam: '#000000',
      colorCard: '#000000',
    })
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleFormData)}
      $toggleFormScreen={toggleFormScreen}
      $marginButton={errors.team}
    >
      <h2>Preencha os dados para criar um novo time.</h2>

      <InputField
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        {...register('TeamName')}
      />
      {errors.TeamName && <span>{errors.TeamName.message}</span>}

      <div className="input-color">
        <label htmlFor="colorTeam">Cor de Fundo</label>
        <input
          id="colorTeam"
          type="color"
          placeholder="Escolha a cor do time"
          {...register('colorTeam')}
        />
      </div>
      {errors.colorTeam && <span>{errors.colorTeam.message}</span>}

      <div className="input-color">
        <label htmlFor="colorCard">Cor do cartão</label>
        <input
          id="colorCard"
          type="color"
          placeholder="Escolha a cor do cartão"
          {...register('colorCard')}
        />
      </div>
      {errors.colorCard && <span>{errors.colorCard.message}</span>}

      <button type="submit">Criar Time</button>
    </FormContainer>
  )
}
