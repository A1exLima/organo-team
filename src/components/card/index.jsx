import { CardContainer } from './style'
import avatar from '../../assets/icons/defaultAvatar.png'

export const Card = ({ data, highlightColor }) => {
  return (
    <CardContainer $highlightColor={highlightColor}>
      <figure>
        <img
          src={data.image || avatar}
          alt={`Imagem do colaborador: ${data.name}`}
          title={`Imagem do colaborador: ${data.name}`}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = avatar
          }}
        />
      </figure>

      <div>
        <span>{data.name}</span>
        <span>{data.office}</span>
      </div>
    </CardContainer>
  )
}
