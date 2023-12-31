import styled, { css } from 'styled-components';

export const ContainerPost = styled.a`
  height: fit-content;
  width: min(100%, 36rem);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  transition: 300ms background-color;
  text-decoration: none;
  border: 1px solid #ccc;
  &:hover {
    background-color: ${({ theme }) => theme.color.first5Alpha};
  }
`;

const MidiaStyled = css`
  width: 100%;
  height: 18rem;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;
  border-radius: ${({ theme }) => theme.border.radius};
  &:hover {
    transform: scale(1.05);
  }
`;

export const ContainerMidia = styled.div`
  background-color: ${({ theme }) => theme.color.first5Alpha};
  ${MidiaStyled}
`;

export const Image = styled.img`
  ${MidiaStyled}
`;

export const Video = styled.video`
  ${MidiaStyled}
`;

export const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  width: fit-content;
  font-size: 1.1rem;
  color: ${({theme})=>theme.color.thirdBg};
  border-radius: ${({theme})=>theme.border.radius};
  background-color: ${({theme})=>theme.color.first5Alpha};
  height: 27px;
`;

export const ContainerTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  overflow-y: scroll;
  height: 27px;
  &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.thirdBg};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent
      };
      &::-webkit-scrollbar-track:hover {
        background-color: ${({theme})=>theme.color.first5Alpha}
      };  
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.color.thirdBg};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Author = styled.h3`
  font-size: ${({theme})=>theme.font.size.xs};
  color: ${({theme})=>theme.color.thirdBg};
`;
