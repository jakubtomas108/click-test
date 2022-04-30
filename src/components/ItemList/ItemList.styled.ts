import styled from "styled-components/";

export const ItemListStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemListPopup = styled.div`
  border-radius: 20px;
  width: auto;
  padding: 12px;
  height: auto;
  background: white;
`;

export const ItemListButtonStyled = styled.div`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 15px;
  padding: 4px;
  z-index: 100;
  background: white;
`;
