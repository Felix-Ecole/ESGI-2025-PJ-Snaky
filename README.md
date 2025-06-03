# 🧀 Snaky
## 📜 Contexte
Ce projet est réalisé dans le cadre d'une soutenance du module Intégration Web - HTML5/CSS3 de l'ESGI.
Ce dernier est conçu comme une bibliothèque de composants web réutilisables pour une intégration simple et moderne.

Nous nous inspirons de l'identité visuelle du site [https://snaky.be](https://snaky.be) pour en proposer une version alternative plus moderne, flexible et adaptée aux tendances actuelles du web.
Tous contenu visuelle provenant de leur site sera stocker dans le dossier `img/snaky.be/*` pour plus de transparence.

## ⚙️ Technologies
- [Node.js (22.16.0)](https://nodejs.org/), [Vite.js](https://vite.dev/) et [Sass](https://sass-lang.com/) côté Back-End
- HTML, CSS, [JS Vanilla](https://bility.fr/definition-vanilla-js/) pour le Front-End
- [Dark mode](https://fr.wikipedia.org/wiki/Mode_sombre) et [custom properties](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) CSS
- [Mobile-first](https://kinsta.com/blog/responsive-web-design/) pour le responsive
- [BEM](https://getbem.com/) pour la [structuration CSS](https://alticreation.com/blog/bem-pour-le-css/)

## 📄 Structure
```bash
snaky/
├── src
│   ├── index.html            # Page d'accueil (Landing Page)
│   ├── admin.html            # Interface admin (Dashboard)
│   ├── components.html       # Page de test des composants
│   ├── static                # Ressource
│   │   ├── SCSS              # Fichier SASS avant compilation
│   │   ├── CSS               # Fichier SASS après compilation
│   │   ├── IMG               # Visuel servant au site
│   │   ├── JS                # Script servant au site
└── README.md                 # Ce fichier
```

## 🔄 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Felix-Ecole/ESGI-2025-PJ-Snaky
cd ESGI-2025-PJ-Snaky
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez le serveur de code :

```bash
npm run dev
```

4. Lancez le serveur de style :

```bash
npm run build # Compilation du SCSS en CSS pour la production
npm run watch # Serveur d'observation des changements du SCSS
```

---

## 📖 Crédit
- **Félix LHOSTE** (README, Structure, Techno, Composant SASS)
- **Hamza MEKSEM** (HTML, Style, Composant SASS)
- **Tristan PHILIPON** (HTML, Style, Composant SASS)
