import { BooksIcon } from "../../assets/Books";
import { HomeIcon } from "../../assets/HomeIcon";
import { SkillsIcon } from "../../assets/SkiilsIcon";
import { SuitCaseIcon } from "../../assets/SuitCaseIcon";
import { CustomizeMiniButton } from "../CustomizeMiniButton/CustomizeMiniButton";
import { SVG } from "../SVG/Index";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoWrapper>
        <SVG name="logo" />
      </S.LogoWrapper>
      <S.NavigationWrapper>
        <S.MenuList>
          <a href="">
            <S.ListItemMenu>
              <HomeIcon />
            </S.ListItemMenu>
          </a>
          <a href="">
            <S.ListItemMenu>
              <BooksIcon />
            </S.ListItemMenu>
          </a>
          <a href="">
            <S.ListItemMenu>
              <SkillsIcon />
            </S.ListItemMenu>
          </a>
          <a href="">
            <S.ListItemMenu>
              <SuitCaseIcon />
            </S.ListItemMenu>
          </a>
        </S.MenuList>
      </S.NavigationWrapper>
      <S.ButtonWrapper>
        <CustomizeMiniButton text="Resumo" />
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};
