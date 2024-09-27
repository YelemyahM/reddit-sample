module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  // Ce paramètre permet à Jest de détecter les fichiers de test
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // Définit les extensions de fichiers que Jest peut tester
  moduleFileExtensions: ["js", "jsx"],

  // Babel est utilisé pour transformer le code avant de l'exécuter dans Jest
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // Définit où Jest doit chercher les fichiers de test
  roots: ["<rootDir>/src"],

  // Utiliser cette option pour inclure les assertions DOM de React Testing Library
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Activer la couverture de code pour savoir quels fichiers sont testés
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text", "lcov"],

  // Configuration pour ignorer les fichiers de tests dans les dossiers node_modules
  testPathIgnorePatterns: ["/node_modules/"],

  // Si tu utilises des snapshots, définir où les sauvegarder
  snapshotResolver: "<rootDir>/jest-snapshot-resolver.js",
};
