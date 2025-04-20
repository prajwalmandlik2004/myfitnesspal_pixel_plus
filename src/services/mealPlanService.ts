// This is a mock service to simulate API calls for meal planning
// In a real app, these would connect to a backend API

import { mockMealPlanData, mockGroceryListData } from './mockData';

export interface MealPlanFormData {
  dietaryPreference: string;
  caloriesPerDay: number;
  mealsPerDay: number;
  excludeIngredients: string;
  allergies: string[];
}

// Simulates an API call to generate a meal plan
export const generateMealPlan = async (formData: MealPlanFormData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, we would send formData to a backend API
  console.log('Generating meal plan with:', formData);
  
  // Return mock data for demonstration
  return mockMealPlanData;
};

// Simulates an API call to generate a grocery list from a meal plan
export const generateGroceryList = async (mealPlan: any) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, we would analyze the meal plan to create a grocery list
  console.log('Generating grocery list from meal plan');
  
  // Return mock data for demonstration
  return mockGroceryListData;
};