import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import logo from '../../assets/logo.png';
import { UseAuthValue } from '../../context/AuthContext';
import { UseAuthentication } from '../../hooks/useAuthentication';
import {
  ContainerAdaptiveMenu,
  ContainerMaxWidth,
  Header,
  Logo,
  MobileMenuToggle,
  Nav,
  NavLinkLogo,
  NavLinkStyled,
  UserName,
} from './styled.js';

const Index = () => {
  const { user, userName, userStatus } = UseAuthValue();
  const { logout } = UseAuthentication();
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Header>
      <ContainerMaxWidth>
        <NavLinkLogo to='/'>
          <Logo src={logo} alt='logo' />
          {!!user && <UserName>{'@' + userName}</UserName>}
        </NavLinkLogo>

        <Nav>
          {user && (
            <>
              <MobileMenuToggle onClick={toggleMenu}>
                {expanded ? <LuX /> : <LuMenu />}
              </MobileMenuToggle>

              <ContainerAdaptiveMenu $expanded={expanded}>
                <NavLinkStyled
                  aria-label='home'
                  className={isActive => (isActive ? 'active' : '')}
                  to='/'
                >
                  Home
                </NavLinkStyled>
                <NavLinkStyled
                  aria-label='Catálogo de postagens'
                  className={isActive => (isActive ? 'active' : '')}
                  to='/catalog'
                >
                  Catalog
                </NavLinkStyled>
                {(userStatus === 'admin' || userStatus === 'funcionario') && (
                  <>
                    <NavLinkStyled
                      aria-label='novo post'
                      to='/create-post'
                      className={isActive => (isActive ? 'active' : '')}
                    >
                      Novo Post
                    </NavLinkStyled>
                    <NavLinkStyled
                      aria-label='painel principal'
                      to='/dashboard'
                      className={isActive => (isActive ? 'active' : '')}
                    >
                      Dashboard
                    </NavLinkStyled>
                    {userStatus === 'admin' && (
                      <NavLinkStyled
                        to='/register'
                        aria-label='pagina de cadastro'
                        className={isActive => (isActive ? 'active' : '')}
                      >
                        Cadastro
                      </NavLinkStyled>
                    )}
                  </>
                )}
                <NavLinkStyled to='/login' aria-label='logout' onClick={logout} className='active'>
                  {expanded ? 'Sair' : <span>Sair</span>}
                  <MdLogout size={20} />
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
