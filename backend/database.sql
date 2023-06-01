CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads'); 

CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  date_of_birth DATE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (firstname, lastname,date_of_birth) 
VALUES ('Ahmed','Elamri', '1991-03-23'); 


CREATE TABLE user_wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  user_id INT unsigned not null,
  wine_id INT unsigned not null,
  note varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  grape_variety varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

