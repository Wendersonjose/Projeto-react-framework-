const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer');

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Define o diretório onde as imagens serão armazenadas
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Gera um nome único para a imagem
  }
});

const upload = multer({ storage });

// Criação da instância do roteador
const router = express.Router();

// Rota para obter todos os produtos
router.get('/products', productController.getAllProducts);

// Rota para criar um novo produto (com upload de imagem)
router.post('/products', upload.single('image'), productController.createProduct);

// Rota para atualizar um produto (com upload de imagem)
router.put('/products/:id', upload.single('image'), productController.updateProduct);

// Rota para excluir um produto
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
