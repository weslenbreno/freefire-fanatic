import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";
import logo from "../../assets/images/slogan.png";
import { Navbar } from "../../components";
import { Link } from "react-scroll";

const Home = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  background: url(${props => props.image});
  background-size: cover;
`;

const FlexItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  text-shadow: 0px 0px 20px black;
  margin: 10px;
  padding: 0;
  font-family: "Code";
  color: #fff;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;

const Headline1 = styled.h1`
  font-family: "Nexa", "Open Sans";
  text-shadow: 0px 0px 20px black;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bolder;
  color: #fdd835;
  color: #fff;
  font-size: 22px;
  margin: 0px;

  strong {
    color: gold;
  }
`;

const Logo = styled.img`
  display: inline-block;
  width: 300px;
  margin-bottom: 50px;
`;

const Button = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 0px 10px #ffeb3b;
  border-radius: 5px;
  padding: 10px;
  color: #222;
  background: gold;
  font-family: "Play";
  font-weight: 500;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
    color: #fff;
  }
`;

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home image={bg} id="home" offset={-170}>
        <FlexItem>
          <Headline1>
            Campeonato <strong>Fanatic</strong>
          </Headline1>
          <Logo src={logo} />
        </FlexItem>
        <div>
          <Text>Monte seu Squad e mostre suas habilidades na arena.</Text>
          <Text style={{ marginBottom: 35 }}>
            Torne-se uma lenda da sua cidade e concorra ao grande prêmio
          </Text>
          <div style={{ textAlign: "center" }}>
            <Button to="inscricao" smooth={true} duration={500}>
              Iniciar inscrição
            </Button>
          </div>
        </div>
      </Home>
    </>
  );
};

export default HomePage;
