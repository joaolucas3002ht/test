import { MdCurrencyExchange, MdWhatsapp } from 'react-icons/md';
import logo from '../../assets/logofooter.png';
import { UseAuthValue } from '../../context/AuthContext';
import {
  ContainerLink,
  ContainerMaxWidth,
  Description,
  Footer,
  ImgFooter,
  Invesible,
  NavLinkStyled,
} from './styled';

const suporte = 'Suporte 24hrs - selecione 1';
const financeiro = 'Financeiro - selecione 2';
const site = 'www.genuinesistemas.com.br';
const date = new Date();
const year = date.getFullYear();
const index = () => {
  const { user } = UseAuthValue();

  return (
    <Footer>
      <ContainerMaxWidth>
        {user ? (
          <ContainerLink>
            <Invesible>
              <MdWhatsapp />
            </Invesible>
            <Invesible>
              <MdCurrencyExchange />
            </Invesible>
          </ContainerLink>
        ) : (
          <div />
        )}

        <Description>
          <a href='https://genuinesistemas.com.br/' title={site}>
            <ImgFooter src={logo} />
          </a>
          Genuine Sistemas &copy; , Todos os direitos reservados {year}
        </Description>

        {user ? (
          <ContainerLink>
            <NavLinkStyled to='https://wa.me/5548991674323' title={suporte} className='zap'>
              <MdWhatsapp />
            </NavLinkStyled>
            <NavLinkStyled to='https://wa.me/5548991674323' title={financeiro} className='finan'>
              <MdCurrencyExchange />
            </NavLinkStyled>
          </ContainerLink>
        ) : (
          <div />
        )}
      </ContainerMaxWidth>
    </Footer>
  );
};

export default index;
