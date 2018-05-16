DROP TABLE IF EXISTS people.people;
DROP KEYSPACE IF EXISTS people;

CREATE KEYSPACE IF NOT EXISTS people
  WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'DC1-K8Demo': 1 };

CREATE TABLE IF NOT EXISTS people.people (
  id UUID PRIMARY KEY,
  firstname text,
  lastname text,
);

