import React from "react";
import styled from "styled-components";
import FormInscricao from "./components/FormInscricao";

const InscricaoContainer = styled.div`
  padding-top: 60px;
  min-height: calc(100vh - 60px);
  background: #0d0d0d;
`;

const InscricaoPage = props => {
  return (
    <InscricaoContainer id="inscricao">
      <FormInscricao />
    </InscricaoContainer>
  );
};

export default InscricaoPage;
