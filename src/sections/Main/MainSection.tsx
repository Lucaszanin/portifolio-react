import { CustomizeText } from "../../components/CustomizeText/Index";
import { CustomizeTitle } from "../../components/CustomizeTitle";
import CircleBackground from "../../assets/circle-led.svg";
import CableLed from "../../assets/cable-led.svg";
import CableLed2 from "../../assets/cable-led-2.svg";
import Socials from "../../assets/socials.svg";
import * as C from "./constants";
import * as S from "./styles";

export const MainSection = () => {
  return (
    <S.MainContainer>
      <S.LeftContent>
        <CustomizeTitle
          text="Eu Sou"
          align="start"
          textcolor="gray"
          weight="regular"
        />
        <CustomizeTitle
          text="Lucas Zanin"
          align="start"
          textcolor="red"
          weight="bold"
        />{" "}
        <S.CableWrapper>
          <img src={CableLed} alt="" style={{ height: "274px" }}/>
          <img src={Socials} alt="" style={{ height: "124px" }} />
          <img src={CableLed2} alt="" style={{ height: "124px" }}/>
        </S.CableWrapper>
        <CustomizeText text={C.firstParagraph}></CustomizeText>
        <CustomizeText text={C.secondParagraph}></CustomizeText>
      </S.LeftContent>
      <S.ImagWrapper>
        <img src={CircleBackground} alt="" />
      </S.ImagWrapper>
    </S.MainContainer>
  );
};
