import { styled } from 'styled-components'

export const CardContainer = styled.div`
  min-width: 26.2rem;
  height: 27.2rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  border-radius: 1rem;
  padding-bottom: 2.7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > figure {
    background-color: ${(props) => props.$highlightColor};
    width: 100%;
    height: 9.19rem;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 9.1rem;
    position: relative;

    > div {
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 2.2rem;
      right: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        display: flex;
        font-size: 2.2rem;
        color: ${(props) =>
          props.$likeColor ? props.theme.violet : props.theme.violet};

        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    > img {
      width: 12rem;
      height: 12rem;
      border-radius: 9999rem;
    }
  }

  > div {
    padding: 0 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > span:first-child {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.19rem;
      color: ${(props) => props.theme.violet};
    }

    > span:last-child {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.95rem;
      color: ${(props) => props.theme.black};
    }
  }
`
