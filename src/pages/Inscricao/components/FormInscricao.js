import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGroup, Button, Alert } from "rsuite";
import { Formik } from "formik";
import FormSteps from "./FormSteps";
import SquadModel from "../models/SquadModel";
import { fb_dbRef } from "../../../components";
const Title = styled.h2`
  color: #fff;
  font-family: "Code";
  text-align: center;
  margin: 0px;
`;

const Input = styled.div`
  display: block;

  input {
    color: #222;
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    background-color: #e0e0e0;
  }

  label {
    font-family: "Play";
    display: block;
    margin: 10px 0px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  color: #fff;
  width: 50%;

  & > div.inline {
    width: 100%;
    & > * {
      display: inline-block;
      width: calc(50% - 15px);

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;

const FormInscricao = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      <Title>Inscrição do Squad</Title>
      <FormSteps step={step} />
      <FlexContainer>
        <Formik
          initialValues={SquadModel}
          onSubmit={(values, { setSubmitting }) => {
            fb_dbRef
              .collection("squads")
              .add(values)
              .then(data => {
                Alert.info("Inscrição Realizada com Sucesso");
                window.location.replace("/#");
              })
              .catch(err => {
                Alert.error("Erro no cadastro, tente novamente");
              });
            setSubmitting(false);
          }}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              {step === 0 && (
                <Input>
                  <label htmlFor="squad">Nome do Squad</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.nome}
                    name="nome"
                    placeholder="Nome do seu squad"
                  />
                </Input>
              )}
              <div className="inline">
                <Input>
                  <label htmlFor="nick">Nick</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name={`players[${step}].nick`}
                    value={
                      values.players[step] ? values.players[step].nick : ""
                    }
                    placeholder="Nick do jogo"
                  />
                </Input>
                <Input>
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name={`players[${step}].id`}
                    value={values.players[step] ? values.players[step].id : ""}
                    placeholder="ID da conta"
                  />
                </Input>
              </div>
              <Input>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name={`players[${step}].whatsapp`}
                  value={
                    values.players[step] ? values.players[step].whatsapp : ""
                  }
                  placeholder="Número do Whats"
                />
              </Input>
              <Input>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={handleChange}
                  name={`players[${step}].email`}
                  value={values.players[step] ? values.players[step].email : ""}
                  placeholder="Digite o email"
                />
              </Input>
              <ButtonGroup style={{ paddingTop: 25 }}>
                <Button
                  appearance="ghost"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 0}
                >
                  Anterior
                </Button>
                {step === 3 || (
                  <Button
                    appearance="primary"
                    onClick={() => setStep(step + 1)}
                    disabled={step === 4}
                  >
                    Próximo Jogador
                  </Button>
                )}
                {step === 3 && (
                  <Button type="submit" appearance="primary">
                    Finalizar inscrição
                  </Button>
                )}
              </ButtonGroup>
            </StyledForm>
          )}
        />
      </FlexContainer>
    </>
  );
};

export default FormInscricao;
