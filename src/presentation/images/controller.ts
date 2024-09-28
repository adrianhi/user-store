import { Request, Response } from "express";
import path from "path";
import fs from 'fs'
export class ImageController {


  static getImage = (
    req: Request,
    res: Response,
  ) => {

    console.log('aa')
    const { type = '', img = '' } = req.params;

    const imagePath = path.resolve(__dirname, `../../../uploads/${type}/${img}`);


    console.log(imagePath);


    if (!fs.existsSync(imagePath)) {
      return res.status(404).send('image not found');
    }

    res.sendFile(imagePath);

  }
}