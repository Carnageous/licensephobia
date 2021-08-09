import Api from './src/api';

async function main() {
  const api = new Api();
  console.log(api.version);
}

main();
