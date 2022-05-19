import React from "react";
import * as S from "./Top.styled";

export default function Top() {
  const currTime = new Date().toLocaleString();
  return (
    <S.TopContainer>
      <S.LeftPart>
        <S.Text>Keep Learning to Death</S.Text>
      </S.LeftPart>
      <S.CenterPart>
        <S.Text>Current Time: {currTime}</S.Text>
      </S.CenterPart>
      <S.RightPart>
        <S.Text>Don Chen</S.Text>
      </S.RightPart>
    </S.TopContainer>
  );
}
