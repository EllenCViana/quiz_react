import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Congratulations from "./../img/congratulations.png";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{""} perguntas.</p>
        <img src={Congratulations} alt="Fim do Quiz" />
        <br />
        <button onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
};

export default GameOver;