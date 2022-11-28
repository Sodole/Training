import React from "react";
import {Title, ButtonHome, HomeImg} from "./style/style"
import cash from "./image/cash.png"

const Home = (props) => {
  return <div style ={{textAlign: "center"}}>
    <HomeImg src={cash}></HomeImg>
  <Title>
    <h1>성향별 테스트</h1>
  </Title>
  <ButtonHome onClick={props.goToGame}>Start</ButtonHome>
  <p>MADE BY Sodole</p> 
  </div>
}

export default Home