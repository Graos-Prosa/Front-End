# ☕ Grãos & Prosa - Frontend

Frontend desenvolvido para a plataforma Grãos & Prosa, com foco em organização, reutilização de componentes e uma experiência de usuário fluida e moderna.

## 📖 Sobre o Projeto

O Grãos & Prosa - Frontend é a interface web de um e-commerce voltado ao segmento de cafés e produtos relacionados. A aplicação foi construída utilizando React com TypeScript, priorizando escalabilidade, componentização e boas práticas de desenvolvimento.

A estrutura do projeto foi pensada para facilitar manutenção e crescimento, com separação clara entre páginas, componentes reutilizáveis, serviços e rotas.

A interface permite ao usuário:

Navegar pelos produtos
Visualizar detalhes dos cafés
Adicionar itens ao carrinho
Acompanhar etapas de compra
Gerenciar pedidos e informações pessoais

## 🚀 Tecnologias Utilizadas
React
TypeScript
Vite
CSS Modules
React Router
Fetch Api
ESLint

## 🧠 Arquitetura

O projeto segue uma arquitetura modular baseada em separação de responsabilidades:

```bash
src/
│
├── api/            # Configuração de chamadas HTTP
├── assets/         # Imagens, ícones e recursos estáticos
├── components/     # Componentes reutilizáveis
│   ├── common/     # Componentes genéricos (botões, inputs, etc.)
│   └── layouts/    # Estruturas de layout (header, footer, etc.)
│
├── pages/          # Páginas da aplicação
├── routes/         # Configuração de rotas
├── service/        # Regras de negócio e integração com API
├── styles/         # Estilos globais
│
├── App.tsx         # Componente raiz
├── main.tsx        # Entry point da aplicação
```

A aplicação é construída com foco em reutilização:

Componentes comuns → Botões, inputs, cards
Layouts → Estrutura base das páginas (ex: layout de carrinho, layout padrão)
Componentes específicos → Ex: barra de progresso de etapas de compra

## 🔗 Integração com Backend

O frontend consome a API REST do backend Grãos & Prosa, utilizando:

Autenticação via JWT
Consumo de endpoints de:
Produtos
Usuários
Pedidos
Endereços
Cupons

## 🔐 Autenticação
Login com email e senha
Persistência de token JWT
Proteção de rotas autenticadas

## ⚙️ Como Executar o Projeto
### 📋 Pré-requisitos
Node.js (18+ recomendado)
npm

## 📦 Instalação
npm install

## ▶️ Executando o projeto
npm run dev

## 🌐 Acesso
http://localhost:5173

## ⚠️ Observações
Certifique-se de que o backend esteja rodando
Configure corretamente a URL da API no projeto (arquivo dentro de /api)
Verifique conflitos de porta

## 🔮 Futuro

Melhorias na experiência do usuário (UX)
Integração completa com pagamentos
Otimização de performance
Implementação de busca avançada
Testes automatizados (unitários e e2e)

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <h3>Juan Santos</h3>
      <a href="https://github.com/Juan8Santos" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/juanpaixao/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>
