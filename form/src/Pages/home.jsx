import React from "react";
import { useHistory } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import "../Pages/style.css";

const Home = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <div className="congrat__card">
        <h1>PARABÉNS</h1>
        <FaWpforms />

        <h6>Voce adquiriu a Classe preenchedor de formularios no NV 1</h6>
        <h6>
          Para alcançar o proximo nivel, porfavor preencha mais 17 formularios!
        </h6>
        <button className="formPage" onClick={() => history.push("/form")}>
          Proximo Formulario!
        </button>
      </div>
      <small> *Voce não vai ser pago pra isso</small>
    </div>
  );
};

export default Home;
