import { styled } from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: 2.9rem;
  display: block;

  > label {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.19rem;
  }
  > input {
    width: 100%;
    border: none;
    margin-top: 0.8rem;
    padding: 2.1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

    font-weight: 600;
    color: ${(props) => props.theme.black};
    font-size: 1.6rem;
    line-height: 1.95rem;

    &::placeholder {
      font-weight: 500;
      color: ${(props) => props.theme['placeholder-form']};
    }
  }
`
