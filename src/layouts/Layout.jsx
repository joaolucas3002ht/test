//react router
import { Outlet } from 'react-router-dom';
//components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
//styled
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global';
import { ContainerHidden, Main } from '../styles/styledGlobal';
//theme
import { theme } from '../theme';

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerHidden>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </ContainerHidden>
    </ThemeProvider>
  );
}
