import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import logger from './logger';

export default class Webserver {
    private static instance: Webserver;

    private koaProcess: Koa<Koa.DefaultState, Koa.DefaultContext> | undefined;

    static init(): Webserver {
      if (Webserver.instance === undefined) {
        Webserver.instance = new Webserver();
      }
      return Webserver.instance;
    }

    async start(apiRouter: KoaRouter<any, {}>, port: number = 8000): Promise<Koa<Koa.DefaultState, Koa.DefaultContext>> {
      this.koaProcess = new Koa();
      this.koaProcess.use(cors());
      this.koaProcess.use(bodyParser());
      this.koaProcess.use(apiRouter.routes());

      await new Promise<void>((resolve) => {
            this.koaProcess!.listen(port, () => {
              logger.info(`Webserver started at port ${port}`);
              resolve();
            });
      });
      return this.koaProcess;
    }
}
