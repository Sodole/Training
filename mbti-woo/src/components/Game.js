import React, {useState} from "react";
import Question from "./Question"
import Result from "./Result"

const Game = (props) => {

  const[count, setCount] = useState(0)
  const[e, setE] = useState(0)
  const[s, setS] = useState(0)
  const[t, setT] = useState(0)
  const[j, setJ] = useState(0)

  const selectAnswer = (btnNum, type) => {
    if(btnNum ==1){
      if(type === 'e'){setE(e+1)}
      if(type === 's'){setS(e+1)}
      if(type === 't'){setT(e+1)}
      if(type === 'j'){setJ(e+1)}
    }else{
      if(type === 'e'){setE(e-1)}
      if(type === 's'){setS(e-1)}
      if(type === 't'){setT(e-1)}
      if(type === 'j'){setJ(e-1)}
    }
    setCount(count+1)
  }




  return <div style={{textAlign : "center"}}>
     { count === 12 ?
        <Result points={ {e, s, t, j} } goToHome={props.goToHome} /> : 
        <Question count={count} selectAnswer={selectAnswer} /> }
    </div>

}


export default Game