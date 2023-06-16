/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Image = styled.img`
  width: min(100%, 90rem);
`;

export const Title = styled.h1`
  font-family: ${theme.font.family.robotoSlab};
  font-size: ${theme.font.size.lg};
`;
