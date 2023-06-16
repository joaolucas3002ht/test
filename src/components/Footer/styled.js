import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MaxWidth } from '../../styles/styledGlobal';

export const Footer = styled.footer`
  height: 100px;
  color: white;
  width: 100%;
  background-color: ${({ theme }) => theme.color.first5Alpha};
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding-inline: min(4vw, 3rem);
`;
export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  position: relative;
  margin: 0 auto;
`;
export const ImgFooter = styled.img`
  width: 25px;
`;
export const ContainerMaxWidth = styled.div`
  ${MaxWidth}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 3rem;
  display: flex;
  justify-content: end;
  text-decoration: none;
  transition: 300ms color;
  padding: 0.3rem;
  border-radius: ${({ theme }) => theme.border.radius};


  &:hover {
    color: ${({ theme }) => theme.color.first};
  }

  /* > p{
    color: ${({ theme }) => theme.color.fourth};
    margin-right: -160px;
  }
  }
  > span{
    color: ${({ theme }) => theme.color.fourth};
    margin-right: -125px;
    &:hover {
    color: ${({ theme }) => theme.color.first};
  }
  } */
`;

export const ContainerLink = styled.div`
  display: flex;
  width: min-content;
  flex-direction: row;
  gap: 0.8rem;
  position: absolute;
  right: 0;
`;

export const Invesible = styled(NavLinkStyled)`
  opacity: 0;
`;
