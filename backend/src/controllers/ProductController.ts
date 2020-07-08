import { Request, Response } from 'express';
import Product from '../schemas/Product';

class ProductController {
  public async getAllProducts (request: Request, response: Response): Promise<Response> {
    try {
      const products = await Product.find()

      return response.json(products);
    } catch (err) {
      return response.status(400).send({ error: err });
    }
  }

  public async getProduct (request: Request, response: Response): Promise<Response> {
    try {
      const products = await Product.findById(request.params.id)

      return response.json(products);
    } catch (err) {
      return response.status(400).send({ error: err });
    }
  }

  public async addProduct (request: Request, response: Response): Promise<Response> {
    try {
      const product = await Product.create(request.body);

      return response.json(product);
    } catch (err) {
      return response.status(400).send({ error: err });
    }
  }

  public async deleteProduct (request: Request, response: Response): Promise<Response> {
    try {
      const product = await Product.deleteOne({ _id: request.params.id });

      return response.json(product);
    } catch (err) {
      return response.status(400).send({ error: err });
    }
  }

  public async updateProduct (request: Request, response: Response): Promise<Response> {
    try {
      const product = await Product.findByIdAndUpdate(request.params.id, request.body);

      return response.json(product);
    } catch (err) {
      return response.status(400).send({ error: err });
    }
  }
}

export default new ProductController();
