import { styled } from 'styled-components'

export const FormContainer = styled.form`
  display: ${(props) => (props.$toggleFormScreen ? 'block' : 'none')};
  width: 112.1rem;
  margin: 4rem auto;
  margin-bottom: 0;
  border-radius: 2rem;
  padding: 3.3rem 9.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${(props) => props.theme['background-form']};

  > h2 {
    font-weight: 500;
    font-size: 3.2rem;
    padding-bottom: 4.4rem;
    text-align: center;
  }

  > span {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.red};
  }

  .container-input-select {
    display: flex;
    align-items: center;
    gap: 2rem;

    > button {
      opacity: 85%;
      width: 20rem;
      cursor: pointer;
      border: 2px solid transparent;
      background-color: ${(props) => props.theme.violet};
      padding: 1.7rem 1rem;
      border-radius: 1rem;
      color: ${(props) => props.theme.white};
      font-size: 1.8rem;
      font-weight: 700;
      text-align: center;

      transition: all 0.3s ease-in-out;

      &:hover {
        border: 2px solid ${(props) => props.theme.black};
        opacity: 100%;
      }
    }
  }

  > button {
    display: block;
    cursor: pointer;
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.violet};
    padding: 2rem 2.5rem;
    border-radius: 1rem;
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-top: ${({ $marginButton }) => ($marginButton ? '1.5rem' : '4rem')};

    transition: border 0.3s ease-in-out;

    &:hover {
      border: 2px solid ${(props) => props.theme.black};
    }
  }

  @media (max-width: 1020px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 4rem auto;
    margin-bottom: 0;

    padding: 3.5rem;

    > h2 {
      font-size: 3rem;
    }

    > button {
      padding: 1.8rem 2.2rem;
    }
  }
`
