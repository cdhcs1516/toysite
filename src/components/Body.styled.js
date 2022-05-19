import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex: 14;
  flex-direction: column;
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 3px double black;
  color: black;
  overflow: visible;
  text-align: center;
  size: 12px;
  width: 100%;

  :after {
      content: '§';
      padding: 0 4px;
      position: relative;
      top: -13px;
  }
`;
