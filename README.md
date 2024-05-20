<h1 align="center">RU Connect</h1>
<h4 align="center">Ariane Nicolas - Kilian Marcelin - Rémi Cazoulat - Axel Allain - Théo Le Goc</h4>

---
<div style='text-align: justify;'>
Avec la fermeture temporaire du restaurant universitaire de l’étoile à Beaulieu, le temps de queue de l’Astrolabe a fortement augmenté en début d’année. L’INSA se trouvant à une dizaine de minutes, il n'est pas possible de savoir s’il vaut mieux privilégier l’un ou l’autre. Certaines personnes ont également des intolérances ou des préférences alimentaires, et il est possible d’avoir accès au menu du jour qu’après être rentré à l’intérieur des RU. Nous avons voulu remédier à ces problèmes en créant notre application, RU connect.

RU Connect est une web app destinée aux usagers des restaurants universitaires. L’application propose d’accéder au menu des RU ainsi qu’une estimation de la durée d’attente dans la queue. Il est possible de renseigner ses  préférences  et ses intolérances alimentaires afin que l’application prévienne l’utilisateur quand un RU propose un plat qui peut contenir des allergènes. 

## Utilisation

### Configuration

- Python/AWS
- Svelte

Comment installer RU connect ?

2 options, se rendre sur : https://gh-pages.d1ectb0xveppy0.amplifyapp.com/ ou :

- Copier le dépôt git   
- Lancer la commande npm install à la racine du projet  
- Lancer la commande npm run dev

```bash
npm install
npm run dev
```

Aller à l’url indiqué dans le terminal (http://localhost:5173/)

## Le projet en détail

### 💻 Les fonctionnalitées :
- Créer un compte et pouvoir se connecter
- Swipe&Taste : L’utilisateur va faire face à plusieurs ingrédients et va devoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire.
- Choisir un RU parmi une liste
- Choisir si l'on veut le menu d'aujourd'hui, de demain ou d'après-demain.
- Cliquer sur un stand parmi une liste et voir la page menu.
- Consulter le temps d'attente d'un RU
- Accéder à son profil et mettre à jour ses informations (changement de nom et état dans la queue).
- Accéder aux états dans la queue des amis.

### Les pages et composants de l'application :

#### 🔄 **Création de compte :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit se créer un compte s'authentifier avec son id unique et son mot de passe.

#### 🔄 **Connexion :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit s'authentifier avec son pseudo et son mot de passe.

#### 🏠 **Accueil :**
Cette page vous renseigne sur les différents stands du jour (et ceux de demain et d’après-demain). En cliquant sur un des boutons STAND, vous serez redirigé vers une page affichant une description détaillée des ingrédients du stand.
Il y a aussi un histogramme permettant de visualiser rapidement à quelle heure le restaurant universitaire sélectionné (ici l’Astrolabe) aura le moins de temps de queue. Vous pouvez changer de restaurant universitaire en cliquant sur le bouton à droite du nom de celui sélectionné. Vous pouvez aussi regarder les temps de queue de tous les restaurants en cliquant sur le bouton “Queues aux autres RU” en dessous de l'organigramme. En cliquant sur l’image en haut à droite (Ici marquée “PS”) vous accédez à votre profil.

#### 🙋‍♀️ **Profil de l'utilisateur connecté :**
Si l'on clique sur l'icône profil de la barre de navigation, on arrive sur le profil de l'utilisateur connecté. Sur ce dernier, il a accès à ses informations personnelles (nom, prénom, âge), et surtout il peut les modififier. Ces nouvelles informations seront ainsi modifiées sur toutes les pages où on peut les voir. L'utilisateur peut aussi voir son état par rapport au RU et ceux de ces amis.

#### 🍽 **Swipe & Taste :**
Lors de la création de compte, l'utilisateur doit passer par cette page. Une liste d’ingrédients va défiler devant l’utilisateur, et ce dernier va pouvoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire. A l'avenir, certains menus seront donc recommandés en fonction des choix de l’utilisateur.

####  **Queues :**
Cette page permet de voir les temps de queue de tous les RU proches. Elle est accessible depuis la page d'accueil en cliquant sur le bouton "Queues aux autres RU" en dessous de l'organigramme.
