import React, { useState } from 'react';
import { Printer, ShoppingCart, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { generateGroceryList } from '../../services/mealPlanService';

interface MealPlanResultsProps {
  mealPlan: any;
  onGenerateGroceryList: (groceryList: any) => void;
  onReset: () => void;
}

const MealPlanResults = ({ mealPlan, onGenerateGroceryList, onReset }: MealPlanResultsProps) => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedMeals, setExpandedMeals] = useState<{[key: string]: boolean}>({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleMealExpand = (dayIndex: number, mealIndex: number) => {
    const key = `${dayIndex}-${mealIndex}`;
    setExpandedMeals({
      ...expandedMeals,
      [key]: !expandedMeals[key]
    });
  };

  const handleGenerateGroceryList = async () => {
    setIsLoading(true);
    try {
      const groceryList = await generateGroceryList(mealPlan);
      onGenerateGroceryList(groceryList);
    } catch (error) {
      console.error('Error generating grocery list:', error);
      // Handle error in a real app with proper UI feedback
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your 7-Day Meal Plan</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Printer size={16} className="mr-1" />
            Print
          </button>
          <button
            onClick={handleGenerateGroceryList}
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
          >
            <ShoppingCart size={16} className="mr-1" />
            {isLoading ? 'Generating...' : 'Create Grocery List'}
          </button>
          <button
            onClick={onReset}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <RotateCcw size={16} className="mr-1" />
            Start Over
          </button>
        </div>
      </div>

      {/* Day selector */}
      <div className="flex mb-6 border-b border-gray-200 overflow-x-auto pb-1">
        {mealPlan.days.map((day: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeDay === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {day.name}
          </button>
        ))}
      </div>

      {/* Meal plan content */}
      <div className="space-y-6">
        {mealPlan.days[activeDay].meals.map((meal: any, mealIndex: number) => {
          const isExpanded = expandedMeals[`${activeDay}-${mealIndex}`] || false;
          return (
            <div key={mealIndex} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-50"
                onClick={() => toggleMealExpand(activeDay, mealIndex)}
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{meal.name}</h3>
                  <p className="text-sm text-gray-500">
                    {meal.calories} calories | {meal.protein}g protein | {meal.carbs}g carbs | {meal.fat}g fat
                  </p>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {isExpanded && (
                <div className="p-4 bg-white">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {meal.ingredients.map((ingredient: any, idx: number) => (
                          <li key={idx} className="text-sm text-gray-600">
                            {ingredient.amount} {ingredient.unit} {ingredient.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        {meal.instructions.map((step: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-600">{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  {meal.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-1">Notes</h4>
                      <p className="text-sm text-gray-600">{meal.notes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          Ready to shop for your meal plan? Generate a grocery list with all the ingredients you'll need.
        </p>
        <button
          onClick={handleGenerateGroceryList}
          disabled={isLoading}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
        >
          <ShoppingCart size={18} className="mr-2" />
          {isLoading ? 'Creating Your Grocery List...' : 'Create Grocery List'}
        </button>
      </div>
    </div>
  );
};

export default MealPlanResults;