import { KoaContext } from './utils';

import Logger from '../logger';

export default class FileHandler {
  public static async nodejs(context: KoaContext, next: () => void) {
    const { body } = context.request;

    Logger.debug(body);

    context.response.status = 200;

    await next();
  }
}
