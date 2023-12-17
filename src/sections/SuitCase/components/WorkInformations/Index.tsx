import { CustomizeText } from "../../../../components/CustomizeText/Index";
import { SideBarMenu } from "../SideBarMenu/Index";
import * as S from "./styles";

export const WorkInformations = () => {
  return (
    <div>
      <S.WorkTitle>
        Desenvolvedor Front End no{" "}
        <S.EvidenceText>Grupo Boticário</S.EvidenceText>
      </S.WorkTitle>
      <S.WorkSubTitle>abril 2023 até o momento</S.WorkSubTitle>
      <div>
        <SideBarMenu />
        <div>
          <CustomizeText text={"Desenvolvedor Front End"} />
          <div style={{ marginTop: "30px" }}></div>
          <CustomizeText
            text={"Algumas tecnologias que tenho trabalhado recentemente:"}
          />
        </div>
      </div>
    </div>
  );
};
