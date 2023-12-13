import * as S from "./styles";
import type * as T from "./types";

export const CustomizeTitle = ({
  text,
  textcolor,
  align,
  weight,
  animation,
}: T.CustomizeTitleProps) => {
  return (
    <S.TitleContainer align={align}>
      <S.Title animation={animation} textcolor={textcolor} weight={weight}>
        {text}
      </S.Title>
    </S.TitleContainer>
  );
};
