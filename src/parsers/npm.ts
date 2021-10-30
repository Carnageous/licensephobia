import { LicenseCheck } from '../models/api';
import { NpmApiPackageResponse, PackageJson } from '../models/npm';

const axios = require('axios').default;

async function getNpmPackage(name: string): Promise<NpmApiPackageResponse> {
  const res = await axios.get(`https://registry.npmjs.org/${name}`);
  return res.data;
}

export default async function packageJsonToLicenseResponse(packageJson: PackageJson): Promise<LicenseCheck.Response> {
  const results: Promise<NpmApiPackageResponse>[] = [];

  for (const name of Object.keys(packageJson.dependencies)) {
    results.push(getNpmPackage(name));
  }

  const responses = await Promise.all(results);

  const packages: LicenseCheck.PackageResult[] = responses.map((response) => ({
    found: response != null,
    name: response.name,
    description: response.description,
    version: {
      // eslint-disable-next-line no-underscore-dangle
      used: packageJson.dependencies[response._id],
      latest: response['dist-tags'].latest,
    },
    license: {
      found: response.license != null,
      type: response.license,
    },
    url: response.homepage,
  }));

  return {
    type: LicenseCheck.PackageManager.NPM,
    packages,
    error: null,
  };
}
