import { BannerContainer } from './style'
import banner from '../../assets/images/banner.png'

export const Header = () => {
  return (
    <BannerContainer>
      <figure>
        <img src={banner} alt="Banner Organo" />
      </figure>
    </BannerContainer>
  )
}
