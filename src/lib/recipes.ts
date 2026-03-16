import { Recipe } from "./types";

export const recipes: Recipe[] = [
  // === BREAKFAST ===
  {
    id: "pancakes",
    emoji: "🥞",
    name: { en: "Pancakes", de: "Pfannkuchen", es: "Panqueques" },
    category: "breakfast",
    kidFriendly: true,
    prepMinutes: 15,
    color: "bg-amber-100",
    ingredients: [
      {
        name: { en: "Flour", de: "Mehl", es: "Harina" },
        amount: "200",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Milk", de: "Milch", es: "Leche" },
        amount: "250",
        unit: { en: "ml", de: "ml", es: "ml" },
      },
      {
        name: { en: "Eggs", de: "Eier", es: "Huevos" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Butter", de: "Butter", es: "Mantequilla" },
        amount: "30",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "overnight-oats",
    emoji: "🥣",
    name: {
      en: "Overnight Oats",
      de: "Overnight Oats",
      es: "Avena Nocturna",
    },
    category: "breakfast",
    kidFriendly: true,
    prepMinutes: 5,
    color: "bg-orange-100",
    ingredients: [
      {
        name: { en: "Oats", de: "Haferflocken", es: "Avena" },
        amount: "100",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Milk", de: "Milch", es: "Leche" },
        amount: "200",
        unit: { en: "ml", de: "ml", es: "ml" },
      },
      {
        name: { en: "Banana", de: "Banane", es: "Plátano" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Honey", de: "Honig", es: "Miel" },
        amount: "1",
        unit: { en: "tbsp", de: "EL", es: "cda" },
      },
    ],
  },
  {
    id: "toast-jam",
    emoji: "🍞",
    name: {
      en: "Toast with Jam",
      de: "Toast mit Marmelade",
      es: "Tostada con Mermelada",
    },
    category: "breakfast",
    kidFriendly: true,
    prepMinutes: 5,
    color: "bg-yellow-100",
    ingredients: [
      {
        name: { en: "Bread", de: "Brot", es: "Pan" },
        amount: "4",
        unit: { en: "slices", de: "Scheiben", es: "rebanadas" },
      },
      {
        name: { en: "Jam", de: "Marmelade", es: "Mermelada" },
        amount: "2",
        unit: { en: "tbsp", de: "EL", es: "cda" },
      },
      {
        name: { en: "Butter", de: "Butter", es: "Mantequilla" },
        amount: "20",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "fruit-yogurt",
    emoji: "🍓",
    name: {
      en: "Fruit & Yogurt",
      de: "Obst & Joghurt",
      es: "Fruta y Yogur",
    },
    category: "breakfast",
    kidFriendly: true,
    prepMinutes: 5,
    color: "bg-pink-100",
    ingredients: [
      {
        name: { en: "Yogurt", de: "Joghurt", es: "Yogur" },
        amount: "300",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Mixed Berries", de: "Beeren-Mix", es: "Frutas del Bosque" },
        amount: "150",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Granola", de: "Granola", es: "Granola" },
        amount: "50",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },

  // === LUNCH ===
  {
    id: "pasta-tomato",
    emoji: "🍝",
    name: {
      en: "Pasta with Tomato Sauce",
      de: "Nudeln mit Tomatensauce",
      es: "Pasta con Salsa de Tomate",
    },
    category: "lunch",
    kidFriendly: true,
    prepMinutes: 20,
    color: "bg-red-100",
    ingredients: [
      {
        name: { en: "Pasta", de: "Nudeln", es: "Pasta" },
        amount: "300",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Canned Tomatoes", de: "Dosentomaten", es: "Tomates en Lata" },
        amount: "400",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Garlic", de: "Knoblauch", es: "Ajo" },
        amount: "2",
        unit: { en: "cloves", de: "Zehen", es: "dientes" },
      },
      {
        name: { en: "Olive Oil", de: "Olivenöl", es: "Aceite de Oliva" },
        amount: "2",
        unit: { en: "tbsp", de: "EL", es: "cda" },
      },
      {
        name: { en: "Parmesan", de: "Parmesan", es: "Parmesano" },
        amount: "50",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "chicken-rice",
    emoji: "🍗",
    name: {
      en: "Chicken & Rice",
      de: "Hähnchen mit Reis",
      es: "Pollo con Arroz",
    },
    category: "lunch",
    kidFriendly: true,
    prepMinutes: 30,
    color: "bg-yellow-100",
    ingredients: [
      {
        name: { en: "Chicken Breast", de: "Hähnchenbrust", es: "Pechuga de Pollo" },
        amount: "400",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Rice", de: "Reis", es: "Arroz" },
        amount: "250",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Carrots", de: "Karotten", es: "Zanahorias" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Peas", de: "Erbsen", es: "Guisantes" },
        amount: "100",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "kartoffelsuppe",
    emoji: "🥔",
    name: {
      en: "Potato Soup",
      de: "Kartoffelsuppe",
      es: "Sopa de Patata",
    },
    category: "lunch",
    kidFriendly: true,
    prepMinutes: 35,
    color: "bg-amber-100",
    ingredients: [
      {
        name: { en: "Potatoes", de: "Kartoffeln", es: "Patatas" },
        amount: "500",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Leek", de: "Lauch", es: "Puerro" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Cream", de: "Sahne", es: "Nata" },
        amount: "100",
        unit: { en: "ml", de: "ml", es: "ml" },
      },
      {
        name: { en: "Vegetable Broth", de: "Gemüsebrühe", es: "Caldo de Verduras" },
        amount: "500",
        unit: { en: "ml", de: "ml", es: "ml" },
      },
    ],
  },
  {
    id: "quesadillas",
    emoji: "🌮",
    name: {
      en: "Cheese Quesadillas",
      de: "Käse-Quesadillas",
      es: "Quesadillas de Queso",
    },
    category: "lunch",
    kidFriendly: true,
    prepMinutes: 15,
    color: "bg-orange-100",
    ingredients: [
      {
        name: { en: "Tortillas", de: "Tortillas", es: "Tortillas" },
        amount: "4",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Cheese", de: "Käse", es: "Queso" },
        amount: "200",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Bell Pepper", de: "Paprika", es: "Pimiento" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
    ],
  },

  // === DINNER ===
  {
    id: "fish-fingers",
    emoji: "🐟",
    name: {
      en: "Fish Fingers & Veggies",
      de: "Fischstäbchen & Gemüse",
      es: "Palitos de Pescado y Verduras",
    },
    category: "dinner",
    kidFriendly: true,
    prepMinutes: 20,
    color: "bg-blue-100",
    ingredients: [
      {
        name: { en: "Fish Fingers", de: "Fischstäbchen", es: "Palitos de Pescado" },
        amount: "8",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Broccoli", de: "Brokkoli", es: "Brócoli" },
        amount: "200",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Potatoes", de: "Kartoffeln", es: "Patatas" },
        amount: "400",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "pizza",
    emoji: "🍕",
    name: {
      en: "Homemade Pizza",
      de: "Selbstgemachte Pizza",
      es: "Pizza Casera",
    },
    category: "dinner",
    kidFriendly: true,
    prepMinutes: 40,
    color: "bg-red-100",
    ingredients: [
      {
        name: { en: "Pizza Dough", de: "Pizzateig", es: "Masa de Pizza" },
        amount: "500",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Mozzarella", de: "Mozzarella", es: "Mozzarella" },
        amount: "200",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Tomato Sauce", de: "Tomatensauce", es: "Salsa de Tomate" },
        amount: "150",
        unit: { en: "ml", de: "ml", es: "ml" },
      },
      {
        name: { en: "Bell Pepper", de: "Paprika", es: "Pimiento" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
    ],
  },
  {
    id: "schnitzel",
    emoji: "🥩",
    name: {
      en: "Schnitzel with Fries",
      de: "Schnitzel mit Pommes",
      es: "Escalope con Patatas Fritas",
    },
    category: "dinner",
    kidFriendly: true,
    prepMinutes: 30,
    color: "bg-amber-100",
    ingredients: [
      {
        name: { en: "Pork Cutlets", de: "Schweineschnitzel", es: "Chuletas de Cerdo" },
        amount: "4",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Breadcrumbs", de: "Semmelbrösel", es: "Pan Rallado" },
        amount: "100",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Eggs", de: "Eier", es: "Huevos" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Potatoes", de: "Kartoffeln", es: "Patatas" },
        amount: "500",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Lemon", de: "Zitrone", es: "Limón" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
    ],
  },
  {
    id: "tacos",
    emoji: "🌮",
    name: {
      en: "Tacos",
      de: "Tacos",
      es: "Tacos",
    },
    category: "dinner",
    kidFriendly: true,
    prepMinutes: 25,
    color: "bg-green-100",
    ingredients: [
      {
        name: { en: "Taco Shells", de: "Taco-Schalen", es: "Tortillas para Tacos" },
        amount: "8",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Ground Beef", de: "Hackfleisch", es: "Carne Molida" },
        amount: "300",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Lettuce", de: "Salat", es: "Lechuga" },
        amount: "1",
        unit: { en: "head", de: "Kopf", es: "unidad" },
      },
      {
        name: { en: "Tomatoes", de: "Tomaten", es: "Tomates" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Cheese", de: "Käse", es: "Queso" },
        amount: "100",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "spaghetti-bolognese",
    emoji: "🍝",
    name: {
      en: "Spaghetti Bolognese",
      de: "Spaghetti Bolognese",
      es: "Espaguetis a la Boloñesa",
    },
    category: "dinner",
    kidFriendly: true,
    prepMinutes: 35,
    color: "bg-red-100",
    ingredients: [
      {
        name: { en: "Spaghetti", de: "Spaghetti", es: "Espaguetis" },
        amount: "300",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Ground Beef", de: "Hackfleisch", es: "Carne Molida" },
        amount: "400",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Canned Tomatoes", de: "Dosentomaten", es: "Tomates en Lata" },
        amount: "400",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Onion", de: "Zwiebel", es: "Cebolla" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Garlic", de: "Knoblauch", es: "Ajo" },
        amount: "2",
        unit: { en: "cloves", de: "Zehen", es: "dientes" },
      },
    ],
  },

  // === SNACKS ===
  {
    id: "fruit-plate",
    emoji: "🍎",
    name: {
      en: "Fruit Plate",
      de: "Obstteller",
      es: "Plato de Frutas",
    },
    category: "snack",
    kidFriendly: true,
    prepMinutes: 5,
    color: "bg-green-100",
    ingredients: [
      {
        name: { en: "Apples", de: "Äpfel", es: "Manzanas" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Banana", de: "Banane", es: "Plátano" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Grapes", de: "Trauben", es: "Uvas" },
        amount: "150",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "veggie-sticks",
    emoji: "🥕",
    name: {
      en: "Veggie Sticks & Dip",
      de: "Gemüsesticks & Dip",
      es: "Palitos de Verdura y Dip",
    },
    category: "snack",
    kidFriendly: true,
    prepMinutes: 10,
    color: "bg-emerald-100",
    ingredients: [
      {
        name: { en: "Carrots", de: "Karotten", es: "Zanahorias" },
        amount: "3",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Cucumber", de: "Gurke", es: "Pepino" },
        amount: "1",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Hummus", de: "Hummus", es: "Hummus" },
        amount: "150",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
  {
    id: "muffins",
    emoji: "🧁",
    name: {
      en: "Mini Muffins",
      de: "Mini-Muffins",
      es: "Mini Muffins",
    },
    category: "snack",
    kidFriendly: true,
    prepMinutes: 25,
    color: "bg-purple-100",
    ingredients: [
      {
        name: { en: "Flour", de: "Mehl", es: "Harina" },
        amount: "200",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Sugar", de: "Zucker", es: "Azúcar" },
        amount: "80",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Eggs", de: "Eier", es: "Huevos" },
        amount: "2",
        unit: { en: "pcs", de: "Stk", es: "uds" },
      },
      {
        name: { en: "Butter", de: "Butter", es: "Mantequilla" },
        amount: "100",
        unit: { en: "g", de: "g", es: "g" },
      },
      {
        name: { en: "Chocolate Chips", de: "Schokotropfen", es: "Chips de Chocolate" },
        amount: "50",
        unit: { en: "g", de: "g", es: "g" },
      },
    ],
  },
];
