import { LicenseString } from './licenses';

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
    name: string;
    description: string;
    url: string;
    version: {
      used: string,
      latest: string,
    };
    license: {
      found: boolean;
      type: LicenseString;
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
    packages: PackageResult[]
    error: Error | null;
  }
}
