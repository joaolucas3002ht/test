import { createGlobalStyle } from 'styled-components';
// import { containerStyleBody } from './styles/styledGlobal';

export const GlobalStyle = createGlobalStyle`
   * {
      margin:0;
      border: none;
      padding:0;
      outline: none;
      box-sizing: border-box;
      transition: 0;
      &:focus{
         outline:  ${({ theme }) => theme.color.first} solid 2px ;
         outline-offset: .3rem;
      }
   }
   html {
      font-size: 62.5%;
      width: 100%;
      min-height: 100vh;
      height: 100%;
      background-color:  ${({ theme }) => theme.color.fourthBg};
   }
   body {
      width: 100%;
      font-family: ${({ theme }) => theme.font.family.roboto};
      min-height: 100vh;
      height: 100%;
   }

   @font-face {
      font-family: 'AmpleSoft Pro';
      src: url('/public/font/AmpleSoftPro-Bold.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Bold.woff') format('woff');
      }
      /* Outras propriedades da fonte, como weight e style, podem ser especificadas aqui */

      @font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-Bold.eot');
    src: local('/public/font/AmpleSoftPro-Bold'),
        url('/public/font/AmpleSoftPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-Bold.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Bold.woff') format('woff'),
        url('/public/font/AmpleSoftPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-Medium.eot');
    src: local('/public/font/AmpleSoftPro-Medium'),
        url('/public/font/AmpleSoftPro-Medium.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-Medium.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Medium.woff') format('woff'),
        url('/public/font/AmpleSoftPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-Light.eot');
    src: local('/public/font/AmpleSoftPro-Light'),
        url('/public/font/AmpleSoftPro-Light.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-Light.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Light.woff') format('woff'),
        url('/public/font/AmpleSoftPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-Thin.eot');
    src: local('/public/font/AmpleSoftPro-Thin'),
        url('/public/font/AmpleSoftPro-Thin.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-Thin.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Thin.woff') format('woff'),
        url('/public/font/AmpleSoftPro-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-ExtraLight.eot');
    src: local('/public/font/AmpleSoftPro-ExtraLight'),
        url('/public/font/AmpleSoftPro-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-ExtraLight.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-ExtraLight.woff') format('woff'),
        url('/public/font/AmpleSoftPro-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'AmpleSoft Pro';
    src: url('/public/font/AmpleSoftPro-Regular.eot');
    src: local('/public/font/AmpleSoftPro-Regular'),
        url('/public/font/AmpleSoftPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('/public/font/AmpleSoftPro-Regular.woff2') format('woff2'),
        url('/public/font/AmpleSoftPro-Regular.woff') format('woff'),
        url('/public/font/AmpleSoftPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}


`;
