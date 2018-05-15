import l from '../../common/logger';
import db from './people.db.service';

class PeopleService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(firstname, lastname) {
    return db.insert(firstname, lastname);
  }
}

export default new PeopleService();
