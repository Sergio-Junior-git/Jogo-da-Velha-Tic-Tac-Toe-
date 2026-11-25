# Jogo da Velha com React

Aplicação de Jogo da Velha para dois jogadores, feita como atividade de Frontend Frameworks. O tabuleiro permite alternar entre X e O, identifica vitória e empate e reinicia a partida.

## Tecnologias

- React
- JavaScript e JSX
- CSS
- Vite

## Pré-requisitos

- Node.js 20 ou superior
- npm (incluído na instalação do Node.js)

## Como executar

No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite (normalmente `http://localhost:5173`). Mantenha o terminal aberto enquanto joga. Não abra `index.html` diretamente pelo Explorador de Arquivos; a aplicação usa os módulos do React servidos pelo Vite. No Windows PowerShell, se `npm` for bloqueado pela política de scripts, use `npm.cmd install` e `npm.cmd run dev`.

Para gerar a versão de produção, execute `npm run build`.

## Estudante

**Nome completo:** Sérgio José Galdino Da Silva Júnior - 01800630

## Estrutura

- `src/components/Board/Board.jsx`: estado da partida, alternância, regras, vitória, empate e reinício.
- `src/components/Square/Square.jsx`: casa interativa, recebendo valor e evento por props.

"# Jogo-da-Velha-Tic-Tac-Toe-" 
