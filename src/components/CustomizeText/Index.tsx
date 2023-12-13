import * as S from "./styles";
import type * as T from "./types";

export const CustomizeText = ({
  text,
  highlightColor,
}: T.CustomizeTextProps) => {
  const words = text?.split(" ");

  return (
    <S.TextContainer>
      <S.CustomizeTextStyles highlightColor={highlightColor}>
        {words?.map((word) => (
          <>
            {word}
            {" "}
          </>
        ))}
      </S.CustomizeTextStyles>
    </S.TextContainer>
  );
};
