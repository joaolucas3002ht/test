import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import logo from '../../assets/logo.png';
import { UseAuthValue } from '../../context/AuthContext';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { useUserInfo } from '../../hooks/userName';
import {
  ContainerAdaptiveMenu,
  ContainerMaxWidth,
  Header,
  Logo,
  MobileMenuToggle,
  Nav,
  NavLinkLogo,
  NavLinkStyled,
} from './styled.js';

const Index = () => {
  const { user } = UseAuthValue();
  const { logout } = UseAuthentication();
  const userEmail = user ? user.email : '';
  const { userName, userStatus } = useUserInfo(userEmail);
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Header>
      <ContainerMaxWidth>
        <NavLinkLogo to='/' style={{ textDecoration: 'none' }}>
          <Logo src={logo} alt='logo' />
          {user && <span>{'/' + userName}</span>}
        </NavLinkLogo>
        <Nav>
          {user && (
            <>
              <MobileMenuToggle onClick={toggleMenu}>
                {expanded ? <LuX /> : <LuMenu />}
              </MobileMenuToggle>

              <ContainerAdaptiveMenu $expanded={expanded}>
                <NavLinkStyled aria-label='home' activeClassName='active' to='/'>
                  Home
                </NavLinkStyled>
                <NavLinkStyled
                  aria-label='Catálogo de postagens'
                  activeClassName='active'
                  to='/catalog'
                >
                  Catalog
                </NavLinkStyled>
                {(userStatus === 'admin' || userStatus === 'funcionario') && (
                  <>
                    <NavLinkStyled
                      aria-label='novo post'
                      to='/create-post'
                      activeClassName='active'
                    >
                      Novo Post
                    </NavLinkStyled>
                    <NavLinkStyled
                      aria-label='painel principal'
                      to='/dashboard'
                      activeClassName='active'
                    >
                      Dashboard
                    </NavLinkStyled>
                    {userStatus === 'admin' && (
                      <NavLinkStyled
                        to='/register'
                        aria-label='pagina de cadastro'
                        activeClassName='active'
                      >
                        Cadastro
                      </NavLinkStyled>
                    )}
                  </>
                )}
                <NavLinkStyled to='/login' aria-label='logout' onClick={logout} className='active'>
                  <MdLogout size={20} />
                  <span>Sair</span>
                </NavLinkStyled>
              </ContainerAdaptiveMenu>
            </>
          )}
        </Nav>
      </ContainerMaxWidth>
    </Header>
  );
};

export default Index;

/*
              <ContainerAdaptiveMenu
                id='menu'
                role='navigation'
                aria-hidden='true'
                className={`${classToggle} `}
              ></ContainerAdaptiveMenu> */
