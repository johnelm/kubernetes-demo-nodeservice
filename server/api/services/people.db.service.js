class PeopleDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert('Joe', 'Schmoe');
    this.insert('Joanne', 'Spokane');
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(firstname, lastname) {
    const record = {
      id: this._counter,
      firstname,
      lastname,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

export default new PeopleDatabase();
