import signature from "../img/Firma.png";
import styled from "styled-components";

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0px;
  bottom: 0px;
  text-shadow: 0 0 0.02rem black, 0 0 0.8rem white;
  font-weight: bold;
  width: 100vw;
  position: fixed;
`;

const Signature = styled.img`
  height: 8vh;
  margin-right: 1rem;
  padding-top: 1 rem;
`;

const P = styled.p`
  padding-left: 1rem;
  padding-top: 3 rem;
`;

function Footer() {
  const currantYear = new Date().getFullYear();
  return (
    <FooterFlex>
      <P>Tots els drets reservats Copyright &copy; {currantYear} </P>
      <Signature src={signature} alt="Signat Krystel R"></Signature>
    </FooterFlex>
  );
}

export default Footer;
