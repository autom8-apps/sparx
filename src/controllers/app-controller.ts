import { Request, Response } from 'express';

export default class AppController {
  public static index(req: Request, res: Response): void {
    res.json('this is a test');
  }
}
