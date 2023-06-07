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
('Intensité de la couleur', (SELECT id FROM category WHERE name = 'Examen visuel')), 
('Fluidité des larmes', (SELECT id FROM category WHERE name = 'Examen visuel'));

INSERT INTO question (title, category_id)
VALUES 
('Intensité des arômes', (SELECT id FROM category WHERE name = 'Examen olfactif')), 
('Familles aromatiques', (SELECT id FROM category WHERE name = 'Examen olfactif'));

INSERT INTO question (title, category_id)
VALUES 
('Saveurs', (SELECT id FROM category WHERE name = 'Examen gustatif')), 
('Structure', (SELECT id FROM category WHERE name = 'Examen gustatif')),
('Arômes', (SELECT id FROM category WHERE name = 'Examen gustatif'));

CREATE TABLE options (
  id INT PRIMARY KEY AUTO_INCREMENT,
  option_name VARCHAR(255) NOT NULL,
  question_id INT,
  FOREIGN KEY (question_id) REFERENCES question(id)
);
INSERT INTO options (option_name, question_id)
VALUES
('Framboise', (SELECT id FROM question WHERE title = 'Couleur et nuance')), 
('Cerise', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Rubis', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Pourpre', (SELECT id FROM question WHERE title = 'Couleur et nuance')),
('Claire', (SELECT id FROM question WHERE title = 'Intensité de la couleur')), 
('Moyenne', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Trouble', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Opaque', (SELECT id FROM question WHERE title = 'Intensité de la couleur')),
('Fines et fluides', (SELECT id FROM question WHERE title = 'Fluidité des larmes')), 
('Larges et visqueuses', (SELECT id FROM question WHERE title = 'Fluidité des larmes')),
('Faible, vin fermé', (SELECT id FROM question WHERE title = 'Intensité des arômes')), 
('Moyenne', (SELECT id FROM question WHERE title = 'Intensité des arômes')),
('Forte, vin ouvert', (SELECT id FROM question WHERE title = 'Intensité des arômes')),
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



CREATE TABLE response (
  id INT PRIMARY KEY AUTO_INCREMENT,
  response VARCHAR(255) NOT NULL,
  question_id INT,
  FOREIGN KEY (question_id) REFERENCES question(id)
);