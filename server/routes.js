import peopleRouter from './api/controllers/people/router';

export default function routes(app) {
  app.use('/api/v1/people', peopleRouter);
}
