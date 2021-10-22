import React from 'react';
import './style';

import { connect } from 'react-redux';

const Info = ({ Player, Escolha }) => {
  return (
    <div>
      <h3>{Player}</h3>
      <p>{Escolha === 1 ? 'Pedra' : Escolha === 2 ? 'Papel' : 'Tesoura'}</p>
    </div>
  );
};

const DisplayResult = ({ escolhaJogador, escolhaBot, resultado }) => {
  return (
    <div className="wrapperDisplayResult">
      <div className="display">
        <Info Player="Jogador" Escolha={escolhaJogador} />
        <Info Player="BOT" Escolha={escolhaBot} />
      </div>

      <div>
        <h3>Resultado</h3>
        <p>{resultado}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  escolhaJogador: state.escolhaJogador,
  escolhaBot: state.escolhaBot,
  resultado: state.resultado,
});

export default connect(mapStateToProps, null)(DisplayResult);
