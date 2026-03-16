export type Lang = "en" | "de" | "es";

export interface TranslatedString {
  en: string;
  de: string;
  es: string;
}

export interface Ingredient {
  name: TranslatedString;
  amount: string;
  unit: TranslatedString;
}

export interface Recipe {
  id: string;
  emoji: string;
  name: TranslatedString;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  ingredients: Ingredient[];
  kidFriendly: boolean;
  prepMinutes: number;
  color: string; // tailwind bg color class
}

export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type MealSlot = "breakfast" | "lunch" | "dinner" | "snack";

export type WeekPlan = Record<DayOfWeek, Record<MealSlot, string | null>>;

export const DAYS: DayOfWeek[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const MEALS: MealSlot[] = ["breakfast", "lunch", "dinner", "snack"];

export const DAY_LABELS: Record<DayOfWeek, TranslatedString> = {
  monday: { en: "Monday", de: "Montag", es: "Lunes" },
  tuesday: { en: "Tuesday", de: "Dienstag", es: "Martes" },
  wednesday: { en: "Wednesday", de: "Mittwoch", es: "Miércoles" },
  thursday: { en: "Thursday", de: "Donnerstag", es: "Jueves" },
  friday: { en: "Friday", de: "Freitag", es: "Viernes" },
  saturday: { en: "Saturday", de: "Samstag", es: "Sábado" },
  sunday: { en: "Sunday", de: "Sonntag", es: "Domingo" },
};

export const MEAL_LABELS: Record<MealSlot, TranslatedString> = {
  breakfast: { en: "Breakfast", de: "Frühstück", es: "Desayuno" },
  lunch: { en: "Lunch", de: "Mittagessen", es: "Almuerzo" },
  dinner: { en: "Dinner", de: "Abendessen", es: "Cena" },
  snack: { en: "Snack", de: "Snack", es: "Merienda" },
};
