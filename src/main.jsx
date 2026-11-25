import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error('Falha ao renderizar o Jogo da Velha:', error);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ maxWidth: 680, margin: '10vh auto', padding: 32, color: '#fff', background: '#321d24', border: '1px solid #f87171', borderRadius: 16, fontFamily: 'system-ui, sans-serif' }}>
          <h1>O jogo encontrou um erro</h1>
          <p>Envie esta mensagem para identificar a causa:</p>
          <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', color: '#fecaca' }}>
            {this.state.error.stack || this.state.error.message}
          </pre>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>,
);
