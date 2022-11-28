import React, {useState} from "react";
import Home from "./Home"
import Game from "./Game"
import { Container } from "./style/style";


const App = () => {
  const[begin, setBegin] = useState(false)

  const goToGame = () => setBegin(true)
  const goToHome = () => setBegin(false)
  return <Container>
    {begin ? <Game goToHome={goToHome} /> : <Home goToGame={goToGame} />}
    </Container>
  
}

export default App;
