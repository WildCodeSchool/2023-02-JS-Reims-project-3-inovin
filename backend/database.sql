CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  date_of_birth DATE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (firstname, lastname, date_of_birth) VALUES ('Philippe', 'Dubois', '1970-01-01');

CREATE TABLE user_wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  user_id INT unsigned not null,
  wine_id INT unsigned not null,
  note varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  name varchar(80) NOT NULL,
  grape_variety varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO wine (name, grape_variety) VALUES ('NOM', 'VARIETE'), ('NOM2', 'VARIETE2'), ('NOM3', 'VARIETE3');
