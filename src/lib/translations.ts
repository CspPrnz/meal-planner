import { TranslatedString } from "./types";

type UIKeys =
  | "appTitle"
  | "recipes"
  | "weekPlan"
  | "groceryList"
  | "allRecipes"
  | "pickARecipe"
  | "minutes"
  | "clearAll"
  | "noMealsPlanned"
  | "tapToAdd"
  | "remove"
  | "yourGroceryList"
  | "noItemsYet"
  | "planSomeMeals"
  | "copied"
  | "copyList"
  | "checkedOff"
  | "close"
  | "kidPick";

export const UI: Record<UIKeys, TranslatedString> = {
  appTitle: {
    en: "Family Meal Planner",
    de: "Familien-Essensplaner",
    es: "Planificador de Comidas Familiar",
  },
  recipes: { en: "Recipes", de: "Rezepte", es: "Recetas" },
  weekPlan: { en: "Week Plan", de: "Wochenplan", es: "Plan Semanal" },
  groceryList: {
    en: "Grocery List",
    de: "Einkaufsliste",
    es: "Lista de Compras",
  },
  allRecipes: {
    en: "All Recipes",
    de: "Alle Rezepte",
    es: "Todas las Recetas",
  },
  pickARecipe: {
    en: "Pick a recipe!",
    de: "Wähle ein Rezept!",
    es: "Elige una receta!",
  },
  minutes: { en: "min", de: "Min", es: "min" },
  clearAll: {
    en: "Clear Week",
    de: "Woche leeren",
    es: "Vaciar Semana",
  },
  noMealsPlanned: {
    en: "No meals planned yet!",
    de: "Noch keine Mahlzeiten geplant!",
    es: "Aún no hay comidas planeadas!",
  },
  tapToAdd: {
    en: "Tap a slot to add a meal",
    de: "Tippe auf ein Feld, um eine Mahlzeit hinzuzufügen",
    es: "Toca un espacio para agregar una comida",
  },
  remove: { en: "Remove", de: "Entfernen", es: "Quitar" },
  yourGroceryList: {
    en: "Your Grocery List",
    de: "Deine Einkaufsliste",
    es: "Tu Lista de Compras",
  },
  noItemsYet: {
    en: "No items yet!",
    de: "Noch keine Artikel!",
    es: "Aún no hay artículos!",
  },
  planSomeMeals: {
    en: "Plan some meals first to see your grocery list",
    de: "Plane zuerst Mahlzeiten, um deine Einkaufsliste zu sehen",
    es: "Planifica comidas primero para ver tu lista de compras",
  },
  copied: { en: "Copied!", de: "Kopiert!", es: "Copiado!" },
  copyList: {
    en: "Copy List",
    de: "Liste kopieren",
    es: "Copiar Lista",
  },
  checkedOff: {
    en: "items checked off",
    de: "Artikel abgehakt",
    es: "artículos marcados",
  },
  close: { en: "Close", de: "Schließen", es: "Cerrar" },
  kidPick: {
    en: "Kid's Pick!",
    de: "Kinder-Wahl!",
    es: "Elección Infantil!",
  },
};
