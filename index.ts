import Api from './src/api';
import Webserver from './src/webserver';

async function main() {
  const api = Api.createRoutes();

  const webserver = Webserver.init();
  webserver.start(api);
}

main();
