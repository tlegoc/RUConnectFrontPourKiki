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

A FAIRE THEO

- Structure du back (AWS)
- Structure du front (routes)
- Requêtage
- Sécurité

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
Cette page vous renseigne sur le menu du jour et vous permet de choisir ce qui est affiché en fonction de la ville, du restaurant et de la date.
En cliquant sur l’image en haut à droite (Ici marquée “PS”) vous accédez à votre profil.

#### 🍔 **Menus :**
Quand vous entrez dans la première fois sur la page d'accueil de RU-Connect, le menu affiché sera celui du premier RU de votre ville où vous êtes actuellement. Ensuite, dans le cas où le menu d'un autre RU de cette même ville vous intéresse, vous pouvez cliquer sur le bouton à côté du nom du RU pour pouvoir changer de restaurant. Il est aussi possible de changer de ville et il vous faudra donc cliquer sur le bouton à côté du nom de la ville puis sélectionner un RU dans cette ville. Si vous voulez voir le menu des jours suivants, vous pouvez cliquer sur les flèches au niveau de la date pour avancer ou reculer d'une journée.
Finalement, le menu affiché changera lors de vos différentes sélections.

#### 🙋‍♀️ **Profil de l'utilisateur connecté :**
Si l'on clique sur l'icône profil de la barre de navigation, on arrive sur le profil de l'utilisateur connecté. Sur ce dernier, il a accès à ses informations personnelles mais aussi à son état dans la queue du RU. Cet état peut être modifié en 3 catégories :
- Dans le RU
- Dans la queue
- A faim  
 /*L'utilisateur peut aussi voir son état par rapport au RU et ceux de ces amis.*/

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

Positionnement : RU-Connect se démarque en offrant des fonctionnalités de personnalisation telles que le "Swipe & Taste", où les utilisateurs peuvent indiquer leurs préférences alimentaires en faisant défiler une liste d'ingrédients. De plus, les utilisateurs ont la possibilité de mettre à jour leur état par rapport au RU.

## Statut du projet

A FAIRE THEO

- Les fonctionnalités qui ne marchent pas
- Possibilités d'améliorations

## Analyse critique

### ⚠️ Difficultés :
Le développement de RU-Connect a été confronté à plusieurs défis qui ont entravé sa progression. Certains membres ne peuvent pas consacrer à plein temps à RU-Connect en raison d'autres obligations, créant ainsi des déséquilibres dans la répartition des tâches et des retards dans l'avancement du projet. De plus, le groupe a été divisé en deux après le deuxième semestre dans le cas des études à l'étranger.

Sur le plan technique, nous avons rencontré des difficultés avec l'interaction avec le back-end de l'application dû à notre manque de connaissances en développement web.

Ensuite, l'intérêt limité des membres du groupe pour le développement web a pu affecter notre motivation et notre engagement dans le projet, compromettant ainsi la qualité du travail et la productivité de l'équipe. Il y a aussi eu des difficultés à estimer de manière réaliste la charge de travail nécessaire pour chaque tâche.

Enfin, la communication difficile avec le CROUS après plusieurs relances lors des 2 années de production a constitué un obstacle supplémentaire, limitant l'accès à des ressources sur les menus des RU de France.

### 💡 Prise de recul et leçons apprises :
Tout d'abord, nous reconnaissons l'importance de l'établissement de sprints dans la gestion de projet. Cette approche itérative aurait pu nous aider à mieux structurer notre travail

Par ailleurs, nous réalisons l'importance de maîtriser davantage les technologies web dès le départ du projet. Une meilleure compréhension de ces technologies aurait facilité le développement du projet.

Une leçon importante que nous tirons également est notre capacité à estimer la charge de travail nécessaire pour chaque fonctionnalité ce qui nous permettra plus tard de planifier de manière plus réaliste nos tâches et nos délais.

Enfin, nous retenons la nécessité d'une répartition efficace des tâches au sein de l'équipe. Nous avons appris à mieux comprendre les forces et les faiblesses de chaque membre de l'équipe

# Conclusion

### 👦 Retour d'expérience :
Finalement, le projet RU-Connect que nous avons élaboré dans le cadre du module d'Innovation a été une expérience très enrichissante pour chaque membre de l'équipe. C'était pour chacun d'entre nous la première fois que l'on s'engageait sur un projet aussi long sur deux années et cela nous a permis de mieux comprendre le déroulement d'un projet conséquent. Nous avons aussi aimé la liberté que nous a laissé la matière dans le choix du sujet et des technologies pour réaliser notre projet. 

### 👊 Conseils aux nouveaux arrivants :
1. Apprendre à utiliser Svelte et AWS pour comprendre le projet.
2. Simplifier le code du projet pour une meilleure compréhension.
3. Etendre le projet en créant une version mobile.
4. Continuer à essayer de contacter le CROUS Bretagne en passant par la plateforme Datagouv.fr.
5. Peut être contacté l'Université directement pour avoir un soutien dans la discussion.*
6. Créer un formulaire à l'attention des étudiants pour qu'il puisse exprimer leurs besoins et leurs avis sur l'application.
7. Voir moins grand en nombre de fonctionnalités en essayant d'avoir un premier produit fonctionnel tout en gardant une structure permettant des améliorations.
8. Bien distribuer le travail pour éviter que certains membres attendent une fonctionnalité prenant 1 mois à être codé pour commencer. 

# Bibliographie

1. Centre National des Œuvres Universitaires et Scolaires. Menus des restaurants, brasseries et cafétérias. Gouv.fr. Published September 11, 2015. Accessed May 16, 2024. https://www.data.gouv.fr/fr/datasets/menus-des-restaurants-brasseries-et-cafeterias/

2. Crous Rennes Bretagne. Lyon. Published September 12, 2022. Accessed May 16, 2024. https://www.crous-rennes.fr/

3. OuiLaCarte by AirK2 : une application numérique qui digitalise les menus et les cartes des CHR pour une reprise “100% safe” | Relations-Publiques.Pro : Agence RP & Attachée de presse. Relations-publiques.pro. Published 2019. Accessed May 16, 2024. https://www.relations-publiques.pro/159654/ouilacarte-by-airk2-une-application-numerique-qui-digitalise-les-menus-et-les-cartes-des-chr-pour-une-reprise-100-safe.html
‌
4. Svelte • Docs • Svelte. Svelte.dev. Published 2024. Accessed May 16, 2024. https://svelte.dev/docs/svelte

5. Services et produits de cloud Amazon | AWS. Amazon Web Services, Inc. Published 2024. Accessed May 16, 2024. https://aws.amazon.com/fr/

6. CROUS Stéphane Papon. Crous Mobile. Google.com. Published 2021. Accessed May 16, 2024. https://play.google.com/store/apps/details?id=com.einden.crous.poitiers.android&hl=fr&pli=1
‌
‌
‌
‌