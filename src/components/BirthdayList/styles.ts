import styled from "styled-components";

export const BirthdayListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  gap: 1rem;
  border-top: 2px solid #000;
  margin: 0 70px;
  padding: 15px 0;
`;
BirthdayListWrapper.displayName = "BirthdayListWrapper";

export const BirthdayListTitle = styled.h3``;
BirthdayListTitle.displayName = "BirthdayListTitle";
