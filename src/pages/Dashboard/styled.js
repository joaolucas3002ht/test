import { styled } from 'styled-components';

export const ContainerCreatePost = styled.div`
  gap: 1rem;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CreatePostTitle = styled.h2`
  display: inline-block;
  width: fit-content;
`;

export const ContainerPost = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  padding: 1.5rem 1rem;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Post = styled.div`
  display: flex;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  background-color: ${({ theme }) => theme.color.first5Alpha};
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondOpacity03};
  }
`;

export const TitlePost = styled.h3`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  color: ${({ theme }) => theme.color.fourth};
  font-size: ${({ theme }) => theme.font.size.base};
  align-items: center;
  flex-direction: column;

  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const Author = styled(TitlePost)`
  flex: 1 1;
`;

export const ContainerTitlePost = styled.div`
  flex: 1 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: min-content;
`;

// export const ImagePreview = styled.img`
//   font-family: ${({ theme }) => theme.font.family.roboto};
//   font-weight: 500;
//   color: ${({ theme }) => theme.color.fourth};
//   font-size: ${({ theme }) => theme.font.size.base};
// `;

export const MediaPreview = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ButtonEvent = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.third};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.color.fourth};
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  transition: 300ms color, 300ms background-color;
  &:hover {
    color: ${({ theme }) => theme.color.fifth};
    background-color: ${({ theme }) => theme.color.shadow};
  }

  &.delete:hover {
    color: ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.firstBg};
  }
`;

export const ContainerButtonEvent = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContainerHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
`;
