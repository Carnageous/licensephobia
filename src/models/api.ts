import { Licenses } from './licenses';

// eslint-disable-next-line import/prefer-default-export
export namespace LicenseCheck {
  export enum PackageManager {
    NPM = 'npm',
    PIP = 'pip',
    CARGO = 'cargo',
    CONDA = 'conda',
  }

  export interface PackageResult {
    found: boolean;
    url: string;
    version: string;
    license: {
      found: boolean;
      type: Licenses;
    }
  }

  export interface Error {
    type: number;
    message: string;
  }

  export interface Request {
    type: PackageManager;
    packages: string[];
  }

  export interface Response {
    type: PackageManager;
    packages: {
      [name: string]: PackageResult;
    },
    error: Error | null;
  }
}
