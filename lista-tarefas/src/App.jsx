import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaTarefas from './components/ListaTarefas';
import DetalhesTarefa from './pages/DetalhesTarefa';
import './App.css'; // O toque mágico entra aqui!

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="titulo-principal">Sistema de Lista de Tarefas</h1>
        
        <Routes>
          <Route path="/" element={<ListaTarefas />} />
          <Route path="/tarefas/:id" element={<DetalhesTarefa />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App;