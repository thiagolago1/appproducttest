import { Request, Response } from 'express';
import User from '../schemas/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const users = await User.find()

    return response.json(users);
  }

  public async create (request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: passwordHash
    });

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: '1d',
    });

    return response.send({ user, token });
  }

  public async login (request: Request, response: Response): Promise<Response> {

    const { email, password } = request.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
      return response.status(404).send({ error: 'User Not Found!'});
    }

    if(!await bcrypt.compare(password, user.password)) {
      return response.status(400).send({ error: 'Error!'});
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: '1d',
    });

    response.send({ user, token });

  }
}

export default new UserController();
