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

Au cours de nos recherches, nous avons aussi découvert une application mobile du Crous. Cette dernière propose des informations sur les logements, les offres d’emploi, les bourses, et normalement les menus, mais ces derniers sont très peu mis à jour, ou pas remplis, et l'application est peu intuitive à utiliser.

→ Point positif : déjà l’idée de mettre en ligne les menus chaque jour, mais peu mis à jour  
→ Amélioration possible : cibler les informations sur les menus et rendre l'application plus intuitive à utiliser.

Nous avons aussi cherché d’autres applications qui pourraient présenter des similitudes avec notre projet, sans forcément être axés sur les restaurants universitaires. Nous avons trouvé OuiLaCarte, une application pour les restaurants qui permet d'avoir accès au menu sur téléphone au lieu de sur papier : les clients scannent un QR Code et ont accès au menu. Cette mise en ligne des menus est proche du service que nous souhaitons proposer. Il y a bien sûr  un écart par rapport à la problématique posée sur notre projet car OuiLaCarte est axée sur la restauration et propose des fonctionnalités de commande en ligne qui ne sont pas nécessaires dans le cadre de notre projet. 

# Description du projet

## Ambition

### 📐 Intéractions extérieures et architecture interne :

### 💻 Les fonctionnalitées :
- Créer un compte et pouvoir se connecter
- Swipe&Taste : L’utilisateur va faire face à plusieurs ingrédients et va devoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire.
- Choisir une ville parmi une liste puis choisir un RU de la même ville.
- Consulter le menu du jour en fonction du RU sélectionné.
- Choisir si l'on veut le menu d'aujourd'hui, de demain ou d'après-demain.
- Accéder à son profil et mettre à jour ses informations (changement de nom et état dans la queue).
- /*Accéder aux états dans la queue des amis.*/

### Les pages et composants de l'application

#### 🔄 **Création de compte :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit se créer un compte s'authentifier avec son id unique et son mot de passe.

#### 🔄 **Connexion :**
Première page lorsqu'on arrive sur le site web où l'utilisateur doit s'authentifier avec son pseudo et son mot de passe.

#### 🏠 **Accueil :**
Cette page vous renseigne sur le menu du jour et vous permet de choisir le menu affiché en fonction de la ville, du RU et de la date.
En cliquant sur l’image en haut à droite (Ici marquée “PS”) vous accédez à votre profil.

#### 🍔 **Menus :**
Quand vous entrez dans la première fois sur la page d'accueil de RU-Connect, le menu affiché sera celui du premier RU de votre ville où vous êtes actuellement. Ensuite, dans le cas où le menu d'un autre RU de cette même ville vous intéresse, vous pouvez cliquer sur le bouton à côté du nom du RU pour pouvoir changer de restaurant. Il est aussi possible de changer de ville et il vous faudra donc cliquer sur le bouton à côté du nom de la ville puis sélectionner un RU dans cette ville. Finalement, le menu affiché changera lors de vos différentes sélections.

#### 🙋‍♀️ **Profil de l'utilisateur connecté :**
Si l'on clique sur l'icône profil de la barre de navigation, on arrive sur le profil de l'utilisateur connecté. Sur ce dernier, il a accès à ses informations personnelles (nom, prénom, âge), et surtout il peut les modififier. Ces nouvelles informations seront ainsi modifiées sur toutes les pages où on peut les voir. /*L'utilisateur peut aussi voir son état par rapport au RU et ceux de ces amis.*/

#### 🍽 **Swipe & Taste :**
Lors de la création de compte, l'utilisateur doit passer par cette page. Une liste d’ingrédients va défiler devant l’utilisateur, et ce dernier va pouvoir cliquer soit à gauche s’il les apprécie soit à droite dans le cas contraire.

### 🔭 Positionnement par rapport à l'état de l'art :

Le positionnement de RU-Connect par rapport à l'état de l'art repose sur plusieurs axes principaux, reflétant à la fois les lacunes observées dans les solutions existantes et les avantages offerts notre application.

**Mise à jour et pertinence des informations :**

Constat : Le site web et l'application mobile du Crous, présentent des lacunes en ce qui concerne la mise à jour et la pertinence des informations sur les menus des restaurants universitaires.  

Positionnement : RU-Connect se positionne en offrant une solution où les menus sont actualisés quotidiennement en fonction du jour et des plats proposés dans chaque restaurant universitaire. Cette actualisation en temps réel garantit aux utilisateurs des informations précises et pertinentes sur les repas disponibles.

**Accessibilité et convivialité de l'application :**

Constat : Les applications existantes souffrent souvent d'une faible convivialité et d'une navigation peu intuitive.  

Positionnement : RU-Connect se distingue en proposant une interface utilisateur plus attirante et intuitive. Les fonctionnalités telles que la sélection de la ville, du restaurant universitaire, et la consultation des menus sont conçues pour être facilement accessibles.  

**Personnalisation et interaction utilisateur :**

Constat : Les solutions existantes offrent des informations générales mais ne prennent pas en compte les préférences individuelles des utilisateurs. 

Positionnement : RU-Connect se démarque en offrant des fonctionnalités de personnalisation telles que le "Swipe & Taste", où les utilisateurs peuvent indiquer leurs préférences alimentaires en faisant défiler une liste d'ingrédients. De plus, les utilisateurs ont la possibilité de mettre à jour leurs informations personnelles.

## Statut du projet

## Analyse critique

 
# Bibliographie