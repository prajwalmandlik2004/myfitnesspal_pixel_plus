import React, { useState } from 'react';
import MealPlanGenerator from '../components/meal-planner/MealPlanGenerator';
import MealPlanResults from '../components/meal-planner/MealPlanResults';
import GroceryList from '../components/meal-planner/GroceryList';

// This enum represents the steps in our meal planning wizard
enum PlannerStep {
  FORM,
  RESULTS,
  GROCERY_LIST
}

const MealPlannerPage = () => {
  const [currentStep, setCurrentStep] = useState<PlannerStep>(PlannerStep.FORM);
  const [mealPlan, setMealPlan] = useState<any>(null);
  const [groceryList, setGroceryList] = useState<any>(null);

  // This function is called when the meal plan is generated
  const handleMealPlanGenerated = (generatedPlan: any) => {
    setMealPlan(generatedPlan);
    setCurrentStep(PlannerStep.RESULTS);
  };

  // This function is called when the grocery list is generated
  const handleGroceryListGenerated = (groceries: any) => {
    setGroceryList(groceries);
    setCurrentStep(PlannerStep.GROCERY_LIST);
  };

  // This function is for resetting back to the form
  const handleReset = () => {
    setCurrentStep(PlannerStep.FORM);
    setMealPlan(null);
    setGroceryList(null);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Meal Planner</h1>
            <p className="text-lg text-gray-600">
              Create personalized meal plans based on your dietary preferences and nutritional goals.
            </p>
          </div>

          {/* Step navigation */}
          <div className="mb-8">
            <div className="flex justify-center">
              <nav className="flex items-center">
                <button 
                  className={`flex items-center ${currentStep === PlannerStep.FORM ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                  onClick={currentStep !== PlannerStep.FORM ? handleReset : undefined}
                  disabled={currentStep === PlannerStep.FORM}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                    currentStep === PlannerStep.FORM ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>1</span>
                  <span>Preferences</span>
                </button>
                <div className="w-12 h-0.5 bg-gray-200 mx-2"></div>
                <button 
                  className={`flex items-center ${currentStep === PlannerStep.RESULTS ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                  onClick={mealPlan && currentStep === PlannerStep.GROCERY_LIST ? () => setCurrentStep(PlannerStep.RESULTS) : undefined}
                  disabled={!mealPlan || currentStep === PlannerStep.RESULTS}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                    currentStep === PlannerStep.RESULTS ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>2</span>
                  <span>Meal Plan</span>
                </button>
                <div className="w-12 h-0.5 bg-gray-200 mx-2"></div>
                <button 
                  className={`flex items-center ${currentStep === PlannerStep.GROCERY_LIST ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                  disabled={!groceryList || currentStep === PlannerStep.GROCERY_LIST}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                    currentStep === PlannerStep.GROCERY_LIST ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>3</span>
                  <span>Grocery List</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content based on current step */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {currentStep === PlannerStep.FORM && (
              <MealPlanGenerator onMealPlanGenerated={handleMealPlanGenerated} />
            )}
            
            {currentStep === PlannerStep.RESULTS && mealPlan && (
              <MealPlanResults 
                mealPlan={mealPlan} 
                onGenerateGroceryList={handleGroceryListGenerated}
                onReset={handleReset}
              />
            )}
            
            {currentStep === PlannerStep.GROCERY_LIST && groceryList && (
              <GroceryList 
                groceryList={groceryList} 
                onBackToMealPlan={() => setCurrentStep(PlannerStep.RESULTS)}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPage;