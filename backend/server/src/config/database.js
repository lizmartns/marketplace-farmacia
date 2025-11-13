const path = require('path');
require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  // O caminho para o arquivo SQLite
  storage: path.resolve(__dirname, '..', 'database', 'database.sqlite'),
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
