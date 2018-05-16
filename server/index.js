import './common/env';
import Server from './common/server';
import routes from './routes';

if (process.env.NODE_ENV === 'production') {
  process.on( 'unhandledRejection', err => {
    console.error(err.stack)
    process.exit(1);
  });
}

export default new Server()
  .router(routes)
  .listen(process.env.PORT);
