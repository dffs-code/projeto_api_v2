const database = require('../models/')

class userController {
  
  static async createUser(req, res){
    const newUser = req.body;

    try {
      const createdUser = await database.usuarios.create(newUser);
      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
}