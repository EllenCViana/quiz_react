import inicio from "../img/inicio.png";
import "./Welcome.CSS";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome">
        <p>Clique no botão abaixo para começar</p>
        
        <img src={inicio} alt="Inicio do Quiz" />
        <br/>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
    </div>
  )
}

export default Welcome;