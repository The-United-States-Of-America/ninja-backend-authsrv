import ClientRoute from './routes/client'
import ProviderRoute from './routes/provider'
import AdministratorRoute from './routes/administrator'

/**
 * The Router is responsible for aggregating all the various routing endpoints within the application, and serving them.
 * @example <caption>Use only once</caption>
 * new Router(app);
 */
export default class Router {
  /**
   * The constructor injects routes into the Express application passed in.
   * @param {express()} app An express application, used to setup routing.
   */
  constructor(app) {
    // Define routes here
    const routes = {
      //sample_route: new SampleRoute()
      client: new ClientRoute(),
      provider: new ProviderRoute(),
      admin: new AdministratorRoute()
    };

    for (let route in routes) {
      app.use('/' + route, routes[route].router());
    }
  }
}
