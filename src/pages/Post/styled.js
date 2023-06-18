/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 1rem;
`;

export const Midia = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 2px solid #000; /* borda sólida preta */
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5); /* sombra preta mais evidente */
  border-radius: 10px;

  &.landscape {
    min-width: 100%;
  }

  &.portrait {
    max-height: 50rem;
    min-height: 100%;
  }
  &:hover {
    cursor: pointer;
    max-height: 100%;
  }
`;

export const Video = styled.video`
  min-width: 300px;
  max-width: 350px;
  margin: 0 auto;
  width: 70rem;
  height: auto;
  border: 2px solid #000; /* borda sólida preta */
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5); /* sombra preta mais evidente */
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: ${theme.font.size.xl};
  font-family: ${theme.font.family.robotoSlab};
  text-align: center;
  color: ${theme.color.firstBg};
  padding: 10px;
  font-family: 'AmpleSoft Pro';
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-flow: row;
`;

export const Tag = styled.p`
  font-size: ${theme.font.size.xs};
  padding: 0.6rem;
  border-radius: ${theme.border.radius};
  background-color: ${theme.color.thirdOpacity03};
  width: fit-content;
  box-shadow: 2px 2px 5px ${theme.color.shadow};
  text-transform: lowercase;
  color: ${theme.color.firstBg};

  &:hover {
    background-color: ${theme.color.first5Alpha};
    color: ${theme.color.fourth};
  }
`;

export const Body = styled.p`
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight};
  color: ${theme.color.firstBg};
  padding: 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5); /* sombra preta mais evidente */
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Author = styled.p`
  font-size: ${theme.font.size.xs};
  color: ${theme.color.firstBg};
`;
