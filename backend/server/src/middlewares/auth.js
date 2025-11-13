const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  // O token vem no formato "Bearer <token>"
  const [, token] = authHeader.split(' ');

  try {
    // Verifica e decodifica o token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Adiciona o ID do usuário à requisição
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};
