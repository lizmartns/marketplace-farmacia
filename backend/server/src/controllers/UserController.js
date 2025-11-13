const User = require('../models/User');

class UserController {
  async profile(req, res) {
    // req.userId é definido pelo middleware de autenticação
    const user = await User.findByPk(req.userId, {
      attributes: ['id', 'name', 'email'],
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(user);
  }
}

module.exports = new UserController();
