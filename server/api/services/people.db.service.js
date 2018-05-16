import l from '../../common/logger';
import cassandra from 'cassandra-driver';
const client = new cassandra.Client({ contactPoints: [`${process.env.CASSANDRA_HOST}:${process.env.CASSANDRA_PORT}` ] });
const Uuid = cassandra.types.Uuid;

class PeopleDatabase {
  constructor() {
    this.insert('Joe', 'Schmoe'); // add some starter data
    this.insert('Joanne', 'Spokane');
  }

  all() {
    const query = 'SELECT id, firstname, lastname FROM people.people;';

    return client.execute(query, { prepare: true })
    .then( result => {
        let retval = [];
        for (let row of result) {
          retval.push( 
            {
              id: row.id,
              firstname: row.firstname,
              lastname: row.lastname
            }
           );
        }
        return retval ;
      })
      .catch( err => {
        l.error ( err );
        throw new Error( err );
      });
  }

  byId(id) {
    const query = 'SELECT id, firstname, lastname FROM people.people WHERE id = ?;';
    const params = [ id ];

    return client.execute(query, params, { prepare: true })
      .then( result => {
        let row = result.first();
        return {
          id: row.id,
          firstname: row.firstname,
          lastname: row.lastname
        }
      })
      .catch( err => {
        l.error ( err );
        throw new Error( err );
      });
      
  }

  insert(firstname, lastname) {

    const id = Uuid.random();
    const query = 'INSERT INTO people.people ( id, firstname, lastname) VALUES ( ?, ?, ? );'; 
    const params = [ id, firstname, lastname ];

    return client.execute(query, params, { prepare: true })
      .then( result => {
        console.log(`row ${id} inserted on the cluster: ${result.info.queriedHost}`);
        const record = {
          id,
          firstname,
          lastname,
        };
        return record;
      }).catch( err => {
        console.error( err );
        throw new Error( err );
      });

  }
}

export default new PeopleDatabase();
