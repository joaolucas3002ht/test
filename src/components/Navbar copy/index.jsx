import { useState, useEffect } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import logo from '../../assets/logo.png';
import { UseAuthValue } from '../../context/AuthContext';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { useUserInfo } from '../../hooks/userName';
import {
  ButtonMenuExpanded,
  ContainerAdaptiveMenu,
  ContainerMaxWidth,
  Header,
  Logo,
  Nav,
  NavLinkLogo,
  NavLinkStyled,
} from './styled.js';

const Index = () => {
  const { user } = UseAuthValue();
  const { logout } = UseAuthentication();
  const [toggle, setToggle] = useState(false);
  const [classToggle, setClassToggle] = useState('');
  const userEmail = user ? user.email : '';
  const { userName, userStatus } = useUserInfo(userEmail);

  useEffect(() => {
    setClassToggle(toggle ? 'expanded' : '');
  }, [toggle]);

  return (
    <Header>
      <ContainerMaxWidth>
        <NavLinkLogo to='/' style={{ textDecoration: 'none' }}>
          <Logo src={logo} alt='logo' />
          {user && <span>{'/' + userName}</span>}
        </NavLinkLogo>
        <Nav className={toggle}>
          {user && (
            <>
              <ButtonMenuExpanded
                aria-label='Abrir menu'
                aria-controls='menu'
                aria-expanded={toggle}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? <LuX /> : <LuMenu />}
              </ButtonMenuExpanded>

              <ContainerAdaptiveMenu
                id='menu'
                role='navigation'
                aria-hidden='true'
                className={`${classToggle} `}
              >
                <NavLinkStyled
                  aria-label='home'
                  to='/'
                  className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
                >
                  Home
                </NavLinkStyled>
                <NavLinkStyled
                  aria-label='Catálogo de postagens'
                  to='/catalog'
                  className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
                >
                  Catalog
                </NavLinkStyled>
                {(userStatus === 'admin' || userStatus === 'funcionario') && (
                  <>
                    <NavLinkStyled
                      aria-label='novo post'
                      to='/create-post'
                      className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
                    >
                      Novo Post
                    </NavLinkStyled>
                    <NavLinkStyled
                      aria-label='painel principal'
                      to='/dashboard'
                      className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
                    >
                      Dashboard
                    </NavLinkStyled>
                    {userStatus === 'admin' && (
                      <NavLinkStyled
                        to='/register'
                        aria-label='pagina de cadastro'
                        className={`${({ isActive }) =>
                          isActive ? 'active' : ''} ${classToggle} `}
                      >
                        Cadastrar Usuário
                      </NavLinkStyled>
                    )}
                  </>
                )}
                <NavLinkStyled
                  aria-label='desconectar'
                  onClick={logout}
                  className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
                >
                  <span>Desconectar</span> <MdLogout />
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

// <Header>
//   <NavLink to='/' style={{ textDecoration: 'none' }}>
//     <div>
//       <Logo src={logo} alt='logo' />
//       {user && <span>/{userName}</span>}
//     </div>{' '}
//   </NavLink>
//   <Nav>
//     {user && (
//       <>
//         <NavLinkStyled
//           aria-label='home'
//           to='/'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Home
//         </NavLinkStyled>

//         <NavLinkStyled
//           aria-label='Catálogo de postagens'
//           to='/catalog'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Catalog
//         </NavLinkStyled>
//       </>
//     )}
//     {user && userStatus === 'admin' && (
//       <>
//       <NavLinkStyled
//           aria-label='novo post'
//           to='/create-post'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Novo Post
//         </NavLinkStyled>

//         <NavLinkStyled
//           aria-label='painel principal'
//           to='/dashboard'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Dashboard
//         </NavLinkStyled>
//         <NavLinkStyled
//           to='/register'
//           aria-label='pagina de cadastro'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Cadastrar Usuário
//         </NavLinkStyled>
//       </>
//     )}
//     {user && userStatus === 'funcionario' && (
//       <>
//       <NavLinkStyled
//           aria-label='novo post'
//           to='/create-post'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Novo Post
//         </NavLinkStyled>

//         <NavLinkStyled
//           aria-label='painel principal'
//           to='/dashboard'
//           className={`${({ isActive }) => (isActive ? 'active' : '')} ${classToggle} `}
//         >
//           Dashboard
//         </NavLinkStyled>
//       </>
//     )}
//     {user && (
//       <NavLinkStyled aria-label='desconectar' onClick={logout} className={() => 'Lo'}>
//         <MdLogout />
//       </NavLinkStyled>
//     )}
//   </Nav>
// </Header>
