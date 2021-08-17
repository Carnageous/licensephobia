import KoaRouter from 'koa-router';
import LicenseChecker from './apis/licenseChecker';

export default class Api {
  public static createRoutes(): KoaRouter<any, {}> {
    const router = new KoaRouter();

    // USERS
    router.post('/files/nodejs', LicenseChecker.npm);

    return router;
  }
}
