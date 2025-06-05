# Guide du néophyte

Ce dépôt contient le module **istanbul-lib-coverage**, un composant de la suite Istanbul qui gère les objets de couverture de code dans Node.js.

## Aperçu rapide

Le fichier `README.md` résume son rôle : « An API that provides a read-only view of coverage information with the ability to merge and summarize coverage info. ». On y trouve un exemple minimal montrant comment créer une carte de couverture (`createCoverageMap`), fusionner d’autres données et calculer un résumé global (`createCoverageSummary`).

## Structure générale

- **index.js** : point d’entrée exportant trois fabriques – `createCoverageSummary`, `createCoverageMap` et `createFileCoverage` – ainsi qu’une référence à la classe `FileCoverage`.
- **lib/** : contient l’implémentation des objets.
  - `file-coverage.js` gère la couverture d’un fichier (stockage des hits, fusion entre fichiers, calcul des totaux…).
  - `coverage-map.js` maintient un ensemble de fichiers et permet de fusionner plusieurs cartes ou de produire un résumé global.
  - `coverage-summary.js` représente un résumé agrégé (lignes, fonctions, branches…) et sait fusionner plusieurs résumés.
  - `percent.js` effectue un calcul de pourcentage simple.
  - `data-properties.js` expose des accesseurs automatiques pour les classes précédentes.
- **test/** : fichiers de tests utilisant Mocha et Chai pour décrire les comportements attendus (création d’objets, fusion de données, etc.).

## Points importants

- Les instances `FileCoverage` stockent les informations de couverture d’un fichier : localisation des instructions/fonctions, compteurs de passages, etc. Elles savent fusionner d’autres instances (pour agréger plusieurs exécutions) et fournir un résumé de type `CoverageSummary`.
- `CoverageMap` agit comme un dictionnaire de `FileCoverage`, avec des méthodes pour récupérer un fichier, fusionner des cartes et filtrer les chemins.
- `CoverageSummary` calcule les totaux agrégés (nombre total de lignes, celles couvertes, pourcentage, etc.).
- `data-properties.js` ajoute simplement des getters/setters automatiques sur ces objets pour exposer leurs données internes.

## Pour poursuivre l’apprentissage

1. **Lire les tests** : ils illustrent toutes les fonctionnalités de base et servent d’exemples d’utilisation.
2. **Explorer les méthodes** des classes dans `lib/` pour comprendre la logique de fusion et de calcul des pourcentages.
3. **Consulter la documentation de l’écosystème Istanbul** (site [istanbul.js.org](https://istanbul.js.org/)) pour voir comment ce module s’intègre avec `nyc` ou d’autres outils.
4. **Essayer de lancer les tests** via `npm test` (si l’environnement le permet) afin d’observer les cas d’usage réels.

En résumé, ce dépôt fournit l’ossature pour manipuler, fusionner et résumer des objets de couverture de code JavaScript. Les fichiers `README`, `index.js` et ceux de `lib/` sont les points de départ essentiels pour comprendre son fonctionnement. Les tests montrent comment s’en servir et constituent une bonne base pour approfondir.
