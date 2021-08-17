import { KoaContext } from './utils';
import { LicenseCheck } from '../models/api';

import Logger from '../logger';
import packageJsonToLicenseResponse from '../parsers/npm';

export default class LicenseChecker {
  public static async npm(context: KoaContext, next: () => void) {
    const { body } = context.request;

    Logger.info('Recieved npm license info request.');

    const response: LicenseCheck.Response = packageJsonToLicenseResponse(body);

    context.response.status = 200;
    context.response.body = response;

    await next();
  }
}
