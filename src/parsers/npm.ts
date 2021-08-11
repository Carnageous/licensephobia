import { LicenseCheck } from '../models/api';

export default function packageJsonToLicenseResponse(packageJsonString: string): LicenseCheck.Response {
  console.log(packageJsonString);

  return {
    type: LicenseCheck.PackageManager.NPM,
    packages: {
      angular: {
        found: true,
        version: '12.0.2',
        url: 'https://github.com/angular/angular',
        license: {
          found: true,
          type: 'MIT',
        },
      },
      lodash: {
        found: true,
        version: '3.1.43',
        url: 'https://github.com/lodash/lodash',
        license: {
          found: true,
          type: 'CC',
        },
      },
    },
    error: null,
  };
}
