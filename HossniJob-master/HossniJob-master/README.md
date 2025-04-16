# HousniJob - Services à domicile

HousniJob est une application web moderne pour la gestion des services à domicile, permettant aux utilisateurs de réserver des services de nettoyage, jardinage et bricolage.

## Fonctionnalités

- Interface utilisateur moderne et responsive
- Système de réservation de services
- Pages d'information sur les services proposés
- Formulaire de contact
- Présentation de l'entreprise et de l'équipe

## Technologies utilisées

- React 18
- React Router v6
- Vite
- CSS moderne

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/housnijob.git
cd housnijob
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

## Démarrage

Pour lancer l'application en mode développement :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse : [http://localhost:5173](http://localhost:5173)

## Construction

Pour construire l'application pour la production :
```bash
npm run build
# ou
yarn build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Structure du projet

```
housnijob/
├── public/              # Fichiers statiques
│   ├── assets/         # Images et autres ressources
│   ├── components/     # Composants React réutilisables
│   ├── pages/          # Pages de l'application
│   ├── styles/         # Fichiers CSS
│   ├── App.jsx         # Composant principal
│   └── main.jsx        # Point d'entrée
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
