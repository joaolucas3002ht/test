import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { MaxWidth } from '../../styles/styledGlobal';

export const Header = styled.header`
  height: 7rem;
  padding: 0 2rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px 0px;
  background-color: ${({ theme }) => theme.color.fifth};
`;

export const ContainerMaxWidth = styled.div`
  ${MaxWidth}
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;

  span {
    color: rgb(255, 255, 255);
    font-size: 2.4rem;
    color: white;
    margin-bottom: 4px;
    font-family: 'AmpleSoft Pro';
    font-weight: bold;
  }
`;

export const Logo = styled.img`
  width: 140px;
  margin-top: 6px;
  margin-right: 1px;
  text-decoration: none;
`;

export const Nav = styled.nav`
  height: fit-content;
  width: fit-content;
  position: relative;
  min-height: 100%;
  display: flex;

  @media (max-width: 900px) {
    position: absolute;
    right: 0;
    top: 0;
    width: fit-content;
    height: fit-content;
    gap: 1rem;
    align-items: end;
    flex-direction: column;
    padding-top: 1.95rem;
    width: 24rem;
  }
`;

export const ButtonMenuExpanded = styled.button`
  font-size: 2rem;
  padding: 0.6rem;
  border-radius: ${props => props.theme.border.radius};
  background-color: ${({ theme }) => theme.color.secondOpacity03};
  color: ${({ theme }) => theme.color.first};
  cursor: pointer;
  display: none;
  margin-right: 0.5rem;
  transition: 0.3s background-color, 0.3s color;

  @media (max-width: 900px) {
    display: flex;
  }

  &:hover {
    color: ${({ theme }) => theme.color.fourth};
    background-color: ${({ theme }) => theme.color.secondBg};
  }
`;

export const ContainerAdaptiveMenu = styled.section`
  display: flex;
  gap: 1rem;
  flex-flow: row;
  width: fit-content;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    background-color: ${({ theme }) => theme.color.fifth};
    padding-bottom: 1rem;
    gap: 0.8rem;
    flex-flow: column;
    border-end-end-radius: ${({ theme }) => theme.border.radius};
    border-end-start-radius: ${({ theme }) => theme.border.radius};

    width: 100%;
    height: 100%;
    transform-origin: top right;
    transition: transform 0.25s ease;
    transform: ${props => (props.$expanded ? 'scaleY(1)' : 'scaleY(0)')};
    visibility: ${props => (props.$expanded ? 'visible' : 'hidden')};
    z-index: 1;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.firstHover};
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s background-color, 0.3s color;

  &.active {
    background-color: ${({ theme }) => theme.color.secondOpacity03};
    color: ${({ theme }) => theme.color.first};
  }

  &.active:hover,
  &:hover {
    color: ${({ theme }) => theme.color.fourth};
    background-color: ${({ theme }) => theme.color.secondBg};
  }

  & span {
    display: none;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1.3rem;
    font-size: ${({ theme }) => theme.font.size.base};
    display: flex;
    gap: 0.5rem;
    border-radius: 0;

    &.expanded {
      & span {
        display: inline;
      }
    }
  }
`;

export const MobileMenuToggle = styled.button`
  font-size: 2rem;
  padding: 0.6rem;
  border-radius: ${props => props.theme.border.radius};
  background-color: ${({ theme }) => theme.color.secondOpacity03};
  color: ${({ theme }) => theme.color.first};
  cursor: pointer;
  display: none;
  margin-right: 0.5rem;
  transition: 0.3s background-color, 0.3s color;

  display: none;
  @media (max-width: 900px) {
    display: flex;
    margin-right: 0.5rem;
    z-index: 1;
  }
`;
