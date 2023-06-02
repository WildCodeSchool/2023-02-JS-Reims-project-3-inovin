CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  date_of_birth DATE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (firstname, lastname, date_of_birth) 
VALUES 
('Mohamed', 'Berkoussi', '1994-01-01'),
('Mohamed', 'Berkoussi', '1994-01-01'),
('Mohamed', 'Berkoussi', '1994-01-01'),
('Mohamed', 'Berkoussi', '1994-01-01');

CREATE TABLE user_wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  user_id INT unsigned not null,
  wine_id INT unsigned not null,
  note varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  name varchar(80) NOT NULL,
  grape_variety varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO wine (name, grape_variety) 
VALUES 
('Aligoté (cépage blanc)', 'raisin, pomme verte, citron'), 
('Chasselas (cépage blanc)', 'miellé et de pêche jaune fruits jaunes et d abricot frais fleurs blanches'), 
('Clairette (cépage blanc)', 'fleur, miel'),
('Chenin (cépage blanc)', 'rainsin de l Anjou et de la Touraine, il donne un vin nerveux,
intense, au goût de miel quand il est très mûr, mais toujours de forte acidité, donc apte à bien vieillir. 
On l appelle souvent pineau de la Loire. Arômes de pamplemousse, d acacia,
de pâte de coing, de cannelle, d amande grillée et de miel.'),
('Roussanne (cépage blanc)', 'fleurs blanches avec des notes vanillées et d amande fruits jaunes'),
('Marsanne (cépage blanc)', 'fleurs champêtres'),
('Viognier (cépage blanc)', 'arômes d abricot, de violette, de tabac blond de pain d épices,
d épices douces et de cire d abeilles'),
('Jacquère (cépage blanc)', 'fleurs, amandes'),
('Muscadet (cépage blanc)', 'poire et d amande puis les fleurs blanches notes'),
('Mauzac (cépage blanc)', 'notes grillées fruits jaunes confits,
d abricot puis de noisette sèche avec une pointe vanillée minérales'),
('Muscadelle (cépage blanc)', 'arômes floraux'),
('Muscat (cépage blanc)', 'fruité aux notes musquées'),
('Petit manseng (cépage blanc)', 'fruits exotiques'),
('Gewurztraminer (cépage blanc)', 'spécialité épicée d Alsace. Arômes de litchi, de rose, de pain d épices, 
de cannelle, de foin et de fruits secs grillés'),
('Grenache (cépage blanc)', 'anis, fenouil, menthe'),
('Sauvignon (cépage blanc)', 'principal raisin blanc de Bordeaux. Il donne des vins fermes, fruités 
et fins aux notes de feuille de cassis, d iris, de musc et de pierre à fusil et de buis'),
('Savagnin (cépage blanc)', 'donne le vin jaune dans le Jura, goût de noissette sèche, cerneau de noix,
cannelle, zestes d agrumes et d oranges amères'),
('Muscadelle (cépage blanc)', 'arômes floraux'),
('Picpoul (cépage blanc)', 'fruits secs, amande, noisette'),
('Resling (cépage blanc)', 'un des plus grands cépages blancs du monde.
Superbes arômes délicats fruités, de pamplemousse, de fleurs séchées, d abricot confit,
d épices douces, de fruits secs grillés et de silex'),
('Rolle (cépage blanc)', 'agrumes, poire'),
('Sémillon (cépage blanc)', 'miel, fruits confits, praline, agrumes'),
('Sylvaner (cépage blanc)', 'silex, aubépine'),
('Pinot gris (cépage blanc)', 'fruits jaunes, d abricot et de cire d abeilles avec des notes grillées et épicées');
