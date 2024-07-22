import { CardContainer } from './style'
import avatar from '../../assets/icons/defaultAvatar.png'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export const Card = ({ data, highlightColor, handleLikeButton }) => {
  const [like, setLike] = useState(data.like)

  const likeButton = () => {
    setLike((prevState) => !prevState)
  }

  useEffect(() => {
    handleLikeButton(data.id, like)
  }, [data.id, handleLikeButton, like])

  return (
    <CardContainer $highlightColor={highlightColor} $likeColor={like}>
      <figure>
        <div onClick={likeButton}> {like ? <FaHeart /> : <FaRegHeart />} </div>
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
