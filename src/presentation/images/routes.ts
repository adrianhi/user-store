import { Router } from "express";
import { ImageController } from "./controller";

export class ImageRoutes {


  static get routes(): Router {



    const router = Router();
    

    router.get('/:type/:img', ImageController.getImage)

    return router;
  }
}