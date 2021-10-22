const initialState = {
  escolhaJogador: 'Faça sua escolha',
  escolhaBot: 'Faça sua escolha',
  resultado: 'Faça sua escolha',
};

function calculaResultado(newState, escolha) {
  // 1 = Pedra; 2 = Papel e 3 = Tesoura
  newState.escolhaJogador = escolha;
  newState.escolhaBot = Math.floor(Math.random() * 3 + 1);
  if (newState.escolhaJogador === newState.escolhaBot) {
    newState.resultado = 'Empate!';
  } else if (
    (newState.escolhaJogador === 1 && newState.escolhaBot === 2) ||
    (newState.escolhaJogador === 2 && newState.escolhaBot === 3) ||
    (newState.escolhaJogador === 3 && newState.escolhaBot === 1)
  ) {
    newState.resultado = 'Bot venceu!';
  } else if (
    (newState.escolhaJogador === 1 && newState.escolhaBot === 3) ||
    (newState.escolhaJogador === 2 && newState.escolhaBot === 1) ||
    (newState.escolhaJogador === 3 && newState.escolhaBot === 2)
  ) {
    newState.resultado = 'Jogador venceu!';
  }
}

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'CHOOSED_ROCK':
      calculaResultado(newState, 1);
      break;
    case 'CHOOSED_PAPER':
      calculaResultado(newState, 2);
      break;
    case 'CHOOSED_SCISSOR':
      calculaResultado(newState, 3);
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
