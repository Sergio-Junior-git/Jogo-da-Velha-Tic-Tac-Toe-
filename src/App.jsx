import React from 'react';
import Board from './components/Board/Board.jsx';

export default function App() {
  return (
    <main className="page-shell">
      <section className="game-card" aria-labelledby="game-title">
        <p className="eyebrow">DESAFIO PARA DOIS</p>
        <h1 id="game-title">Jogo da Velha</h1>
        <p className="intro">Uma partida rápida, estratégia a cada jogada.</p>
        <Board />
        <p className="game-hint">Três símbolos em linha vencem a partida.</p>
      </section>
      <footer>Feito com React <span aria-hidden="true">·</span> Boa partida!</footer>
    </main>
  );
}
