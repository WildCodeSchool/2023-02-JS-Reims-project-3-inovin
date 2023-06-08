
CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  username varchar(80) NOT NULL,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  dateofbirth DATE,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  choiceoftastes varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE user_wine (
  id INT unsigned AUTO_INCREMENT PRIMARY KEY,
  user_id INT unsigned NOT NULL,
  wine_id INT unsigned NOT NULL,
  note VARCHAR(80) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (wine_id) REFERENCES wine(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('Chenin (cépage blanc)', 'rainsin de l Anjou et de la Touraine, il donne un vin nerveux, intense, au goût de miel quand il est très mûr, mais toujours de forte acidité, donc apte à bien vieillir. On l appelle souvent pineau de la Loire. Arômes de pamplemousse, d acacia, de pâte de coing, de cannelle, d amande grillée et de miel.'),
('Roussanne (cépage blanc)', 'fleurs blanches avec des notes vanillées et d amande fruits jaunes'),
('Marsanne (cépage blanc)', 'fleurs champêtres'),
('Viognier (cépage blanc)', 'arômes d abricot, de violette, de tabac blond de pain d épices, d épices douces et de cire d abeilles'),
('Jacquère (cépage blanc)', 'fleurs, amandes'),
('Muscadet (cépage blanc)', 'poire et d amande puis les fleurs blanches notes'),
('Mauzac (cépage blanc)', 'notes grillées fruits jaunes confits, d abricot puis de noisette sèche avec une pointe vanillée minérales'),
('Muscadelle (cépage blanc)', 'arômes floraux'),
('Muscat (cépage blanc)', 'fruité aux notes musquées'),
('Petit manseng (cépage blanc)', 'fruits exotiques'),
('Gewurztraminer (cépage blanc)', 'spécialité épicée d Alsace. Arômes de litchi, de rose, de pain d épices,  de cannelle, de foin et de fruits secs grillés'),
('Grenache (cépage blanc)', 'anis, fenouil, menthe'),
('Sauvignon (cépage blanc)', 'principal raisin blanc de Bordeaux. Il donne des vins fermes, fruités et fins aux notes de feuille de cassis, d iris, de musc et de pierre à fusil et de buis'),
('Savagnin (cépage blanc)', 'donne le vin jaune dans le Jura, goût de noissette sèche, cerneau de noix, cannelle, zestes d agrumes et d oranges amères'),
('Muscadelle (cépage blanc)', 'arômes floraux'),
('Picpoul (cépage blanc)', 'fruits secs, amande, noisette'),
('Resling (cépage blanc)', 'un des plus grands cépages blancs du monde. Superbes arômes délicats fruités, de pamplemousse, de fleurs séchées, d abricot confit, d épices douces, de fruits secs grillés et de silex'),
('Rolle (cépage blanc)', 'agrumes, poire'),
('Sémillon (cépage blanc)', 'miel, fruits confits, praline, agrumes'),
('Sylvaner (cépage blanc)', 'silex, aubépine'),
('Pinot gris (cépage blanc)', 'fruits jaunes, d abricot et de cire d abeilles avec des notes grillées et épicées'),
('Cabernet sauvignon (cépage rouge)', 'cépage roi du bordelais. Il est formé de petites grappes aux baies bleu-noir, à la peau épaisse et dure. Elles donnent des vins foncés, très tanniques, à l arôme de cassis et de réglisse, le poivre. Des vins lents à se développer qui prennent avec le temps corps et souplesse.'),
('Cabernet franc (cépage rouge)', 'raisin noir qui offre des arômes de poivron, de violette et de sous-bois.'),
('Pinot noir (cépage rouge)', 'maître absolu de la Bourgogne, ce cépage présente un charme quasi féminin. Il donne des vins d un rouge pâle. Ses baies, d un noir légèrement bleuté sont petites et serrées. Elles donnent un jus incolore et sucré. On y décèle la cerise, le cassis, la poire et la réglise, griotte, pruneau, des notes fumées, animalesn gibier, cuir.'),
('Syrah (cépage rouge)', 'fruits noirs avec une pointe cuir et havane, violette, griotte, herbe sauvage, réglisse, humus.'),
('Merlot (cépage rouge)', 'noble cousin du cabernet. Il donne des vins plus doux, plus charnu, qui mûrissent plus vite. Arômes de fruits rouges, de rose, de sous-bois, de vanille, de fumée et de musc.'),
('Poulsard (cépage rouge)', 'dans le Jura, on l appelle plant d Arbois. Il y donne les meilleurs rouges, assez pâles, parfums de noyau et de sirop de cerises.'),
('Gamay (cépage rouge)', 'il produit un vin incomparablement léger, fruité et gouleyant, rouge pâle. Arômes de framboise, de pivoine, de noyau, de confiture de fraises et de poivre. Couleurs rouge clair et brillant.'),
('Grenache (cépage rouge)', 'arômes de grenade, d épices, d aneth, de thym et de fruits rouges.'),
('Fer servadou (cépage rouge)', 'arômes rustiques, framboise.'),
('Duras (cépage rouge)', 'aromatique et charpenté.'),
('Négrette (cépage rouge)', 'framboise'),
('Auxerrois (cépage rouge)', 'coloré, riche en tannins.'),
('Sciacarello (cépage rouge)', 'épices, poivre'),
('Mondeuse (cépage rouge)', 'cépage noir aux arômes de fruits noirs, d iris, de sous-bois, de figue sèche et de poivre.'),
('Mourvèdre (cépage rouge)', 'animal, épices, cuir.'),
('Maccabeu (cépage rouge)', 'fruité, abricot, ananas.');
