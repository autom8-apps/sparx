import { Request, Response } from 'express';

export default class AppController {
  public static index(req: Request, res: Response) {
    res.json('this is a test');
  }
}