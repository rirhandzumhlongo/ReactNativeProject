import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { ChefHat, Plus, List, Home as HomeIcon, Soup, DollarSign, BookOpen, Clock } from 'lucide-react';



const initialDishes = [
    { id: 1, name: "Classic Caesar Salad", ingredients: "Romaine, croutons, parmesan, Caesar dressing", price: 12.00, prepTime: 15 },
    { id: 2, name: "Seared Tuna Steak", ingredients: "Tuna, sesame, soy sauce, rice", price: 25.50, prepTime: 25 },
    { id: 3, name: "Spicy Vegetarian Tacos", ingredients: "Black beans, corn, salsa, tortilla", price: 15.00, prepTime: 20 },
];
let nextId = 4;

const initialState = {
    currentScreen: 'Splash',
    dishes: initialDishes,
};


function menuReducer(state, action) {
    switch (action.type) {
        case 'NAVIGATE':
            return { ...state, currentScreen: action.payload };
        case 'ADD_DISH':
            return { ...state, dishes: [...state.dishes, action.payload] };
        default:
            return state;
    }
}



const ScreenWrapper = ({ title, children, dispatch, showBack = true }) => (
    <div className="flex flex-col h-full bg-gray-50 p-4 sm:p-8">
        <header className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
            <h1 className="text-3xl font-extrabold text-indigo-700 flex items-center">
                <ChefHat className="w-8 h-8 mr-3 text-indigo-500" />
                {title}
            </h1>
            {showBack && (
                <button
                    onClick={() => dispatch({ type: 'NAVIGATE', payload: 'Home' })}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 transition duration-150 shadow-md"
                >
                    <HomeIcon className="w-4 h-4 mr-1" />
                    Back to Menu
                </button>
            )}
        </header>
        <main className="flex-grow overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                {children}
            </div>
        </main>
    </div>
);

const Button = ({ children, onClick, color = 'indigo', icon: Icon, ...props }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-${color}-600 rounded-xl hover:bg-${color}-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-${color}-300`}
        {...props}
    >
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
    </button>
);