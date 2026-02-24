# 📋 Sistema de Lista de Tarefas - React

Projeto desenvolvido como resolução do case técnico para o processo seletivo de **Monitoria da disciplina de Desenvolvimento Front-end** da Gran Faculdade.

## 🎯 Sobre o Projeto

O objetivo deste projeto foi criar uma aplicação de lista de tarefas para auxiliar no controle de atividades de usuários. A aplicação foi construída com foco em ser funcional, bem estruturada, responsiva e de fácil manutenção, aplicando tecnologias modernas e boas práticas de desenvolvimento em React.

## 🚀 Funcionalidades Implementadas

O projeto atende a todos os requisitos solicitados no desafio:
- **Carregamento de Dados:** Inicialização da lista a partir de um arquivo `tarefas.json` via requisição assíncrona (`fetch`).
- **Exibição em Tela:** Renderização dinâmica das tarefas (ID, Título, Descrição, Prioridade, Status e Data de Criação) em uma interface limpa e estilizada.
- **Filtro de Status:** Sistema de filtragem instantânea das tarefas por status (Todas / Pendentes / Concluídas).
- **Criação de Tarefas:** Formulário simples e funcional para inclusão de novas atividades no estado (state) da aplicação.
- **Navegação Dinâmica:** Roteamento configurado para que o clique em uma tarefa direcione para a rota de detalhes (`/tarefas/:id`).

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **React (via Vite):** Biblioteca principal para a construção da interface do usuário.
- **React Router Dom:** Gerenciamento de rotas e navegação na aplicação.
- **Hooks do React:** Uso intensivo de `useState` (gerenciamento de estado local), `useEffect` (efeitos colaterais e fetch de dados) e `useParams` (captura de parâmetros de URL).
- **CSS3:** Estilização responsiva e moderna implementada sem uso de bibliotecas externas (Tailwind/Styled-components), demonstrando domínio do CSS puro.

## 📂 Estrutura de Pastas

A arquitetura do projeto foi modularizada conforme exigido no escopo:

```text
src/
 ├── components/       # Componentes reutilizáveis (ex: ListaTarefas.jsx)
 ├── pages/            # Páginas completas da aplicação (ex: DetalhesTarefa.jsx)
 ├── data/             # Arquivos de lógica ou dados auxiliares
 ├── App.jsx           # Componente raiz e configuração de Rotas
 └── App.css           # Estilos globais e dos componentes
public/
 └── tarefas.json      # Arquivo de dados mockados consumido via fetch