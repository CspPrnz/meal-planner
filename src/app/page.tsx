"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { recipes } from "@/lib/recipes";
import { UI } from "@/lib/translations";
import {
  Lang,
  WeekPlan,
  DayOfWeek,
  MealSlot,
  DAYS,
  MEALS,
  DAY_LABELS,
  MEAL_LABELS,
  Recipe,
  Ingredient,
} from "@/lib/types";

type Tab = "recipes" | "plan" | "grocery";

const EMPTY_WEEK: WeekPlan = Object.fromEntries(
  DAYS.map((d) => [d, { breakfast: null, lunch: null, dinner: null, snack: null }])
) as WeekPlan;

const FLAG: Record<Lang, string> = { en: "🇬🇧", de: "🇩🇪", es: "🇪🇸" };

export default function Home() {
  const [lang, setLang] = useLocalStorage<Lang>("meal-planner-lang", "en");
  const [weekPlan, setWeekPlan] = useLocalStorage<WeekPlan>(
    "meal-planner-week",
    EMPTY_WEEK
  );
  const [checkedItems, setCheckedItems] = useLocalStorage<string[]>(
    "meal-planner-checked",
    []
  );
  const [tab, setTab] = useState<Tab>("recipes");
  const [pickingSlot, setPickingSlot] = useState<{
    day: DayOfWeek;
    meal: MealSlot;
  } | null>(null);
  const [confetti, setConfetti] = useState<{ x: number; y: number } | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const t = useCallback(
    (key: keyof typeof UI) => UI[key][lang],
    [lang]
  );

  // === RECIPE PICKER ===
  const assignRecipe = useCallback(
    (recipeId: string) => {
      if (!pickingSlot) return;
      setWeekPlan((prev) => ({
        ...prev,
        [pickingSlot.day]: {
          ...prev[pickingSlot.day],
          [pickingSlot.meal]: recipeId,
        },
      }));
      setPickingSlot(null);
      // trigger confetti
      setConfetti({ x: Math.random() * 80 + 10, y: 30 });
      setTimeout(() => setConfetti(null), 1000);
    },
    [pickingSlot, setWeekPlan]
  );

  const removeFromPlan = useCallback(
    (day: DayOfWeek, meal: MealSlot) => {
      setWeekPlan((prev) => ({
        ...prev,
        [day]: { ...prev[day], [meal]: null },
      }));
    },
    [setWeekPlan]
  );

  const clearWeek = useCallback(() => {
    setWeekPlan(EMPTY_WEEK);
    setCheckedItems([]);
  }, [setWeekPlan, setCheckedItems]);

  // === GROCERY LIST ===
  const groceryItems = useMemo(() => {
    const map = new Map<string, { ingredient: Ingredient; count: number }>();
    for (const day of DAYS) {
      for (const meal of MEALS) {
        const recipeId = weekPlan[day][meal];
        if (!recipeId) continue;
        const recipe = recipes.find((r) => r.id === recipeId);
        if (!recipe) continue;
        for (const ing of recipe.ingredients) {
          const key = ing.name.en.toLowerCase();
          const existing = map.get(key);
          if (existing) {
            existing.count += 1;
          } else {
            map.set(key, { ingredient: ing, count: 1 });
          }
        }
      }
    }
    return Array.from(map.entries()).map(([key, { ingredient, count }]) => ({
      key,
      name: ingredient.name[lang],
      amount: `${parseFloat(ingredient.amount) * count}${ingredient.unit[lang]}`,
    }));
  }, [weekPlan, lang]);

  const toggleChecked = useCallback(
    (key: string) => {
      setCheckedItems((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    },
    [setCheckedItems]
  );

  const copyGroceryList = useCallback(async () => {
    const text = groceryItems
      .map((item) => `${checkedItems.includes(item.key) ? "✅" : "☐"} ${item.name} — ${item.amount}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API not available
    }
  }, [groceryItems, checkedItems]);

  const plannedCount = useMemo(
    () =>
      DAYS.reduce(
        (sum, d) =>
          sum + MEALS.reduce((s, m) => s + (weekPlan[d][m] ? 1 : 0), 0),
        0
      ),
    [weekPlan]
  );

  return (
    <div className="min-h-screen flex flex-col no-select">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white px-4 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            🍽️ {t("appTitle")}
          </h1>
          <div className="flex gap-1">
            {(["en", "de", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-2xl p-1 rounded-lg transition-transform ${
                  lang === l
                    ? "scale-125 bg-white/30"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Switch to ${l}`}
              >
                {FLAG[l]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-3 py-4 pb-24">
        {tab === "recipes" && (
          <RecipeBrowser
            lang={lang}
            onPick={pickingSlot ? assignRecipe : undefined}
            pickingSlot={pickingSlot}
            t={t}
          />
        )}
        {tab === "plan" && (
          <WeekPlanView
            lang={lang}
            weekPlan={weekPlan}
            onSlotTap={(day, meal) => {
              setPickingSlot({ day, meal });
              setTab("recipes");
            }}
            onRemove={removeFromPlan}
            onClear={clearWeek}
            t={t}
          />
        )}
        {tab === "grocery" && (
          <GroceryListView
            items={groceryItems}
            checkedItems={checkedItems}
            onToggle={toggleChecked}
            onCopy={copyGroceryList}
            copied={copied}
            t={t}
          />
        )}
      </main>

      {/* CONFETTI */}
      {confetti && <Confetti x={confetti.x} y={confetti.y} />}

      {/* PICKING BANNER */}
      {pickingSlot && tab === "recipes" && (
        <div className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <div className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold animate-pop-in pointer-events-auto">
            {t("pickARecipe")} → {DAY_LABELS[pickingSlot.day][lang]}{" "}
            {MEAL_LABELS[pickingSlot.meal][lang]}
            <button
              onClick={() => setPickingSlot(null)}
              className="ml-2 bg-white/30 rounded-full px-2 py-0.5 text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 safe-bottom z-50">
        <div className="max-w-2xl mx-auto flex">
          {(
            [
              { id: "recipes" as Tab, emoji: "📖", label: t("recipes") },
              { id: "plan" as Tab, emoji: "📅", label: t("weekPlan") },
              { id: "grocery" as Tab, emoji: "🛒", label: t("groceryList") },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setTab(item.id);
                if (item.id !== "recipes") setPickingSlot(null);
              }}
              className={`flex-1 flex flex-col items-center py-2 transition-colors ${
                tab === item.id
                  ? "text-orange-600 font-bold"
                  : "text-gray-400"
              }`}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs mt-0.5">{item.label}</span>
              {item.id === "plan" && plannedCount > 0 && (
                <span className="absolute -mt-1 ml-8 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {plannedCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

// =====================
// RECIPE BROWSER
// =====================
function RecipeBrowser({
  lang,
  onPick,
  pickingSlot,
  t,
}: {
  lang: Lang;
  onPick?: (id: string) => void;
  pickingSlot: { day: DayOfWeek; meal: MealSlot } | null;
  t: (key: keyof typeof UI) => string;
}) {
  const [filter, setFilter] = useState<string>("all");
  const categories = ["all", "breakfast", "lunch", "dinner", "snack"];
  const categoryEmoji: Record<string, string> = {
    all: "🍽️",
    breakfast: "🌅",
    lunch: "☀️",
    dinner: "🌙",
    snack: "🍿",
  };

  const filtered =
    filter === "all"
      ? recipes
      : recipes.filter((r) => r.category === filter);

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">
        {pickingSlot ? t("pickARecipe") : t("allRecipes")}
      </h2>

      {/* Category filter pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              filter === cat
                ? "bg-orange-500 text-white shadow-md scale-105"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {categoryEmoji[cat]}{" "}
            {cat === "all"
              ? t("allRecipes")
              : MEAL_LABELS[cat as MealSlot][lang]}
          </button>
        ))}
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map((recipe, i) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            lang={lang}
            index={i}
            onTap={onPick ? () => onPick(recipe.id) : undefined}
            isPicking={!!pickingSlot}
          />
        ))}
      </div>
    </div>
  );
}

// =====================
// RECIPE CARD
// =====================
function RecipeCard({
  recipe,
  lang,
  index,
  onTap,
  isPicking,
}: {
  recipe: Recipe;
  lang: Lang;
  index: number;
  onTap?: () => void;
  isPicking: boolean;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onTap}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`${recipe.color} rounded-2xl p-3 flex flex-col items-center text-center transition-all shadow-sm
        ${pressed ? "scale-95" : "scale-100"}
        ${isPicking ? "hover:scale-105 hover:shadow-lg cursor-pointer ring-2 ring-transparent hover:ring-orange-400" : ""}
        animate-pop-in`}
      style={{ animationDelay: `${index * 50}ms` }}
      disabled={!onTap}
    >
      <span className="text-4xl sm:text-5xl mb-1">{recipe.emoji}</span>
      <span className="font-bold text-sm leading-tight">
        {recipe.name[lang]}
      </span>
      <span className="text-xs text-gray-500 mt-1">
        ⏱️ {recipe.prepMinutes} min
      </span>
      {recipe.kidFriendly && (
        <span className="text-xs mt-1 bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
          ⭐ Kid-friendly
        </span>
      )}
    </button>
  );
}

// =====================
// WEEK PLAN VIEW
// =====================
function WeekPlanView({
  lang,
  weekPlan,
  onSlotTap,
  onRemove,
  onClear,
  t,
}: {
  lang: Lang;
  weekPlan: WeekPlan;
  onSlotTap: (day: DayOfWeek, meal: MealSlot) => void;
  onRemove: (day: DayOfWeek, meal: MealSlot) => void;
  onClear: () => void;
  t: (key: keyof typeof UI) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">📅 {t("weekPlan")}</h2>
        <button
          onClick={onClear}
          className="text-xs bg-red-100 text-red-600 px-3 py-1.5 rounded-full font-semibold hover:bg-red-200 transition-colors"
        >
          🗑️ {t("clearAll")}
        </button>
      </div>

      <div className="space-y-3">
        {DAYS.map((day) => (
          <div key={day} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-2">
              <h3 className="font-bold text-sm">{DAY_LABELS[day][lang]}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-2">
              {MEALS.map((meal) => {
                const recipeId = weekPlan[day][meal];
                const recipe = recipeId
                  ? recipes.find((r) => r.id === recipeId)
                  : null;

                return (
                  <div key={meal} className="relative">
                    {recipe ? (
                      <div
                        className={`${recipe.color} rounded-xl p-2 text-center min-h-[72px] flex flex-col items-center justify-center`}
                      >
                        <span className="text-2xl">{recipe.emoji}</span>
                        <span className="text-xs font-semibold leading-tight">
                          {recipe.name[lang]}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemove(day, meal);
                          }}
                          className="absolute -top-1 -right-1 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow min-h-0 min-w-0"
                          aria-label={t("remove")}
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onSlotTap(day, meal)}
                        className="w-full rounded-xl border-2 border-dashed border-gray-200 p-2 text-center min-h-[72px] flex flex-col items-center justify-center hover:border-orange-300 hover:bg-orange-50 transition-colors"
                      >
                        <span className="text-gray-300 text-xl">+</span>
                        <span className="text-xs text-gray-400">
                          {MEAL_LABELS[meal][lang]}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =====================
// GROCERY LIST VIEW
// =====================
function GroceryListView({
  items,
  checkedItems,
  onToggle,
  onCopy,
  copied,
  t,
}: {
  items: { key: string; name: string; amount: string }[];
  checkedItems: string[];
  onToggle: (key: string) => void;
  onCopy: () => void;
  copied: boolean;
  t: (key: keyof typeof UI) => string;
}) {
  const checkedCount = items.filter((i) => checkedItems.includes(i.key)).length;

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl block mb-4">🛒</span>
        <h2 className="text-lg font-bold text-gray-400">{t("noItemsYet")}</h2>
        <p className="text-sm text-gray-400 mt-2">{t("planSomeMeals")}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">🛒 {t("yourGroceryList")}</h2>
        <button
          onClick={onCopy}
          className="text-xs bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full font-semibold hover:bg-blue-200 transition-colors"
        >
          {copied ? "✅ " + t("copied") : "📋 " + t("copyList")}
        </button>
      </div>

      {checkedCount > 0 && (
        <div className="text-xs text-gray-400 mb-2">
          ✅ {checkedCount}/{items.length} {t("checkedOff")}
        </div>
      )}

      <div className="space-y-1.5">
        {items.map((item) => {
          const isChecked = checkedItems.includes(item.key);
          return (
            <button
              key={item.key}
              onClick={() => onToggle(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                isChecked
                  ? "bg-green-50 text-gray-400 line-through"
                  : "bg-white shadow-sm"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  isChecked
                    ? "bg-green-400 border-green-400 text-white"
                    : "border-gray-300"
                }`}
              >
                {isChecked && "✓"}
              </span>
              <span className="flex-1 font-medium text-sm">{item.name}</span>
              <span className="text-xs text-gray-500 font-mono">
                {item.amount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// =====================
// CONFETTI
// =====================
function Confetti({ x, y }: { x: number; y: number }) {
  const colors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-orange-400",
  ];
  const pieces = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    dx: (Math.random() - 0.5) * 120,
    dy: Math.random() * 80 + 20,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 0.2,
  }));

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-sm confetti-piece ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: p.dx,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
