const db = require('../db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define o diretório de armazenamento das imagens
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Gera um nome único para o arquivo
  }
});

const upload = multer({ storage });

exports.upload = upload.single('image'); // Configura o Multer para upload de um único arquivo chamado 'image'

// Função para obter todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.status(200).json(rows); // Retorna os produtos em formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Caso haja erro, retorna mensagem de erro
  }
};

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body; // Desestrutura os dados enviados no corpo da requisição
  const image = req.file ? req.file.filename : null; // Verifica se a imagem foi enviada

  // Verificar se o preço é um número válido
  if (!name || isNaN(price) || price <= 0) {
    return res.status(400).json({
      message: 'Dados inválidos. Certifique-se de fornecer um nome válido e um preço maior que 0.'
    });
  }

  try {
    // Realiza a inserção do produto no banco de dados
    const [result] = await db.query(
      'INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)',
      [name, parseFloat(price), description, image]
    );

    // Retorna o produto recém criado
    res.status(201).json({ id: result.insertId, name, price: parseFloat(price), description, image });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Caso haja erro, retorna mensagem de erro
  }
};

// Função para atualizar um produto
exports.updateProduct = async (req, res) => {
  const { id } = req.params; // O ID do produto a ser atualizado
  const { name, price, description } = req.body; // Dados do produto atualizados
  const image = req.file ? req.file.filename : null; // Nova imagem (se houver)

  // Validações básicas
  if (!name || isNaN(price) || price <= 0) {
    return res.status(400).json({
      message: 'Dados inválidos. Certifique-se de fornecer um nome válido e um preço maior que 0.'
    });
  }

  try {
    // Atualiza o produto no banco de dados
    const [result] = await db.query(
      'UPDATE products SET name = ?, price = ?, description = ?, image = ? WHERE id = ?',
      [name, parseFloat(price), description, image, id]
    );

    if (result.affectedRows === 0) {
      // Retorna erro se o produto não for encontrado
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Retorna sucesso se o produto foi atualizado
    res.status(200).json({
      message: 'Produto atualizado com sucesso',
      id,
      name,
      price: parseFloat(price),
      description,
      image
    });
  } catch (error) {
    // Retorna erro caso algo dê errado
    res.status(500).json({ message: error.message });
  }
};

// Função para excluir um produto
exports.deleteProduct = async (req, res) => {
  const { id } = req.params; // O ID do produto a ser excluído

  try {
    // Busca o produto para verificar se existe e pegar a imagem associada
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);

    if (rows.length === 0) {
      // Retorna erro se o produto não for encontrado
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    const product = rows[0];

    // Remove o registro do banco de dados
    await db.query('DELETE FROM products WHERE id = ?', [id]);

    // Remove a imagem do servidor, se existir
    if (product.image) {
      const imagePath = path.join(__dirname, '../uploads', product.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Erro ao excluir a imagem:', err.message);
      });
    }

    // Retorna sucesso
    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    // Retorna erro caso algo dê errado
    res.status(500).json({ message: error.message });
  }
};
