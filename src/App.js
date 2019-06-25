import React from "react";
import "rsuite/styles/index.less";
import "./App.less";

import { HomePage, InscricaoPage } from "./pages";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <AppContainer id="App">
      <HomePage />
      <InscricaoPage />
    </AppContainer>
  );
}

export default App;
