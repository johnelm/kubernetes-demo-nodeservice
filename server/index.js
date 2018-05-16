import './common/env';
import Server from './common/server';
import routes from './routes';

process.on( 'unhandledRejection', err => {
  console.error(err.stack)
  process.exit(1);
});

export default new Server()
  .router(routes)
  .listen(process.env.PORT);
