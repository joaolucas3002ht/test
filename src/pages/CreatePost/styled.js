import styled from 'styled-components';

export const Progress = styled.progress`
  border-radius: 10px;
  width: min(100%, 30rem);
  border-radius: 50px;
  overflow: hidden;
  height: 1.5rem;

  &::-webkit-progress-inner-element {
  }

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.color.thirdOpacity03};
  }

  &::-webkit-progress-value {
    background-color: hsl(110, 90%, 30%);
  }
`;

export const Error = styled.p`
  padding: 0.8rem;
  font-size: 1.2rem;
  color: hsl(0, 50%, 50%);
  border-radius: 1rem;
  width: min-content;
  margin: 0 auto;
  background-color: hsl(0, 80%, 90%);
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1.5rem;

  & .red,
  & > div {
    flex: 1 1 27rem;
    width: 100%;
    min-width: initial;
  }

  & input.red {
    background-color: ${({ theme }) => theme.color.thirdOpacity03};
  }
`;

export const ContainerForm = styled.section`
  height: fit-content;
  width: min(100%, 75rem);
  display: flex;
  /* padding: 3rem 2rem min(15vh, 4rem); */
  /* box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow}; */
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  gap: 2.3rem;
  /* border-radius: ${({ theme }) => theme.border.radius}; */
  /* background-color: ${({ theme }) => theme.color.thirdOpacity03}; */

  > h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Form = styled.form`
width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

export const ButtonForm = styled.button`
  background-color: ${({ theme }) => theme.color.first5Alpha};
  color: ${({ theme }) => theme.color.fourth};
  text-align: center;
  height: 5.2rem;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1.6rem;
  transition: 300ms color, 300ms background-color;

  &:hover {
    background-color: ${({ theme }) => theme.color.fifth};
    color: ${({ theme }) => theme.color.fourth};
    transition: 0.5s;
    border-radius: 10px;
  }

  &:disabled {
    background-color: hsl(198, 97%, 10%);
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.fourth};
    outline-offset: 3px;
  }
  :hover {
    text-decoration: underline;
  }
`;

export const Textaria = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 1.6rem;
  color: ${({ theme }) => theme.color.second};
  border-radius: ${({ theme }) => theme.border.radius};
  font-family: ${({ theme }) => theme.font.family.roboto};
  line-height: ${({ theme }) => theme.font.lineHeight};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  word-break: break-all;
  resize: none;
  white-space: pre-wrap;
  border: 1px solid #ccc;
  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.first};
    outline-offset: 3px;
  }
`;
