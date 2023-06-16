import { Container, ContainerSvg, Input, SvgStyled } from './styled';

const sizeSVG = 20;

export function CreateInput({ Svg = '', ...rest }) {
  return (
    <Container>
      {Svg && (
        <ContainerSvg>
          <SvgStyled as={Svg} size={sizeSVG} />
        </ContainerSvg>
      )}
      <Input {...rest} style={{ padding: Svg ? '1.6rem 1.6rem 1.6rem 5.2rem' : '1.6rem', border: '1px solid #C4C4C4'}} />
    </Container>
  );
}
