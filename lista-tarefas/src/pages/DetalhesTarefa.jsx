import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesTarefa() {
  const { id } = useParams(); 
  const [tarefa, setTarefa] = useState(null);

  useEffect(() => {
    const buscarDetalhes = async () => {
      try {
        let dados = [];
        // 1. Puxa a lista atualizada da memória do navegador (onde estão as tarefas novas)
        const tarefasSalvas = localStorage.getItem('minhas_tarefas');
        
        if (tarefasSalvas) {
          dados = JSON.parse(tarefasSalvas);
        } else {
          // Se não tiver na memória, puxa do arquivo JSON original
          const resposta = await fetch('/tarefas.json');
          dados = await resposta.json();
        }
        
        // 2. Procura a tarefa específica pelo ID
        const tarefaEncontrada = dados.find((t) => t.id === parseInt(id));
        setTarefa(tarefaEncontrada);
      } catch (erro) {
        console.error("Erro ao carregar detalhes:", erro);
      }
    };
    
    buscarDetalhes();
  }, [id]);

  if (!tarefa) return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' }}>Carregando detalhes...</p>;

  return (
    <div>
      <h2 className="titulo-principal">Detalhes da Tarefa</h2>
      
      <div className="card-tarefa" style={{ marginTop: '20px', padding: '30px' }}>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '15px' }}>
          {tarefa.titulo}
        </h3>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
          <strong>Descrição:</strong> {tarefa.descricao}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <p style={{ margin: 0 }}><strong>Prioridade:</strong> <span style={{ textTransform: 'capitalize' }}>{tarefa.prioridade}</span></p>
            <p style={{ margin: 0 }}><strong>Status:</strong> <span style={{ textTransform: 'capitalize' }}>{tarefa.status}</span></p>
            <p style={{ margin: 0 }}><strong>Criada em:</strong> {new Date(tarefa.dataCriacao).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/" className="btn-filtro" style={{ textDecoration: 'none', display: 'inline-block' }}>
            ⬅ Voltar para a Lista
          </Link>
      </div>
    </div>
  );
}

export default DetalhesTarefa;