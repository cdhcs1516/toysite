import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: black;
`;
export const LeftPart = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: start;
  padding: 4px;
`;

export const CenterPart = styled.div`
  display: flex;
  flex: 8;
  flex-direction: column;
  align-items: center;
  padding: 4px 12px;
`;

export const RightPart = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: end;
  padding: 4px 12px;
`;

export const Text = styled.p`
  color: white;
`;
