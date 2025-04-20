// Mock data for meal planning features

export const mockMealPlanData = {
  days: [
    {
      name: "Monday",
      meals: [
        {
          name: "Breakfast: Greek Yogurt Parfait",
          calories: 350,
          protein: 20,
          carbs: 45,
          fat: 10,
          ingredients: [
            { name: "Greek yogurt", amount: "1", unit: "cup" },
            { name: "mixed berries", amount: "1/2", unit: "cup" },
            { name: "granola", amount: "1/4", unit: "cup" },
            { name: "honey", amount: "1", unit: "tbsp" }
          ],
          instructions: [
            "Layer greek yogurt in a bowl or glass",
            "Top with mixed berries",
            "Sprinkle granola on top",
            "Drizzle with honey"
          ],
          notes: "You can prepare this the night before for a quick breakfast. Keep granola separate until ready to eat to maintain crunch."
        },
        {
          name: "Lunch: Grilled Chicken Salad",
          calories: 450,
          protein: 35,
          carbs: 25,
          fat: 22,
          ingredients: [
            { name: "chicken breast", amount: "4", unit: "oz" },
            { name: "mixed greens", amount: "2", unit: "cups" },
            { name: "cherry tomatoes", amount: "1/2", unit: "cup" },
            { name: "cucumber", amount: "1/2", unit: "medium" },
            { name: "avocado", amount: "1/4", unit: "medium" },
            { name: "olive oil", amount: "1", unit: "tbsp" },
            { name: "lemon juice", amount: "1", unit: "tbsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Season chicken breast with salt and pepper",
            "Grill chicken until fully cooked (165°F internal temperature)",
            "Chop cucumber and halve cherry tomatoes",
            "Slice avocado",
            "Combine mixed greens with vegetables",
            "Slice cooked chicken and add to salad",
            "Drizzle with olive oil and lemon juice"
          ],
          notes: ""
        },
        {
          name: "Dinner: Baked Salmon with Roasted Vegetables",
          calories: 550,
          protein: 40,
          carbs: 30,
          fat: 28,
          ingredients: [
            { name: "salmon fillet", amount: "5", unit: "oz" },
            { name: "broccoli florets", amount: "1", unit: "cup" },
            { name: "bell pepper", amount: "1/2", unit: "medium" },
            { name: "zucchini", amount: "1/2", unit: "medium" },
            { name: "olive oil", amount: "2", unit: "tbsp" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "lemon", amount: "1/2", unit: "medium" },
            { name: "dill", amount: "1", unit: "tsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Preheat oven to 400°F",
            "Chop vegetables into similar sized pieces",
            "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
            "Spread on baking sheet and roast for 10 minutes",
            "Season salmon with salt, pepper, and dill",
            "Drizzle with remaining olive oil and lemon juice",
            "Push vegetables to one side of baking sheet and add salmon",
            "Bake for an additional 12-15 minutes until salmon is cooked through"
          ],
          notes: "For a complete meal, serve with 1/2 cup cooked quinoa or brown rice."
        }
      ]
    },
    {
      name: "Tuesday",
      meals: [
        {
          name: "Breakfast: Spinach and Feta Omelette",
          calories: 320,
          protein: 22,
          carbs: 8,
          fat: 24,
          ingredients: [
            { name: "eggs", amount: "3", unit: "large" },
            { name: "spinach", amount: "1", unit: "cup" },
            { name: "feta cheese", amount: "2", unit: "tbsp" },
            { name: "red onion", amount: "2", unit: "tbsp" },
            { name: "olive oil", amount: "1", unit: "tsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Heat olive oil in a non-stick pan over medium heat",
            "Sauté red onion until translucent",
            "Add spinach and cook until wilted",
            "Whisk eggs with salt and pepper",
            "Pour eggs over vegetables in pan",
            "When almost set, sprinkle with feta cheese",
            "Fold omelette in half and cook until eggs are fully set"
          ],
          notes: ""
        },
        {
          name: "Lunch: Turkey and Avocado Wrap",
          calories: 420,
          protein: 28,
          carbs: 35,
          fat: 18,
          ingredients: [
            { name: "whole wheat tortilla", amount: "1", unit: "large" },
            { name: "sliced turkey breast", amount: "4", unit: "oz" },
            { name: "avocado", amount: "1/4", unit: "medium" },
            { name: "lettuce", amount: "1/2", unit: "cup" },
            { name: "tomato", amount: "1/4", unit: "medium" },
            { name: "mustard", amount: "1", unit: "tsp" },
            { name: "red onion", amount: "2", unit: "tbsp" }
          ],
          instructions: [
            "Spread mustard on tortilla",
            "Layer turkey, lettuce, sliced tomato, and red onion",
            "Add sliced avocado",
            "Roll wrap tightly and slice in half"
          ],
          notes: "Serve with a piece of fruit or side salad for a complete lunch."
        },
        {
          name: "Dinner: Vegetable Stir Fry with Tofu",
          calories: 480,
          protein: 25,
          carbs: 55,
          fat: 20,
          ingredients: [
            { name: "firm tofu", amount: "4", unit: "oz" },
            { name: "brown rice", amount: "1/2", unit: "cup" },
            { name: "broccoli", amount: "1", unit: "cup" },
            { name: "carrot", amount: "1", unit: "medium" },
            { name: "snap peas", amount: "1/2", unit: "cup" },
            { name: "bell pepper", amount: "1/2", unit: "medium" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "ginger", amount: "1", unit: "tsp" },
            { name: "soy sauce", amount: "2", unit: "tbsp" },
            { name: "sesame oil", amount: "1", unit: "tbsp" }
          ],
          instructions: [
            "Cook brown rice according to package instructions",
            "Press tofu to remove excess water and cut into cubes",
            "Slice vegetables into similar sized pieces",
            "Heat sesame oil in a wok or large pan over high heat",
            "Add tofu and cook until golden",
            "Add garlic and ginger, stir for 30 seconds",
            "Add vegetables and stir fry for 5-7 minutes until tender-crisp",
            "Add soy sauce and stir to combine",
            "Serve over brown rice"
          ],
          notes: "For extra flavor, add 1 tbsp of sriracha or a sprinkle of red pepper flakes."
        }
      ]
    },
    {
      name: "Wednesday",
      meals: [
        {
          name: "Breakfast: Overnight Oats",
          calories: 380,
          protein: 15,
          carbs: 60,
          fat: 10,
          ingredients: [
            { name: "rolled oats", amount: "1/2", unit: "cup" },
            { name: "almond milk", amount: "1/2", unit: "cup" },
            { name: "chia seeds", amount: "1", unit: "tbsp" },
            { name: "banana", amount: "1/2", unit: "medium" },
            { name: "almond butter", amount: "1", unit: "tbsp" },
            { name: "cinnamon", amount: "1/4", unit: "tsp" }
          ],
          instructions: [
            "Combine oats, almond milk, and chia seeds in a jar",
            "Add cinnamon and stir well",
            "Refrigerate overnight",
            "In the morning, top with sliced banana and almond butter"
          ],
          notes: "Make several jars at once for easy breakfasts throughout the week."
        },
        {
          name: "Lunch: Mediterranean Quinoa Bowl",
          calories: 470,
          protein: 18,
          carbs: 65,
          fat: 16,
          ingredients: [
            { name: "quinoa", amount: "1/2", unit: "cup" },
            { name: "cucumber", amount: "1/2", unit: "medium" },
            { name: "cherry tomatoes", amount: "1/2", unit: "cup" },
            { name: "kalamata olives", amount: "6", unit: "medium" },
            { name: "feta cheese", amount: "2", unit: "tbsp" },
            { name: "red onion", amount: "2", unit: "tbsp" },
            { name: "olive oil", amount: "1", unit: "tbsp" },
            { name: "lemon juice", amount: "1", unit: "tbsp" },
            { name: "oregano", amount: "1/2", unit: "tsp" }
          ],
          instructions: [
            "Cook quinoa according to package instructions and let cool",
            "Dice cucumber, halve cherry tomatoes, and slice red onion",
            "Combine olive oil, lemon juice, and oregano for dressing",
            "Mix quinoa with vegetables, olives, and feta cheese",
            "Drizzle with dressing and toss to combine"
          ],
          notes: "This bowl can be made ahead and refrigerated for up to 3 days."
        },
        {
          name: "Dinner: Herb Roasted Chicken with Sweet Potatoes",
          calories: 520,
          protein: 40,
          carbs: 35,
          fat: 22,
          ingredients: [
            { name: "chicken thighs", amount: "6", unit: "oz" },
            { name: "sweet potato", amount: "1", unit: "medium" },
            { name: "brussels sprouts", amount: "1", unit: "cup" },
            { name: "olive oil", amount: "2", unit: "tbsp" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "rosemary", amount: "1", unit: "sprig" },
            { name: "thyme", amount: "2", unit: "sprigs" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Preheat oven to 425°F",
            "Dice sweet potato into 1-inch cubes",
            "Trim and halve brussels sprouts",
            "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
            "Spread on baking sheet and roast for 10 minutes",
            "Season chicken with salt, pepper, minced garlic, and herbs",
            "Heat remaining olive oil in an oven-safe skillet",
            "Sear chicken skin-side down until golden",
            "Flip chicken and transfer skillet to oven",
            "Roast until chicken reaches 165°F internal temperature, about 15-20 minutes",
            "Serve chicken with roasted vegetables"
          ],
          notes: "For a lighter option, use boneless, skinless chicken breast instead of thighs."
        }
      ]
    },
    {
      name: "Thursday",
      meals: [
        {
          name: "Breakfast: Veggie Breakfast Burrito",
          calories: 410,
          protein: 20,
          carbs: 45,
          fat: 18,
          ingredients: [
            { name: "whole wheat tortilla", amount: "1", unit: "medium" },
            { name: "eggs", amount: "2", unit: "large" },
            { name: "black beans", amount: "1/4", unit: "cup" },
            { name: "bell pepper", amount: "1/4", unit: "medium" },
            { name: "onion", amount: "2", unit: "tbsp" },
            { name: "salsa", amount: "2", unit: "tbsp" },
            { name: "avocado", amount: "1/4", unit: "small" },
            { name: "olive oil", amount: "1", unit: "tsp" }
          ],
          instructions: [
            "Heat olive oil in a pan over medium heat",
            "Sauté diced onion and bell pepper until soft",
            "Add black beans and heat through",
            "Beat eggs and pour into pan",
            "Scramble everything together until eggs are cooked",
            "Warm tortilla slightly",
            "Fill tortilla with egg mixture",
            "Top with salsa and sliced avocado",
            "Roll into a burrito"
          ],
          notes: ""
        },
        {
          name: "Lunch: Tuna Niçoise Salad",
          calories: 440,
          protein: 35,
          carbs: 25,
          fat: 22,
          ingredients: [
            { name: "canned tuna", amount: "4", unit: "oz" },
            { name: "mixed greens", amount: "2", unit: "cups" },
            { name: "boiled egg", amount: "1", unit: "large" },
            { name: "green beans", amount: "1/2", unit: "cup" },
            { name: "small potatoes", amount: "3", unit: "small" },
            { name: "cherry tomatoes", amount: "1/2", unit: "cup" },
            { name: "olives", amount: "5", unit: "medium" },
            { name: "olive oil", amount: "1", unit: "tbsp" },
            { name: "lemon juice", amount: "1", unit: "tbsp" },
            { name: "dijon mustard", amount: "1", unit: "tsp" }
          ],
          instructions: [
            "Boil potatoes until tender, about 15 minutes",
            "Blanch green beans in boiling water for 3 minutes, then cool in ice water",
            "Slice boiled egg",
            "Whisk together olive oil, lemon juice, and mustard for dressing",
            "Arrange mixed greens on a plate",
            "Top with tuna, sliced potatoes, green beans, halved cherry tomatoes, olives, and egg",
            "Drizzle with dressing"
          ],
          notes: "Use tuna packed in water, not oil, for a lighter option."
        },
        {
          name: "Dinner: Turkey Chili",
          calories: 490,
          protein: 38,
          carbs: 50,
          fat: 15,
          ingredients: [
            { name: "ground turkey", amount: "4", unit: "oz" },
            { name: "kidney beans", amount: "1/2", unit: "cup" },
            { name: "black beans", amount: "1/4", unit: "cup" },
            { name: "diced tomatoes", amount: "1/2", unit: "cup" },
            { name: "bell pepper", amount: "1/2", unit: "medium" },
            { name: "onion", amount: "1/4", unit: "medium" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "chili powder", amount: "1", unit: "tbsp" },
            { name: "cumin", amount: "1", unit: "tsp" },
            { name: "paprika", amount: "1/2", unit: "tsp" },
            { name: "olive oil", amount: "1", unit: "tbsp" }
          ],
          instructions: [
            "Heat olive oil in a pot over medium heat",
            "Add diced onion and bell pepper, sauté until soft",
            "Add minced garlic and cook for 30 seconds",
            "Add ground turkey and cook until browned",
            "Add spices and stir to coat",
            "Add diced tomatoes and beans",
            "Simmer for 20-25 minutes",
            "Serve topped with a sprinkle of cheese if desired"
          ],
          notes: "This chili freezes well. Make a larger batch for future meals."
        }
      ]
    },
    {
      name: "Friday",
      meals: [
        {
          name: "Breakfast: Smoothie Bowl",
          calories: 370,
          protein: 18,
          carbs: 55,
          fat: 12,
          ingredients: [
            { name: "frozen mixed berries", amount: "1", unit: "cup" },
            { name: "banana", amount: "1/2", unit: "medium" },
            { name: "protein powder", amount: "1", unit: "scoop" },
            { name: "almond milk", amount: "1/4", unit: "cup" },
            { name: "granola", amount: "2", unit: "tbsp" },
            { name: "chia seeds", amount: "1", unit: "tsp" },
            { name: "coconut flakes", amount: "1", unit: "tsp" }
          ],
          instructions: [
            "Blend frozen berries, banana, protein powder, and almond milk until smooth",
            "Pour into a bowl",
            "Top with granola, chia seeds, and coconut flakes"
          ],
          notes: "Add more almond milk if needed for blending, but keep it thick enough to eat with a spoon."
        },
        {
          name: "Lunch: Quinoa and Chickpea Salad",
          calories: 430,
          protein: 15,
          carbs: 60,
          fat: 16,
          ingredients: [
            { name: "quinoa", amount: "1/2", unit: "cup" },
            { name: "chickpeas", amount: "1/2", unit: "cup" },
            { name: "cucumber", amount: "1/2", unit: "medium" },
            { name: "cherry tomatoes", amount: "1/2", unit: "cup" },
            { name: "red onion", amount: "2", unit: "tbsp" },
            { name: "parsley", amount: "2", unit: "tbsp" },
            { name: "lemon juice", amount: "1", unit: "tbsp" },
            { name: "olive oil", amount: "1", unit: "tbsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Cook quinoa according to package instructions and let cool",
            "Dice cucumber, halve cherry tomatoes, and finely chop red onion",
            "Rinse and drain chickpeas",
            "Combine all ingredients in a bowl",
            "Drizzle with olive oil and lemon juice",
            "Season with salt and pepper",
            "Toss to combine"
          ],
          notes: "Add 1/4 avocado for extra healthy fats and creaminess."
        },
        {
          name: "Dinner: Baked Cod with Lemon and Herbs",
          calories: 480,
          protein: 40,
          carbs: 30,
          fat: 20,
          ingredients: [
            { name: "cod fillet", amount: "5", unit: "oz" },
            { name: "asparagus", amount: "1", unit: "cup" },
            { name: "brown rice", amount: "1/2", unit: "cup" },
            { name: "lemon", amount: "1/2", unit: "medium" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "fresh dill", amount: "1", unit: "tbsp" },
            { name: "olive oil", amount: "2", unit: "tbsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Preheat oven to 400°F",
            "Cook brown rice according to package instructions",
            "Place cod fillet on a sheet of parchment paper",
            "Season with salt, pepper, minced garlic, and dill",
            "Drizzle with 1 tbsp olive oil and juice from half a lemon",
            "Wrap parchment paper around fish and place on baking sheet",
            "Toss asparagus with remaining olive oil, salt, and pepper",
            "Add to baking sheet around fish packet",
            "Bake for 15-18 minutes until fish is opaque and flakes easily",
            "Serve with brown rice"
          ],
          notes: "Any white fish can be substituted for cod based on availability and preference."
        }
      ]
    },
    {
      name: "Saturday",
      meals: [
        {
          name: "Breakfast: Whole Grain Pancakes with Fruit",
          calories: 420,
          protein: 15,
          carbs: 65,
          fat: 12,
          ingredients: [
            { name: "whole grain pancake mix", amount: "1/2", unit: "cup" },
            { name: "egg", amount: "1", unit: "large" },
            { name: "almond milk", amount: "1/3", unit: "cup" },
            { name: "blueberries", amount: "1/2", unit: "cup" },
            { name: "banana", amount: "1/2", unit: "medium" },
            { name: "maple syrup", amount: "1", unit: "tbsp" },
            { name: "cooking spray", amount: "as needed", unit: "" }
          ],
          instructions: [
            "Mix pancake mix, egg, and almond milk until just combined",
            "Fold in blueberries",
            "Heat a pan over medium heat and spray with cooking spray",
            "Pour batter to make 3-4 pancakes",
            "Cook until bubbles form on surface, then flip",
            "Cook until golden brown on both sides",
            "Serve topped with sliced banana and maple syrup"
          ],
          notes: "For added protein, mix in 1 scoop of protein powder or add 2 tbsp of Greek yogurt to the batter."
        },
        {
          name: "Lunch: Veggie and Hummus Wrap",
          calories: 390,
          protein: 12,
          carbs: 55,
          fat: 15,
          ingredients: [
            { name: "whole wheat tortilla", amount: "1", unit: "large" },
            { name: "hummus", amount: "3", unit: "tbsp" },
            { name: "mixed greens", amount: "1", unit: "cup" },
            { name: "grated carrot", amount: "1/4", unit: "cup" },
            { name: "cucumber", amount: "1/4", unit: "medium" },
            { name: "bell pepper", amount: "1/4", unit: "medium" },
            { name: "avocado", amount: "1/4", unit: "medium" }
          ],
          instructions: [
            "Spread hummus on tortilla",
            "Layer mixed greens, grated carrot, sliced cucumber, and bell pepper",
            "Add sliced avocado",
            "Roll up tightly and slice in half"
          ],
          notes: "Add hot sauce or a sprinkle of red pepper flakes for extra flavor."
        },
        {
          name: "Dinner: Grilled Shrimp and Vegetable Skewers",
          calories: 510,
          protein: 35,
          carbs: 45,
          fat: 18,
          ingredients: [
            { name: "shrimp", amount: "5", unit: "oz" },
            { name: "bell peppers", amount: "1", unit: "medium" },
            { name: "zucchini", amount: "1/2", unit: "medium" },
            { name: "red onion", amount: "1/4", unit: "medium" },
            { name: "cherry tomatoes", amount: "1/2", unit: "cup" },
            { name: "quinoa", amount: "1/2", unit: "cup" },
            { name: "olive oil", amount: "2", unit: "tbsp" },
            { name: "garlic", amount: "2", unit: "cloves" },
            { name: "lemon juice", amount: "1", unit: "tbsp" },
            { name: "oregano", amount: "1", unit: "tsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Cook quinoa according to package instructions",
            "If using wooden skewers, soak in water for 30 minutes",
            "Peel and devein shrimp if necessary",
            "Cut vegetables into 1-inch pieces",
            "In a bowl, whisk together olive oil, minced garlic, lemon juice, oregano, salt, and pepper",
            "Toss shrimp and vegetables in marinade",
            "Thread shrimp and vegetables onto skewers, alternating items",
            "Grill for 2-3 minutes per side until shrimp is pink and vegetables are tender",
            "Serve over quinoa"
          ],
          notes: "These can also be cooked in the oven at 425°F for 10-12 minutes."
        }
      ]
    },
    {
      name: "Sunday",
      meals: [
        {
          name: "Breakfast: Avocado Toast with Poached Egg",
          calories: 390,
          protein: 18,
          carbs: 35,
          fat: 22,
          ingredients: [
            { name: "whole grain bread", amount: "2", unit: "slices" },
            { name: "avocado", amount: "1/2", unit: "medium" },
            { name: "eggs", amount: "2", unit: "large" },
            { name: "cherry tomatoes", amount: "1/4", unit: "cup" },
            { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
            { name: "lemon juice", amount: "1", unit: "tsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Toast bread slices",
            "Mash avocado with lemon juice, salt, and pepper",
            "Spread avocado on toast",
            "Bring a pot of water to a gentle simmer and add a splash of vinegar",
            "Crack eggs into individual small bowls",
            "Swirl water and gently slide eggs into simmering water",
            "Poach for 3-4 minutes for runny yolks",
            "Remove with a slotted spoon and drain on paper towels",
            "Place eggs on avocado toast",
            "Top with halved cherry tomatoes and red pepper flakes"
          ],
          notes: "For extra flavor, add a sprinkle of feta cheese or everything bagel seasoning."
        },
        {
          name: "Lunch: Sweet Potato and Black Bean Bowl",
          calories: 450,
          protein: 15,
          carbs: 70,
          fat: 14,
          ingredients: [
            { name: "sweet potato", amount: "1", unit: "medium" },
            { name: "black beans", amount: "1/2", unit: "cup" },
            { name: "kale", amount: "1", unit: "cup" },
            { name: "red onion", amount: "1/4", unit: "medium" },
            { name: "avocado", amount: "1/4", unit: "medium" },
            { name: "lime juice", amount: "1", unit: "tbsp" },
            { name: "olive oil", amount: "1", unit: "tbsp" },
            { name: "cumin", amount: "1/2", unit: "tsp" },
            { name: "paprika", amount: "1/4", unit: "tsp" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Preheat oven to 425°F",
            "Dice sweet potato into 1-inch cubes",
            "Toss with olive oil, cumin, paprika, salt, and pepper",
            "Spread on baking sheet and roast for 25 minutes until tender",
            "Rinse and drain black beans",
            "Massage kale with 1 tsp olive oil and a pinch of salt until softened",
            "Slice red onion thinly",
            "Combine roasted sweet potato, black beans, kale, and red onion in a bowl",
            "Top with sliced avocado",
            "Drizzle with lime juice"
          ],
          notes: "Add a dollop of Greek yogurt or a sprinkle of cheese for extra protein."
        },
        {
          name: "Dinner: Lemon Herb Roasted Chicken",
          calories: 530,
          protein: 45,
          carbs: 35,
          fat: 20,
          ingredients: [
            { name: "chicken breast", amount: "6", unit: "oz" },
            { name: "new potatoes", amount: "6", unit: "small" },
            { name: "carrots", amount: "2", unit: "medium" },
            { name: "brussels sprouts", amount: "1", unit: "cup" },
            { name: "olive oil", amount: "2", unit: "tbsp" },
            { name: "lemon", amount: "1", unit: "medium" },
            { name: "garlic", amount: "3", unit: "cloves" },
            { name: "fresh rosemary", amount: "2", unit: "sprigs" },
            { name: "fresh thyme", amount: "2", unit: "sprigs" },
            { name: "salt and pepper", amount: "to taste", unit: "" }
          ],
          instructions: [
            "Preheat oven to 425°F",
            "Halve new potatoes, slice carrots, and trim brussels sprouts",
            "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
            "Spread on a baking sheet",
            "Place chicken on a separate baking sheet or in a baking dish",
            "Mix remaining olive oil with minced garlic, lemon zest, and chopped herbs",
            "Rub mixture over chicken",
            "Place lemon slices on and around chicken",
            "Roast vegetables for 25-30 minutes until tender",
            "Roast chicken for 20-25 minutes until internal temperature reaches 165°F",
            "Let chicken rest for 5 minutes before slicing",
            "Serve with roasted vegetables"
          ],
          notes: "Save any leftover chicken for salads or wraps during the week."
        }
      ]
    }
  ]
};

export const mockGroceryListData = {
  categories: [
    {
      name: "Proteins",
      items: [
        { name: "Chicken breast", amount: "16", unit: "oz" },
        { name: "Chicken thighs", amount: "6", unit: "oz" },
        { name: "Ground turkey", amount: "4", unit: "oz" },
        { name: "Salmon fillet", amount: "5", unit: "oz" },
        { name: "Cod fillet", amount: "5", unit: "oz" },
        { name: "Shrimp", amount: "5", unit: "oz" },
        { name: "Eggs", amount: "10", unit: "large" },
        { name: "Tofu, firm", amount: "4", unit: "oz" },
        { name: "Sliced turkey breast", amount: "4", unit: "oz" },
        { name: "Canned tuna", amount: "4", unit: "oz" }
      ]
    },
    {
      name: "Dairy & Alternatives",
      items: [
        { name: "Greek yogurt", amount: "1", unit: "cup" },
        { name: "Feta cheese", amount: "4", unit: "oz" },
        { name: "Almond milk", amount: "1", unit: "quart" }
      ]
    },
    {
      name: "Fruits",
      items: [
        { name: "Bananas", amount: "2", unit: "medium" },
        { name: "Lemons", amount: "3", unit: "medium" },
        { name: "Limes", amount: "2", unit: "medium" },
        { name: "Mixed berries", amount: "2", unit: "cups" },
        { name: "Frozen mixed berries", amount: "1", unit: "bag" },
        { name: "Avocados", amount: "2", unit: "medium" }
      ]
    },
    {
      name: "Vegetables",
      items: [
        { name: "Mixed greens", amount: "1", unit: "large bag" },
        { name: "Kale", amount: "1", unit: "bunch" },
        { name: "Spinach", amount: "1", unit: "bag" },
        { name: "Lettuce", amount: "1", unit: "head" },
        { name: "Cherry tomatoes", amount: "1", unit: "pint" },
        { name: "Tomatoes", amount: "2", unit: "medium" },
        { name: "Cucumbers", amount: "2", unit: "medium" },
        { name: "Bell peppers", amount: "4", unit: "medium" },
        { name: "Broccoli", amount: "1", unit: "head" },
        { name: "Carrots", amount: "1", unit: "bunch" },
        { name: "Zucchini", amount: "2", unit: "medium" },
        { name: "Sweet potatoes", amount: "2", unit: "medium" },
        { name: "New potatoes", amount: "1", unit: "lb" },
        { name: "Red onions", amount: "2", unit: "medium" },
        { name: "Garlic", amount: "1", unit: "head" },
        { name: "Ginger", amount: "1", unit: "small piece" },
        { name: "Green beans", amount: "1/2", unit: "lb" },
        { name: "Brussels sprouts", amount: "1", unit: "lb" },
        { name: "Asparagus", amount: "1", unit: "bunch" },
        { name: "Snap peas", amount: "1/2", unit: "lb" }
      ]
    },
    {
      name: "Grains & Starches",
      items: [
        { name: "Whole grain bread", amount: "1", unit: "loaf" },
        { name: "Whole wheat tortillas", amount: "1", unit: "pack" },
        { name: "Quinoa", amount: "1", unit: "cup" },
        { name: "Brown rice", amount: "1", unit: "cup" },
        { name: "Rolled oats", amount: "1", unit: "cup" },
        { name: "Whole grain pancake mix", amount: "1", unit: "box" },
        { name: "Granola", amount: "1", unit: "cup" }
      ]
    },
    {
      name: "Canned & Jarred",
      items: [
        { name: "Black beans", amount: "1", unit: "can" },
        { name: "Kidney beans", amount: "1", unit: "can" },
        { name: "Chickpeas", amount: "1", unit: "can" },
        { name: "Diced tomatoes", amount: "1", unit: "can" },
        { name: "Kalamata olives", amount: "1", unit: "jar" },
        { name: "Hummus", amount: "1", unit: "container" }
      ]
    },
    {
      name: "Pantry Items",
      items: [
        { name: "Olive oil", amount: "1", unit: "bottle" },
        { name: "Sesame oil", amount: "1", unit: "bottle" },
        { name: "Soy sauce", amount: "1", unit: "bottle" },
        { name: "Dijon mustard", amount: "1", unit: "jar" },
        { name: "Honey", amount: "1", unit: "bottle" },
        { name: "Maple syrup", amount: "1", unit: "bottle" },
        { name: "Chia seeds", amount: "1", unit: "small bag" },
        { name: "Protein powder", amount: "1", unit: "container" },
        { name: "Almond butter", amount: "1", unit: "jar" },
        { name: "Coconut flakes", amount: "1", unit: "small bag" },
        { name: "Salt", amount: "1", unit: "container" },
        { name: "Pepper", amount: "1", unit: "container" }
      ]
    },
    {
      name: "Herbs & Spices",
      items: [
        { name: "Fresh rosemary", amount: "1", unit: "bunch" },
        { name: "Fresh thyme", amount: "1", unit: "bunch" },
        { name: "Fresh dill", amount: "1", unit: "bunch" },
        { name: "Fresh parsley", amount: "1", unit: "bunch" },
        { name: "Cinnamon", amount: "1", unit: "container" },
        { name: "Cumin", amount: "1", unit: "container" },
        { name: "Paprika", amount: "1", unit: "container" },
        { name: "Chili powder", amount: "1", unit: "container" },
        { name: "Oregano", amount: "1", unit: "container" },
        { name: "Red pepper flakes", amount: "1", unit: "container" }
      ]
    }
  ]
};