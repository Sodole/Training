import React from "react";
// import {Acontents} from "./QandA/Acontents";
import {Title, Button, H2} from "./style/style"

import {Qcontents} from "./QandA/Qcontents";


const Question = (props) => {
  const {count, selectAnswer} = props
  return <div>
    <Title>
    {/* <h3>{Qcontents[count].number}</h3> */}
    <H2>{Qcontents[count].question}</H2>
    </Title>
  <Button onClick={() => {selectAnswer(1, Qcontents[count].type)}}>{Qcontents[count].answer1}</Button>
  <Button onClick={() => {selectAnswer(2, Qcontents[count].type)}}>{Qcontents[count].answer2}</Button>
  </div>
}


export default Question