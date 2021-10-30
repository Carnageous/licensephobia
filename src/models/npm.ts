import { LicenseString } from './licenses';

export interface PackageJson {
  dependencies: {
    [key: string]: string;
  };
  devDependencies: {
    [key: string]: string;
  };
}

export interface NpmApiPackageResponse {
  _id: string;
  name: string;
  versions: {
    [version: string]: object;
  };
  'dist-tags': {
    latest: string;
  }
  autor: {
    name: string;
  };
  license: LicenseString;
  homepage: string;
  description: string;
}
