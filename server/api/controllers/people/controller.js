import PeopleService from '../../services/people.service';

export class Controller {
  all(req, res) {
    PeopleService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    PeopleService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    PeopleService
      .create(req.body.firstname, req.body.lastname)
      .then(r => res
        .status(201)
        .location(`/api/v1/people/${r.id}`)
        .json(r));
  }
}
export default new Controller();
