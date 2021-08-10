import KoaRouter from 'koa-router';
import FileHandler from './apis/fileHandler';

export default class Api {
  public static createRoutes(): KoaRouter<any, {}> {
    const router = new KoaRouter();

    // USERS
    router.post('/files/nodejs', FileHandler.nodejs);

    return router;
  }
}
