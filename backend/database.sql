
CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  dateofbirth DATE,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  choiceoftastes varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

INSERT INTO wine (id, name, grape_variety) 
VALUES 
(1, 'Aligoté (cépage blanc)', 'raisin, pomme verte, citron'), 
(2, 'Chasselas (cépage blanc)', 'miellé et de pêche jaune fruits jaunes et d abricot frais fleurs blanches'), 
(3, 'Clairette (cépage blanc)', 'fleur, miel'),
(4, 'Chenin (cépage blanc)', 'rainsin de l Anjou et de la Touraine, il donne un vin nerveux, intense, au goût de miel quand il est très mûr, mais toujours de forte acidité, donc apte à bien vieillir. On l appelle souvent pineau de la Loire. Arômes de pamplemousse, d acacia, de pâte de coing, de cannelle, d amande grillée et de miel.'),
(5, 'Roussanne (cépage blanc)', 'fleurs blanches avec des notes vanillées et d amande fruits jaunes'),
(6, 'Marsanne (cépage blanc)', 'fleurs champêtres'),
(7, 'Viognier (cépage blanc)', 'arômes d abricot, de violette, de tabac blond de pain d épices, d épices douces et de cire d abeilles'),
(8, 'Jacquère (cépage blanc)', 'fleurs, amandes'),
(9, 'Muscadet (cépage blanc)', 'poire et d amande puis les fleurs blanches notes'),
(10, 'Mauzac (cépage blanc)', 'notes grillées fruits jaunes confits, d abricot puis de noisette sèche avec une pointe vanillée minérales'),
(11, 'Muscadelle (cépage blanc)', 'arômes floraux'),
(12, 'Muscat (cépage blanc)', 'fruité aux notes musquées'),
(13, 'Petit manseng (cépage blanc)', 'fruits exotiques'),
(14, 'Gewurztraminer (cépage blanc)', 'spécialité épicée d Alsace. Arômes de litchi, de rose, de pain d épices,  de cannelle, de foin et de fruits secs grillés'),
(15, 'Grenache (cépage blanc)', 'anis, fenouil, menthe'),
(16, 'Sauvignon (cépage blanc)', 'principal raisin blanc de Bordeaux. Il donne des vins fermes, fruités et fins aux notes de feuille de cassis, d iris, de musc et de pierre à fusil et de buis'),
(17, 'Savagnin (cépage blanc)', 'donne le vin jaune dans le Jura, goût de noissette sèche, cerneau de noix, cannelle, zestes d agrumes et d oranges amères'),
(18, 'Muscadelle (cépage blanc)', 'arômes floraux'),
(19, 'Picpoul (cépage blanc)', 'fruits secs, amande, noisette'),
(20, 'Resling (cépage blanc)', 'un des plus grands cépages blancs du monde. Superbes arômes délicats fruités, de pamplemousse, de fleurs séchées, d abricot confit, d épices douces, de fruits secs grillés et de silex'),
(21, 'Rolle (cépage blanc)', 'agrumes, poire'),
(22, 'Sémillon (cépage blanc)', 'miel, fruits confits, praline, agrumes'),
(23, 'Sylvaner (cépage blanc)', 'silex, aubépine'),
(24, 'Pinot gris (cépage blanc)', 'fruits jaunes, d abricot et de cire d abeilles avec des notes grillées et épicées'),
(25, 'Cabernet sauvignon (cépage rouge)', 'cépage roi du bordelais. Il est formé de petites grappes aux baies bleu-noir, à la peau épaisse et dure. Elles donnent des vins foncés, très tanniques, à l arôme de cassis et de réglisse, le poivre. Des vins lents à se développer qui prennent avec le temps corps et souplesse.'),
(26, 'Cabernet franc (cépage rouge)', 'raisin noir qui offre des arômes de poivron, de violette et de sous-bois.'),
(27, 'Pinot noir (cépage rouge)', 'maître absolu de la Bourgogne, ce cépage présente un charme quasi féminin. Il donne des vins d un rouge pâle. Ses baies, d un noir légèrement bleuté sont petites et serrées. Elles donnent un jus incolore et sucré. On y décèle la cerise, le cassis, la poire et la réglise, griotte, pruneau, des notes fumées, animalesn gibier, cuir.'),
(28, 'Syrah (cépage rouge)', 'fruits noirs avec une pointe cuir et havane, violette, griotte, herbe sauvage, réglisse, humus.'),
(29, 'Merlot (cépage rouge)', 'noble cousin du cabernet. Il donne des vins plus doux, plus charnu, qui mûrissent plus vite. Arômes de fruits rouges, de rose, de sous-bois, de vanille, de fumée et de musc.'),
(30, 'Poulsard (cépage rouge)', 'dans le Jura, on l appelle plant d Arbois. Il y donne les meilleurs rouges, assez pâles, parfums de noyau et de sirop de cerises.'),
(31, 'Gamay (cépage rouge)', 'il produit un vin incomparablement léger, fruité et gouleyant, rouge pâle. Arômes de framboise, de pivoine, de noyau, de confiture de fraises et de poivre. Couleurs rouge clair et brillant.'),
(32, 'Grenache (cépage rouge)', 'arômes de grenade, d épices, d aneth, de thym et de fruits rouges.'),
(33, 'Fer servadou (cépage rouge)', 'arômes rustiques, framboise.'),
(34, 'Duras (cépage rouge)', 'aromatique et charpenté.'),
(35, 'Négrette (cépage rouge)', 'framboise'),
(36, 'Auxerrois (cépage rouge)', 'coloré, riche en tannins.'),
(37, 'Sciacarello (cépage rouge)', 'épices, poivre'),
(38, 'Mondeuse (cépage rouge)', 'cépage noir aux arômes de fruits noirs, d iris, de sous-bois, de figue sèche et de poivre.'),
(39, 'Mourvèdre (cépage rouge)', 'animal, épices, cuir.'),
(40, 'Maccabeu (cépage rouge)', 'fruité, abricot, ananas.');
