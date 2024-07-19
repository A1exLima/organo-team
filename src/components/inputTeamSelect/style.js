import { styled } from 'styled-components'

export const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  margin-bottom: 2.9rem;

  > label {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  > select {
    cursor: pointer;
    width: 100%;
    border: none;
    margin-top: 0.8rem;
    padding: 2.1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    color: ${(props) =>
      props.$colorSelect ? props.theme.black : props.theme['placeholder-form']};
    font-weight: ${(props) => (props.$colorSelect ? '600' : '500')};
    font-size: 1.6rem;
    line-height: 1.95rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    > option {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.95rem;
      color: ${(props) => props.theme.black};
    }
  }

  > div {
    position: absolute;
    bottom: 1.5rem;
    right: 2.5rem;

    > svg {
      font-size: 2.4rem;
      color: ${(props) => props.theme['placeholder-form']};
    }
  }
`
