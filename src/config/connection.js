// Exemplo de configuração de conexão usando mongoose
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/customers'; // Altere para sua URL do MongoDB

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conexão com o MongoDB estabelecida'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
