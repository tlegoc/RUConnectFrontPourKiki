<h1 align="center">Rapport INDEN - RU-Connect</h1>
<h4 align="center">Kilian Marcelin - Théo LeGoc - Axel Allain</h4>

<div style='text-align: justify;'>

# Introduction

### 🌍 Contexte
L'université est un lieu de vie où les étudiants se retrouvent quotidiennement pour étudier ou lors des pauses déjeuner. Parmi les services essentiels offerts par les établissements universitaires, les restaurants universitaires (RU) occupent une place centrale en fournissant des repas abordables aux étudiants.

Cependant, la gestion efficace des RU peut poser des défis, notamment en ce qui concerne la gestion des files d'attente, la disponibilité des menus et la prise en compte des préférences alimentaires individuelles. Ces défis sont parfois amplifiés par des facteurs tels que les fermetures temporaires de certains établissements, les contraintes de temps des étudiants et les régimes alimentaires spécifiques (végétarien, végan, allergies, ...).

Dans ce contexte, le projet RU-Connect vise à répondre à ces défis en proposant une solution innovante sous la forme d'une application web. Cette application vise à fournir aux utilisateurs une interface simple pour accéder aux menus des RU, estimer les temps d'attente, et prendre en compte les préférences alimentaires individuelles. En fournissant ces informations en temps réel, RU-Connect cherche à améliorer l'expérience des utilisateurs des RU et à créer une communauté étudiante encore plus solidaire.

### 📰 Etat de l'art
Dans un premier temps, nous avons commencé par vérifier que le site du Crous ne répondait pas déjà à notre besoin. Après analyse, nous avons remarqué qu’il offre peu d'informations sur les menus proposés au restaurant universitaire. Seules les règles générales des tarifs et la liste des plats et boissons disponibles à la cafétéria sont présentes, sans aucune adaptation en fonction du jour.   

→ Amélioration possible : mettre à jour les informations sur les menus en fonction du jour et des plats proposés, ainsi que du RU sélectionné.



# Description du projet

## Ambition
- interaction extÃ©rieures, architecture interne
- caractÃ©ristiques fonctionnelles de l'application
- positionnement par rapport Ã  l'Ã©tat de l'art

### 💻 Les fonctionnalitées :
- Créer un compte et pouvoir se connecter
- Swipe&Taste : L’utilisateur va faire face à plusieurs ingrédients et va devoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire.
- Choisir une ville parmi une liste puis choisir un RU de la même ville.
- Consulter le menu du jour en fonction du RU sélectionné.
- Choisir si l'on veut le menu d'aujourd'hui, de demain ou d'après-demain.
- Accéder à son profil et mettre à jour ses informations (changement de nom et état dans la queue).
- Accéder aux états dans la queue des amis.

### Les pages et composants de l'application :

#### 🔄 **Création de compte :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit se créer un compte s'authentifier avec son id unique et son mot de passe.

#### 🔄 **Connexion :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit s'authentifier avec son pseudo et son mot de passe.

#### 🏠 **Accueil :**
Cette page vous renseigne sur le menu du jour en sélectionnant une ville que vous voulez puis en sélectionnant un RU dans cette même ville. Le menu est donc mis à jour à chaque fois que vous changer de Resturant Universitaire.
En cliquant sur l’image en haut à droite (Ici marquée “PS”) vous accédez à votre profil.

#### 🙋‍♀️ **Profil de l'utilisateur connecté :**
Si l'on clique sur l'icône profil de la barre de navigation, on arrive sur le profil de l'utilisateur connecté. Sur ce dernier, il a accès à ses informations personnelles (nom, prénom, âge), et surtout il peut les modififier. Ces nouvelles informations seront ainsi modifiées sur toutes les pages où on peut les voir. L'utilisateur peut aussi voir son état par rapport au RU et ceux de ces amis.

#### 🍽 **Swipe & Taste :**
Lors de la création de compte, l'utilisateur doit passer par cette page. Une liste d’ingrédients va défiler devant l’utilisateur, et ce dernier va pouvoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire.




## Statut du projet

## Analyse critique
- difficultÃ©s
- prise de recul, leÃ§ons apprises


# Conclusion
- retour d'expÃ©rience
- conseils Ã  de nouveaux arrivants

# Bibliographie