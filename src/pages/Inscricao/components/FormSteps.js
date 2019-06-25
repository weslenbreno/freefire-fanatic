import React from "react";
import styled from "styled-components";
import { Steps } from "rsuite";

const StyledSteps = styled(Steps)`
  margin: 0px 0px;
`;

const StepItem = styled(Steps.Item)`
  .rs-steps-item-title {
    background: #0d0d0d;
  }
`;

const StepsContainer = styled.div`
  padding: 25px 50px;
`;

const FormSteps = props => {
  const { step } = props;
  return (
    <StepsContainer>
      <StyledSteps current={step}>
        <StepItem title="Líder" />
        <StepItem title="Player 2" />
        <StepItem title="Player 3" />
        <StepItem title="Fim" />
      </StyledSteps>
    </StepsContainer>
  );
};

export default FormSteps;
