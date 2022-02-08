import React from "react";
import * as S from "./Top.styled";

export default function Top() {
  return (
    <S.TopContainer>
      <S.LeftPart>
        <S.Text>Keep Learning to Death</S.Text>
      </S.LeftPart>
      <S.RightPart>
        <S.Text>Don Chen</S.Text>
      </S.RightPart>
    </S.TopContainer>
  );
}
