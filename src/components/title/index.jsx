import { TitleContainer } from './style'

export const Title = ({ name, background }) => {
  return (
    <TitleContainer $background={background}>
      <h2>{name}</h2>
    </TitleContainer>
  )
}
