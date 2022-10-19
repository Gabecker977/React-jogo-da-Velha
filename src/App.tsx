import { useState } from 'react';
import './App.css'
import Celula from './celula';
function App() {
  const tabuleiro = ['', '', '', '', '', '', '', '', '']
  const [jogador, setJogador] = useState('O');
  const nextPlayer = () => {
    console.log('next player', jogador)
    if (jogador === 'O')
      setJogador('X')
    else
      setJogador('O')
  };
  return (
    <div className="Jogo">
      <div className="tabuleiro">
        {tabuleiro.map((celula, i) => (
          <Celula key={i} valor={celula} jogador={jogador} onPlayed={nextPlayer} />
        ))}
      </div>
    </div>
  )
}

export default App
