import { CustomizeText } from "../../components/CustomizeText/Index";
import { CustomizeTitle } from "../../components/CustomizeTitle";
import * as S from "./styles";

export const SuitCaseSection = () => {
  return (
    <S.Container id='suitcase'>
     
      <S.LeftContent>
        <CustomizeTitle
          text="Experiências de trabalho"
          align="start"
          textcolor="red"
          weight="bold"
        />

        <div style={{ padding: "30px 0" }}></div>

        <CustomizeText text={'Desenvolvedor Front End'} />
        <div style={{ marginTop: "30px" }}></div>
        <CustomizeText
          text={"Algumas tecnologias que tenho trabalhado recentemente:"}
        />
      
      </S.LeftContent>
    </S.Container>
  );
};
