import React, { useState } from 'react';
import { FileDown, ArrowLeft, CheckCircle, Circle, RotateCcw } from 'lucide-react';

interface GroceryListProps {
  groceryList: {
    categories: {
      name: string;
      items: {
        name: string;
        amount: string;
        unit: string;
      }[];
    }[];
  };
  onBackToMealPlan: () => void;
  onReset: () => void;
}

const GroceryList = ({ groceryList, onBackToMealPlan, onReset }: GroceryListProps) => {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setCheckedItems({
      ...checkedItems,
      [key]: !checkedItems[key]
    });
  };

  const handleExportPDF = () => {
    // In a real implementation, this would generate a PDF
    console.log('Exporting grocery list as PDF');
    alert('In a real implementation, this would download a PDF of your grocery list.');
  };

  const handleShare = () => {
    // In a real implementation, this would share the list via a link
    console.log('Sharing grocery list');
    alert('In a real implementation, this would generate a shareable link for your grocery list.');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Grocery List</h2>
        <div className="flex space-x-2">
          <button
            onClick={onBackToMealPlan}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Meal Plan
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

      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Shopping progress</span>
          <span className="text-sm text-gray-500">
            {Object.values(checkedItems).filter(Boolean).length} / {
              groceryList.categories.reduce((total, category) => total + category.items.length, 0)
            } items
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full" 
            style={{ 
              width: `${
                Object.values(checkedItems).filter(Boolean).length / 
                groceryList.categories.reduce((total, category) => total + category.items.length, 0) * 100
              }%` 
            }}
          ></div>
        </div>
      </div>

      {/* Grocery categories */}
      <div className="space-y-6">
        {groceryList.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{category.name}</h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => {
                  const isChecked = checkedItems[`${categoryIndex}-${itemIndex}`] || false;
                  return (
                    <li 
                      key={itemIndex} 
                      className="p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    >
                      <div className="flex items-center">
                        {isChecked ? (
                          <CheckCircle size={20} className="text-green-500 mr-3" />
                        ) : (
                          <Circle size={20} className="text-gray-400 mr-3" />
                        )}
                        <div className={`flex-1 ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                          <span className="font-medium">
                            {item.amount} {item.unit} 
                          </span> {item.name}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Export options */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Export Options</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleExportPDF}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FileDown size={18} className="mr-2" />
            Export as PDF
          </button>
          <button
            onClick={handleShare}
            className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share List
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;