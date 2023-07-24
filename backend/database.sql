CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);
INSERT INTO category (name)
VALUES ('Examen visuel'),('Examen olfactif'), ('Examen gustatif');

CREATE TABLE question (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);
INSERT INTO question (title, category_id)
VALUES 
('Couleur et nuance', (SELECT id FROM category WHERE name = 'Examen visuel')), 
('Brillance', (SELECT id FROM category WHERE name = 'Examen visuel')), 
('Intensité de la couleur', (SELECT id FROM category WHERE name = 'Examen visuel')), 
('Fluidité des larmes', (SELECT id FROM category WHERE name = 'Examen visuel')),
('Intensité des arômes', (SELECT id FROM category WHERE name = 'Examen olfactif')), 
('Impression', (SELECT id FROM category WHERE name = 'Examen olfactif')), 
('Familles aromatiques', (SELECT id FROM category WHERE name = 'Examen olfactif')),
('Saveurs', (SELECT id FROM category WHERE name = 'Examen gustatif')), 
('Structure', (SELECT id FROM category WHERE name = 'Examen gustatif')),
('Persistance aromatique', (SELECT id FROM category WHERE name = 'Examen gustatif'));

CREATE TABLE options (
  id INT PRIMARY KEY AUTO_INCREMENT,
  option_name VARCHAR(255) NOT NULL,
  question_id INT,
  FOREIGN KEY (question_id) REFERENCES question(id)
);

INSERT INTO options (option_name, question_id)
VALUES
('Framboise', (SELECT id FROM question WHERE title = 'Couleur et nuance')), 
('JauneVert', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Cerise', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('JaunePaille', (SELECT id FROM question WHERE title = 'Couleur et nuance')), 
('Rubis', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('OrVert', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Pourpre', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('OrJaune', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Violet', (SELECT id FROM question WHERE title = 'Couleur et nuance')), 
('Dore', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Grenat', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Ambre', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Tuile', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Roux', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('étincelante', (SELECT id FROM question WHERE title = 'Brillance')),
('éclatante', (SELECT id FROM question WHERE title = 'Brillance')),
('Claire', (SELECT id FROM question WHERE title = 'Intensité de la couleur')), 
('Moyenne', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Trouble', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Opaque', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Fines et fluides', (SELECT id FROM question WHERE title = 'Fluidité des larmes')), 
('Larges et visqueuses', (SELECT id FROM question WHERE title = 'Fluidité des larmes')),
('Faible, vin fermé', (SELECT id FROM question WHERE title = 'Intensité des arômes')), 
('Moyenne', (SELECT id FROM question WHERE title = 'Intensité des arômes')),
('Forte, vin ouvert', (SELECT id FROM question WHERE title = 'Intensité des arômes')),
('franc', (SELECT id FROM question WHERE title = 'Impression')),
('Simple', (SELECT id FROM question WHERE title = 'Impression')),
('Douteux', (SELECT id FROM question WHERE title = 'Impression')),
('Default', (SELECT id FROM question WHERE title = 'Impression')),
('Fruits', (SELECT id FROM question WHERE title = 'Familles aromatiques')), 
('Fleurs', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('Épices', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('végétaux', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('Empyreumatiques', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('Animal', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('Défauts', (SELECT id FROM question WHERE title = 'Familles aromatiques')),
('Acidité', (SELECT id FROM question WHERE title = 'Saveurs')), 
('Amer', (SELECT id FROM question WHERE title = 'Saveurs')),
('Sucre', (SELECT id FROM question WHERE title = 'Saveurs')),
('Gras', (SELECT id FROM question WHERE title = 'Saveurs')),
('Alcool', (SELECT id FROM question WHERE title = 'Saveurs')),
('Autre', (SELECT id FROM question WHERE title = 'Saveurs')),
('Léger', (SELECT id FROM question WHERE title = 'Structure')), 
('Fluide', (SELECT id FROM question WHERE title = 'Structure')),
('Charpenté', (SELECT id FROM question WHERE title = 'Structure')),
('Équilibre', (SELECT id FROM question WHERE title = 'Arômes')), 
('Persistance aromatique', (SELECT id FROM question WHERE title = 'Arômes')),
('Courte', (SELECT id FROM question WHERE title = 'Persistance aromatique')), 
('Moyenne', (SELECT id FROM question WHERE title = 'Persistance aromatique')),
('Persistante', (SELECT id FROM question WHERE title = 'Persistance aromatique'));

CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  date_of_birth DATE,
  email varchar(255) NOT NULL,
  hashedPassword varchar(255) NOT NULL,
  choice_of_tastes varchar(80) NOT NULL,
  is_admin boolean DEFAULT (false)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;




CREATE TABLE wine (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  name varchar(80) NOT NULL,
  color varchar(80) NOT NULL,
  grape_variety varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE response (
  id INT PRIMARY KEY AUTO_INCREMENT,
  option_id INT NOT NULL,
  FOREIGN KEY (option_id) REFERENCES options(id),
  user_id INT unsigned,
  FOREIGN KEY (user_id) REFERENCES user(id),
  wine_id INT unsigned,
  FOREIGN KEY (wine_id) REFERENCES wine(id)
  );

CREATE TABLE user_wine (
  id INT unsigned AUTO_INCREMENT PRIMARY KEY,
  user_id INT unsigned NOT NULL,
  wine_id INT unsigned NOT NULL,
  note VARCHAR(80) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (wine_id) REFERENCES wine(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO wine (name, color, grape_variety) 
VALUES 
('Aligoté' , 'blanc', 'raisin, pomme verte, citron'), 
('Chasselas', 'blanc', 'miellé et de pêche jaune fruits jaunes et d abricot frais fleurs blanches'),
('Clairette', 'blanc', 'fleur, miel'),
('Chenin', 'blanc', 'rainsin de l Anjou et de la Touraine, il donne un vin nerveux, intense, au goût de miel quand il est très mûr, mais toujours de forte acidité, donc apte à bien vieillir. On l appelle souvent pineau de la Loire. Arômes de pamplemousse, d acacia, de pâte de coing, de cannelle, d amande grillée et de miel.'),
('Roussanne', 'blanc', 'fleurs blanches avec des notes vanillées et d amande fruits jaunes'),
('Marsanne', 'blanc', 'fleurs champêtres'),
('Viognier', 'blanc', 'arômes d abricot, de violette, de tabac blond de pain d épices, d épices douces et de cire d abeilles'),
('Jacquère', 'blanc', 'fleurs, amandes'),
('Muscadet', 'blanc', 'poire et d amande puis les fleurs blanches notes'),
('Mauzac', 'blanc', 'notes grillées fruits jaunes confits, d abricot puis de noisette sèche avec une pointe vanillée minérales'),
('Muscat', 'blanc', 'fruité aux notes musquées'),
('Petit manseng', 'blanc', 'fruits exotiques'),
('Gewurztraminer', 'blanc', 'spécialité épicée d Alsace. Arômes de litchi, de rose, de pain d épices,  de cannelle, de foin et de fruits secs grillés'),
('Grenache', 'blanc', 'anis, fenouil, menthe'),
('Sauvignon', 'blanc', 'principal raisin blanc de Bordeaux. Il donne des vins fermes, fruités et fins aux notes de feuille de cassis, d iris, de musc et de pierre à fusil et de buis'),
('Savagnin', 'blanc', 'donne le vin jaune dans le Jura, goût de noissette sèche, cerneau de noix, cannelle, zestes d agrumes et d oranges amères'),
('Muscadelle', 'blanc', 'arômes floraux'),
('Picpoul', 'blanc', 'fruits secs, amande, noisette'),
('Resling', 'blanc', 'un des plus grands cépages blancs du monde. Superbes arômes délicats fruités, de pamplemousse, de fleurs séchées, d abricot confit, d épices douces, de fruits secs grillés et de silex'),
('Rolle', 'blanc', 'agrumes, poire'),
('Sémillon', 'blanc', 'miel, fruits confits, praline, agrumes'),
('Sylvaner', 'blanc', 'silex, aubépine'),
('Pinot gris', 'blanc', 'fruits jaunes, d abricot et de cire d abeilles avec des notes grillées et épicées'),
('Cabernet sauvignon', 'rouge', 'cépage roi du bordelais. Il est formé de petites grappes aux baies bleu-noir, à la peau épaisse et dure. Elles donnent des vins foncés, très tanniques, à l arôme de cassis et de réglisse, le poivre. Des vins lents à se développer qui prennent avec le temps corps et souplesse.'),
('Cabernet franc', 'rouge', 'raisin noir qui offre des arômes de poivron, de violette et de sous-bois.'),
('Pinot noir', 'rouge', 'maître absolu de la Bourgogne, ce présente un charme quasi féminin. Il donne des vins d un rouge pâle. Ses baies, d un noir légèrement bleuté sont petites et serrées. Elles donnent un jus incolore et sucré. On y décèle la cerise, le cassis, la poire et la réglise, griotte, pruneau, des notes fumées, animalesn gibier, cuir.'),
('Syrah', 'rouge', 'fruits noirs avec une pointe cuir et havane, violette, griotte, herbe sauvage, réglisse, humus.'),
('Merlot', 'rouge', 'noble cousin du cabernet. Il donne des vins plus doux, plus charnu, qui mûrissent plus vite. Arômes de fruits rouges, de rose, de sous-bois, de vanille, de fumée et de musc.'),
('Poulsard', 'rouge', 'dans le Jura, on l appelle plant d Arbois. Il y donne les meilleurs rouges, assez pâles, parfums de noyau et de sirop de cerises.'),
('Gamay', 'rouge', 'il produit un vin incomparablement léger, fruité et gouleyant, rouge pâle. Arômes de framboise, de pivoine, de noyau, de confiture de fraises et de poivre. Couleurs rouge clair et brillant.'),
('Grenache', 'rouge', 'arômes de grenade, d épices, d aneth, de thym et de fruits rouges.'),
('Fer servadou', 'rouge', 'arômes rustiques, framboise.'),
('Duras', 'rouge', 'aromatique et charpenté.'),
('Négrette', 'rouge', 'framboise'),
('Auxerrois', 'rouge', 'coloré, riche en tannins.'),
('Sciacarello', 'rouge', 'épices, poivre'),
('Mondeuse', 'rouge', 'cépage noir aux arômes de fruits noirs, d iris, de sous-bois, de figue sèche et de poivre.'),
('Mourvèdre', 'rouge', 'animal, épices, cuir.'),
('Maccabeu', 'blanc', 'fruité, abricot, ananas.');
