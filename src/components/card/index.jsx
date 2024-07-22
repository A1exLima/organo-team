import { CardContainer } from './style'
import { useEffect, useState } from 'react'

import { RiDeleteBin2Fill } from 'react-icons/ri'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

import avatar from '../../assets/icons/defaultAvatar.png'

export const Card = ({
  data,
  highlightColor,
  handleLikeButton,
  handleDeleteButton,
}) => {
  const [like, setLike] = useState(data.like)

  const likeButton = () => {
    setLike((prevState) => !prevState)
  }

  const deleteButton = () => {
    handleDeleteButton(data.id)
  }

  useEffect(() => {
    handleLikeButton(data.id, like)
  }, [data.id, handleLikeButton, like])

  return (
    <CardContainer $highlightColor={highlightColor} $likeColor={like}>
      <figure>
        <div onClick={likeButton}> {like ? <FaHeart /> : <FaRegHeart />} </div>
        <div onClick={deleteButton}>
          <RiDeleteBin2Fill />
        </div>
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
