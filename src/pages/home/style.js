import { styled } from 'styled-components'
import { MuiColorInput } from 'mui-color-input'

export const StyledMuiColorInput = styled(MuiColorInput)`
  .MuiOutlinedInput-root {
    width: 24rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.article`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    gap: 0rem;
  }
`

export const ContainerCard = styled.article`
  .title-container-card {
    width: 100%;
    padding: 0 4rem;
    height: fit-content;
    position: relative;
    margin: 8rem 0;

    @media (max-width: 768px) {
      margin: 4rem 0;
    }

    > div {
      position: relative;
      max-width: 112.1rem;
      margin: 0 auto;

      > h2 {
        font-size: 4rem;
        font-weight: 400;
        line-height: 7.2rem;
        text-align: center;
        color: ${(props) => props.theme.violet};
        padding-bottom: 1.4rem;
        position: relative;

        @media (max-width: 330px) {
          line-height: 4.2rem;
        }

        &::after {
          content: '';
          display: block;
          width: 6.4rem;
          height: 0.4rem;
          background-color: ${(props) => props.theme.violet};
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      }

      > button {
        border: none;
        background: none;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: -1.2rem;

        > figure {
          > img {
            width: 10rem;
            height: 10rem;
            filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.3));

            transition: transform 0.3s ease-in-out;

            &:hover {
              transform: scale(1.05);
            }
          }
        }

        @media (max-width: 768px) {
          position: inherit;
          width: 100%;
          padding-top: 1rem;
        }
      }
    }
  }
`

export const TeamBox = styled.section`
  position: relative;
  min-height: 43.8rem;
  padding-top: 3.4rem;
  background-color: ${(props) => props.$background};
  padding: 15.4rem 4rem 3.4rem 4rem;

  .color-box {
    position: absolute;
    top: 2.8rem;
    right: 4rem;
    z-index: 2;

    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
      > p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.black};
      }
    }
  }

  .box-card {
    max-width: 112.1rem;
    cursor: grab;
    margin: 0 auto;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-android .swiper-slide,
    .swiper-ios .swiper-slide,
    .swiper-wrapper {
      padding-bottom: 4rem;
    }

    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: 0.5rem;
    }

    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: 0.5rem;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: ${(props) => props.theme.violet};
    }

    .swiper-pagination-bullet-active {
      background: ${(props) => props.theme.violet};
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.violet};

  > figure {
    max-width: 144rem;

    > img {
      display: flex;
      width: 100%;
      object-fit: cover;
    }
  }
`
