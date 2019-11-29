import User from '../models/User';

class UserController {
  // METHOD TO SHOW THE USERS

  async show(req, res) {
    const { id } = req.params;

    if (id) {
      const user = await User.findOne({
        _id: id,
      });

      return res.status(200).json(user);
    }

    const users = await User.find();

    return res.status(200).json(users);
  }

  //  METHOD TO CREATE A NEW USER
  async store(req, res) {
    const { email, name, password, phone, isBroker } = req.body;

    const alreadyExists = await User.findOne({
      email,
    });

    if (alreadyExists)
      return res.status(400).json({
        error: 'Already have an user with this e-mail',
      });

    const userCreate = await User.create({
      email,
      name,
      password,
      phone,
      isBroker,
    });

    return res.status(200).json(userCreate);
  }
}

export default new UserController();
