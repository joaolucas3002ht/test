import styled, { css, keyframes } from 'styled-components';

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
`;

const skeletonKey = keyframes`
  0% {
    background-position: -250%;
  }

  100% {
    background-position: 250%;
  }
`;

export const SkeletonAnimated = css`
  animation: ${skeletonKey} 2s ease-in-out infinite;
  animation-delay: 0.2s;
  background-image: linear-gradient(90deg, transparent, hsla(0, 0%, 67%, 0.7), transparent);
  background-color: hsl(0, 0%, 57%);
  background-size: 190%;
  background-repeat: no-repeat;
`;

export const ContainerMidia = styled.div`
  display: inline-block;
  ${SkeletonAnimated}
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${props => props.marginTop || '0'};
  ${MidiaStyled}
`;

export const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  width: fit-content;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.thirdBg};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.first5Alpha};
  height: 27px;
`;

export const ContainerTag = styled.div`
  ${SkeletonAnimated}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  overflow-y: scroll;
  height: 3rem;
  border-radius: ${({ theme }) => theme.border.radius};
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.thirdBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track:hover {
    background-color: ${({ theme }) => theme.color.first5Alpha};
  }
`;

export const Title = styled.h2`
  ${SkeletonAnimated}
  height: 2rem;
  border-radius: ${({ theme }) => theme.border.radius};
  width: 100%;
`;

export const Author = styled.h3`
  ${SkeletonAnimated}
  height: 2rem;
  border-radius: ${({ theme }) => theme.border.radius};
  width: 100%;
`;
