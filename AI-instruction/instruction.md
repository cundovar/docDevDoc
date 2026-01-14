# INSTRUCTIONS IA — Site de documentation (Codex / Windsurf)

## 1) Mission
Tu dois construire un **site de documentation** à partir du dossier `/documentation`.

### Objectif principal
- **Lire TOUS les fichiers du dossier `/documentation`**, y compris les sous-dossiers.
- Construire un site de documentation **structuré, lisible et évolutif**.
- Trier et organiser les contenus par catégories :
  - Front
  - Back
  - DevOps
  - Outils
  - Autres (par défaut)

---

## 2) Règles strictes (OBLIGATOIRE / INTERDIT)

### OBLIGATOIRE
- DOIT lire **tous les fichiers** présents dans `/documentation`.
- DOIT utiliser `/documentation` comme **source unique de vérité**.
- DOIT prévoir l’ajout futur de documentation **sans refactor majeur**.
- DOIT centraliser la logique de chargement et d’indexation des docs.
- DOIT utiliser **React + Tailwind CSS**.
- DOIT être **responsive** (desktop, tablette, mobile).
- DOIT utiliser un **menu latéral (sidebar) à gauche**.
- DOIT créer des **composants UI réutilisables** (boutons, cartes, badges, etc.).
- DOIT exposer des `props` permettant de modifier :
  - le style
  - le comportement
  - l’état (loading, disabled, etc.).

### INTERDIT
- NE DOIT PAS coder les pages de documentation à la main.
- NE DOIT PAS dupliquer les composants UI.
- NE DOIT PAS casser l’architecture définie.
- NE DOIT PAS ajouter de dépendances sans demande explicite.
- NE DOIT PAS disperser les données (pas de logique doc dans les composants UI).

---

## 3) UI / UX

### Style visuel
- Inspiré des **sites de documentation Vercel** :
  - Design minimaliste
  - Espaces aérés
  - Typographie claire
  - États actifs visibles
  - Hover et focus discrets

### Layout
#### Desktop
- Sidebar à gauche
- Contenu principal au centre
- (Optionnel) Sommaire “Sur cette page”

#### Mobile
- Sidebar transformée en **drawer**
- Bouton d’ouverture/fermeture
- Lecture fluide sans zoom

---

## 4) Composants UI

Tous les éléments doivent être **réutilisables et configurables**.

Exemples de props attendues :
- `variant`: primary | secondary | ghost | danger
- `size`: sm | md | lg
- `disabled`
- `isLoading`
- `leftIcon`
- `rightIcon`

Aucun style ne doit être figé sans possibilité de variation.

---

## 5) Gestion du contenu (Documentation)

### Source
- Le dossier `/documentations` est la **seule source de contenu**.

### Règles d’ingestion
Chaque fichier devient une entrée de documentation avec :
- `title` : nom du fichier ou premier titre
- `category` : basé sur le dossier parent
- `slug` : chemin relatif
- `content` : contenu brut ou parsé

### Dossiers imbriqués
- Les dossiers créent des **sections** dans la sidebar.
- Un `index.md` représente la page principale d’une section.

### Tri & regroupement
- Exemple de mapping :
  - `/documentation/front/**` → Front
  - `/documentation/back/**` → Back
  - sinon → Autres
- Ordre :
  1. Profondeur de dossier
  2. Ordre alphabétique

---

## 6) Routing
- Utiliser un routing dynamique :
  - `/docs/:slug`
- La sidebar doit refléter l’arborescence réelle.
- Le lien actif doit être clairement identifiable.

---

## 7) Architecture React recommandée

```txt
src/
  features/
    docs/
      components/
        Sidebar/
        DocLayout/
        DocContent/
        SearchBar/
      hooks/
        useDocsIndex.js
      lib/
        docsLoader.js
        docsIndex.js
      routes.jsx
    ui/
      components/
        Button/
        Card/
        Badge/
        Input/
        Divider/
      lib/
        cn.js
  shared/
    components/
    hooks/
    lib/
  App.jsx
  main.jsx
