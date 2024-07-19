import { styled } from 'styled-components'

export const BannerContainer = styled.header`
  background-color: ${(props) => props.theme.violet};
  display: flex;
  justify-content: center;

  > figure {
    width: 144rem;

    > img {
      width: 100%;
      margin-bottom: -0.4rem;
    }
  }
`
