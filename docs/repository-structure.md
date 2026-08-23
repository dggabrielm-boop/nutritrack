# Estructura inicial del repositorio

```text
nutritrack/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml       # despliegue a GitHub Pages
├── docs/
│   ├── architecture.md
│   ├── wireframe.md
│   ├── repository-structure.md
│   └── mvp-scope.md
├── prototype/
│   ├── index.html                 # wireframe navegable, no producción
│   ├── styles.css
│   └── app.js
├── public/
│   └── icons/
├── src/
│   ├── components/
│   │   ├── ProgressCard.js
│   │   ├── MealCard.js
│   │   └── FoodSelector.js
│   ├── data/
│   │   └── foods.json
│   ├── domain/
│   │   ├── calculations.js
│   │   ├── mealTotals.js
│   │   └── analytics.js
│   ├── screens/
│   │   ├── onboarding.js
│   │   ├── today.js
│   │   ├── meals.js
│   │   ├── activity.js
│   │   ├── evolution.js
│   │   └── profile.js
│   ├── state/
│   │   └── store.js
│   ├── storage/
│   │   └── storage.js
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── layout.css
│   │   └── components.css
│   └── main.js
├── tests/
│   ├── calculations.test.js
│   ├── mealTotals.test.js
│   └── storage.test.js
├── .gitignore
├── LICENSE
├── README.md
└── package.json
```

## Orden de implementación

1. Crear navegación y layout responsive.
2. Implementar estado y persistencia.
3. Implementar cálculos.
4. Cargar base inicial de alimentos.
5. Implementar constructor de comidas.
6. Conectar dashboard y hábitos.
7. Agregar historial y gráficos.
8. Exportar/importar y pruebas.

