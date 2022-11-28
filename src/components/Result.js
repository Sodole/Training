import React, {useState, useEffect} from "react";
// import { Qcontents } from "./QandA/Qcontents";
import {Title, Button, Img, P} from "./style/style"
import fire from "./image/fire.jpg"
import { Acontents } from "./QandA/Acontents";
const Result = (props) => {
  const [resultChar, setChar] = useState({
    type: "",
    description: "",
    src: ""
  })

  useEffect( () => {
    const {e,s,t,j} = props.points
    let result = ""
    result += e > 0 ? "E" : "I"
    result += s > 0 ? "S" : "N"
    result += t > 0 ? "T" : "F"
    result += j > 0 ? "J" : "P"

    const finalResult = Acontents.filter(contents => {return contents.type === result
})
    setChar(finalResult[0])
  }, [])
 



  return <div>
    <Title>
      <Img src={resultChar.type}></Img>
      <h2>{resultChar.type}</h2>
      <P>{resultChar.description}</P>
    </Title>
    <Button onClick={props.goToHome}>다시하기</Button>
  </div>

}

export default Result