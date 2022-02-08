/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React from "react";
import Body from "./Body";
import Bottom from "./Bottom";
import * as S from "./Homepage.styled";
import Top from "./Top";

export default function Homepage() {
  return (
    <S.PageContainer>
      <Top />
      <Body />
      <Bottom />
    </S.PageContainer>
  );
}
