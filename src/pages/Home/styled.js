import styled, { css } from 'styled-components';

export const ContainerHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ContainerSearch = styled.section``;

export const PostsContainer = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Style = css`
  border-radius: 5px;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(to right, transparent 8%, red 18%, transparent 33%);
  background-size: 800px 100px;
  animation: wave-squares 2s infinite ease-out;
`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// import styled, { keyframes } from 'styled-components';
