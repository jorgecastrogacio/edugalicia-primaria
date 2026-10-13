import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/print.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', background: '#FEF2F2', minHeight: '100vh' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', background: '#fff', border: '3px solid #000', padding: 24, boxShadow: '6px 6px 0px #000', borderRadius: 8 }}>
            <h1 style={{ color: '#DC2626', fontSize: 24, fontWeight: 900, marginBottom: 12 }}>⚠️ Ocorreu un erro na aplicación</h1>
            <p style={{ color: '#374151', marginBottom: 16 }}>{this.state.error?.message || 'Erro descoñecido'}</p>
            <pre style={{ background: '#F3F4F6', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', border: '1px solid #E5E7EB' }}>
              {this.state.error?.stack}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              style={{ marginTop: 16, background: '#FBBF24', border: '2px solid #000', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '3px 3px 0px #000' }}
            >
              🔄 Recargar Aplicación
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

