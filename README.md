Lancheirinha da Nutri 🍴
Um projeto de e-commerce para gerenciar produtos de uma loja virtual. O sistema é dividido em frontend e backend, permitindo o cadastro, listagem, edição e exclusão de produtos, com upload de imagens.

🛠️ Funcionalidades
Frontend:

Interface estilizada utilizando React e Bootstrap.
Página de listagem de produtos.
Formulário para criação de novos produtos, incluindo upload de imagens.
Backend:

API desenvolvida em Node.js com Express.
Gerenciamento de produtos utilizando banco de dados MySQL.
Upload de imagens com Multer.
Suporte a operações CRUD: Create, Read, Update e Delete.
🚀 Tecnologias Utilizadas
Frontend
React
Bootstrap
Axios (para comunicação com a API)
Backend
Node.js
Express
MySQL
Multer (para upload de arquivos)
Cors (para lidar com o acesso cross-origin)
📂 Estrutura de Pastas
csharp
Copiar código
LANCHEIRINHA-DA-NUTRI/
├── backend/
│   ├── controllers/         # Controladores da aplicação
│   ├── models/              # Modelos de banco de dados (opcional)
│   ├── routes/              # Rotas da API
│   ├── uploads/             # Diretório para uploads de imagens
│   ├── db.js                # Configuração do banco de dados
│   ├── server.js            # Servidor principal
├── frontend/
│   ├── public/              # Arquivos públicos
│   ├── src/                 # Código-fonte do React
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── api/             # Configuração de conexão com API
│   │   ├── App.js           # Componente principal
│   │   ├── index.js         # Ponto de entrada do React
├── .gitignore
├── README.md
🔧 Instalação
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/lancheirinha-da-nutri.git
cd lancheirinha-da-nutri
2. Configurar o Backend
Navegue para a pasta do backend:
bash
Copiar código
cd backend
Instale as dependências:
bash
Copiar código
npm install
Certifique-se de que o MySQL está configurado e rodando. Atualize o arquivo db.js com suas credenciais.
Inicie o servidor backend:
bash
Copiar código
node server.js
3. Configurar o Frontend
Navegue para a pasta do frontend:
bash
Copiar código
cd ../frontend
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor frontend:
bash
Copiar código
npm start
4. Acessar a Aplicação
Frontend: http://localhost:3001
Backend API: http://localhost:3000/api/products
📷 Screenshots
Página de Listagem de Produtos

Formulário de Criação de Produtos

🤝 Contribuição
Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request.

📜 Licença
Este projeto está licenciado sob a MIT License.

