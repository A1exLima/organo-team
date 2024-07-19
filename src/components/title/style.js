import { styled } from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 3.8rem;

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.33rem;
    text-align: center;
    color: ${(props) => props.theme.black};
    padding-bottom: 0.9rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 3.2rem;
      height: 0.4rem;
      background-color: ${(props) => props.$background};
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
`
