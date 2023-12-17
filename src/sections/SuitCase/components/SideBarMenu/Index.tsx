import { useState } from "react";
import * as S from "./styles";

export const SideBarMenu = () => {
  const [isActive, setActive] = useState(false);

  const handleClickActive = () => {
    setActive(isActive!);
    console.log(isActive)
  };

  return (
    <S.Navigation>
      <S.MenuItem isactive={isActive.toString()}>
        <S.ItemText onClick={handleClickActive}>Grupo Boticário</S.ItemText>
      </S.MenuItem>
      <S.MenuItem isactive={isActive.toString()}>
        <S.ItemText onClick={handleClickActive}>M3 Desenvolvimento</S.ItemText>
      </S.MenuItem>
    </S.Navigation>
  );
};
