import { CustomizeTitle } from "../../components/CustomizeTitle";
import prismaled from "../../assets/prisma-led.svg";
import * as S from "./styles";
import { WorkInformations } from "./components/WorkInformations/Index";

export const SuitCaseSection = () => {
  return (
    <S.Container id="suitcase">
      <CustomizeTitle
        text="Experiências de trabalho"
        align="start"
        textcolor="red"
        weight="bold"
      />
      <S.LeftContent>
        <WorkInformations />
      </S.LeftContent>
      <img src={prismaled} alt="" />
    </S.Container>
  );
};
