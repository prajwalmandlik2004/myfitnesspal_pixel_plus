import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { generateMealPlan } from '../../services/mealPlanService';

interface MealPlanGeneratorProps {
  onMealPlanGenerated: (mealPlan: any) => void;
}

const MealPlanGenerator = ({ onMealPlanGenerated }: MealPlanGeneratorProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    dietaryPreference: 'balanced',
    caloriesPerDay: 2000,
    mealsPerDay: 3,
    excludeIngredients: '',
    allergies: []
  });

  const dietaryOptions = [
    { value: 'balanced', label: 'Balanced' },
    { value: 'keto', label: 'Keto' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'paleo', label: 'Paleo' },
    { value: 'high-protein', label: 'High Protein' },
    { value: 'low-carb', label: 'Low Carb' },
    { value: 'mediterranean', label: 'Mediterranean' }
  ];

  const allergyOptions = [
    { value: 'dairy', label: 'Dairy' },
    { value: 'egg', label: 'Egg' },
    { value: 'gluten', label: 'Gluten' },
    { value: 'grain', label: 'Grain' },
    { value: 'peanut', label: 'Peanut' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'sesame', label: 'Sesame' },
    { value: 'shellfish', label: 'Shellfish' },
    { value: 'soy', label: 'Soy' },
    { value: 'sulfite', label: 'Sulfite' },
    { value: 'tree-nut', label: 'Tree Nut' },
    { value: 'wheat', label: 'Wheat' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAllergyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        allergies: [...formData.allergies, value]
      });
    } else {
      setFormData({
        ...formData,
        allergies: formData.allergies.filter(allergy => allergy !== value)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const plan = await generateMealPlan(formData);
      onMealPlanGenerated(plan);
    } catch (error) {
      console.error('Error generating meal plan:', error);
      // Handle error - would add proper error UI in a real app
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="dietaryPreference" className="block text-sm font-medium text-gray-700 mb-1">
              Dietary Preference
            </label>
            <select
              id="dietaryPreference"
              name="dietaryPreference"
              value={formData.dietaryPreference}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              required
            >
              {dietaryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="caloriesPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Calories Per Day
            </label>
            <input
              type="number"
              id="caloriesPerDay"
              name="caloriesPerDay"
              min="1200"
              max="4000"
              step="100"
              value={formData.caloriesPerDay}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="mealsPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Meals Per Day
            </label>
            <select
              id="mealsPerDay"
              name="mealsPerDay"
              value={formData.mealsPerDay}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              required
            >
              <option value="3">3 (Breakfast, Lunch, Dinner)</option>
              <option value="4">4 (Includes Snack)</option>
              <option value="5">5 (Includes 2 Snacks)</option>
            </select>
          </div>

          <div>
            <label htmlFor="excludeIngredients" className="block text-sm font-medium text-gray-700 mb-1">
              Exclude Ingredients (comma separated)
            </label>
            <input
              type="text"
              id="excludeIngredients"
              name="excludeIngredients"
              value={formData.excludeIngredients}
              onChange={handleChange}
              placeholder="e.g., mushrooms, olives, bell peppers"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="block text-sm font-medium text-gray-700 mb-3">Allergies & Intolerances</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allergyOptions.map(option => (
              <div key={option.value} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id={option.value}
                    name="allergies"
                    type="checkbox"
                    value={option.value}
                    checked={formData.allergies.includes(option.value)}
                    onChange={handleAllergyChange}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor={option.value} className="font-medium text-gray-700">
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Generating your meal plan...
              </>
            ) : (
              'Generate 7-Day Meal Plan'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealPlanGenerator;