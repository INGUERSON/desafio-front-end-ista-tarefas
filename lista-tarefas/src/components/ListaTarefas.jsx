import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaPrioridade, setNovaPrioridade] = useState('baixa');
  const [novoStatus, setNovoStatus] = useState('pendente');

  useEffect(() => {
    const buscarTarefas = async () => {
      try {
        const resposta = await fetch('/tarefas.json');
        const dados = await resposta.json();
        setTarefas(dados);
      } catch (erro) {
        console.error("Erro ao carregar:", erro);
      }
    };
    buscarTarefas();
  }, []);

  const handleAdicionarTarefa = (evento) => {
    evento.preventDefault(); 
    if (!novoTitulo || !novaDescricao) {
      alert("Por favor, preencha o título e a descrição!");
      return;
    }

    const novaTarefa = {
      id: Date.now(), 
      titulo: novoTitulo,
      descricao: novaDescricao,
      prioridade: novaPrioridade,
      status: novoStatus,
      dataCriacao: new Date().toISOString()
    };

    setTarefas([...tarefas, novaTarefa]);
    setNovoTitulo('');
    setNovaDescricao('');
    setNovaPrioridade('baixa');
    setNovoStatus('pendente');
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'todas') return true;
    return tarefa.status === filtro;
  });

  return (
    <div>
      <form className="form-tarefa" onSubmit={handleAdicionarTarefa}>
        <h3>Criar Nova Tarefa</h3>
        <input type="text" placeholder="Título da tarefa" value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} />
        <input type="text" placeholder="Descrição" value={novaDescricao} onChange={(e) => setNovaDescricao(e.target.value)} />
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <label>Prioridade: </label>
            <select value={novaPrioridade} onChange={(e) => setNovaPrioridade(e.target.value)}>
              <option value="alta">Alta</option>
              <option value="média">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>
          <div>
            <label>Status: </label>
            <select value={novoStatus} onChange={(e) => setNovoStatus(e.target.value)}>
              <option value="pendente">Pendente</option>
              <option value="concluída">Concluída</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-adicionar">Adicionar Tarefa</button>
      </form>
      
      <div className="filtros">
        <button className={`btn-filtro ${filtro === 'todas' ? 'ativo' : ''}`} onClick={() => setFiltro('todas')}>Todas</button>
        <button className={`btn-filtro ${filtro === 'pendente' ? 'ativo' : ''}`} onClick={() => setFiltro('pendente')}>Pendentes</button>
        <button className={`btn-filtro ${filtro === 'concluída' ? 'ativo' : ''}`} onClick={() => setFiltro('concluída')}>Concluídas</button>
      </div>

      {tarefasFiltradas.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul className="lista-tarefas">
          {tarefasFiltradas.map((tarefa) => (
            <li key={tarefa.id} className="card-tarefa">
              <h3>{tarefa.titulo}</h3>
              <p>{tarefa.descricao}</p>
              <p><strong>Prioridade:</strong> {tarefa.prioridade} | <strong>Status:</strong> {tarefa.status}</p>
              
              <Link to={`/tarefas/${tarefa.id}`} className="btn-detalhes">
                Ver Detalhes
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTarefas;