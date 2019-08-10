import React, { useState } from "react";

function App() {
  const [estado, setEstado] = useState("GO");
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const Start = () => {
    setEstado("RUN");
    setMax(300);
    setMin(0);
    setPalpite(150);
    setNumPalpite(1);
  };

  if (estado === "GO") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">
              Vou tentar adivinhar o número em que você estar pensando.
            </h1>
            <h4 className="text-white">
              VPrimeiro pense em um número entre 0 e 300. Vamos começar?
            </h4>

            <button className="btn btn-dark myButton" onClick={Start}>
              <b>Iniciar Jogo!</b>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (estado === "END") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <img src="data:image/jpeg;base64,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" />
            <h5 className="text-white">E com {numPalpite} palpite(s)</h5>
            <p>
              <button className="btn btn-dark myButton" onClick={Start}>
                <b>Reiniciar Jogo!</b>
              </button>
            </p>
          </div>
          <div className="col-4" />
        </div>
      </div>
    );
  }

  const Maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const Menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const Join = () => {
    setEstado("END");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4" />
        <div className="col-4">
          <h1 className="text-white">Seu número é {palpite}?</h1>
          <button className="btn btn-sm btn-danger" onClick={Menor}>
            <b>Menor</b>
          </button>
          <button className="btn btn-sm btn-success ma-10" onClick={Join}>
            <b>Acertou!</b>
          </button>
          <button className="btn btn-sm btn-primary" onClick={Maior}>
            <b>Maior</b>
          </button>
        </div>
        <div className="col-4" />
      </div>
    </div>
  );
}

export default App;
