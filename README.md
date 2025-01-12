# Projet de Blog - Thème Netflix

## Description

Ce projet est un blog inspiré de Netflix, créé avec Next.js, React et Prismic. Il permet aux utilisateurs de consulter des articles et des critiques de films ou de séries, avec une interface moderne et interactive. Le contenu est récupéré dynamiquement à partir de Prismic, un CMS Headless.

## Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur (SSR) et la génération de pages statiques (SSG).
- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Prismic** : CMS Headless pour gérer et publier le contenu dynamique du blog.
- **Tailwind** : Pour le style et la personnalisation des composants.
- **Airtable**: Pour la base de données du formulaire de contact.

## Fonctionnalités

- **Page d'accueil** : Affichage des derniers articles de blog avec des images de couverture inspirées de l'interface de Netflix.
- **Détail d'article** : Accès à des articles complets, incluant des critiques de films et de séries.
- **Contact** : Formulaire de contact lié à la technologie Airtable.
- **Gestion de contenu** : Les articles sont gérés via le CMS Prismic et sont récupérés dynamiquement via son API.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm.

### Étapes d'installation

1. Clonez le dépôt du projet :

```bash
git clone https://github.com/EmmaESD/blogflix_app.git
```

2.Accedez au repertoire du projet

```bash
cd blogflix
```

3. Installez les dépendances :

```bash
npm install
```

4. Configurez votre clé API Prismic. Créez un fichier .env à la racine du projet et ajoutez votre clé Prismic :

```bash
PRISMIC_API_ENDPOINT=https://votre-repository.prismic.io/api/v2
PRISMIC_ACCESS_TOKEN=votre-token
```

5. Lancez le serveur de developpement

```bash
npm run dev
```

6. Ouvrez votre navigateur et accédez à http://localhost:3000.

## Structure du projet

Voici une vue d'ensemble de la structure des fichiers du projet :

```bash
/app
  /components        # Composants React réutilisables
  /[uid]             # Page d'affichage d'un article selon son id
  /pages             # Pages Next.js (Home, Article, etc.)
  /blog              # Page d'affichage des articles
  /contact           # Page du formulaire de contact
  .env               # Configuration des variable d'environnement (Prismic API)
  next.config.js     # Configuration Next.js
  package.json       # Dépendances et scripts npm
  /utils             # Fichiers de connection à airtable
```

## Contribuer

1. Forker le projet
2. Créer une branche pour vos modifications:

```bash
git checkout -b ma-nouvelle-fonctionnalité
```

3. Faites vos changements et committez`

```
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

4. Poussez vos modifications :

```
git push origin ma-nouvelle-fonctionnalité
```

## Auteur

VAYSSE Emma - Etudiante en deuxième année de Dev Web
