// screens/AddDishScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// ... rest of your component logic

const AddDishScreen = ({ dispatch }) => {
    const [dishName, setDishName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [prepTime, setPrepTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!dishName || !ingredients || isNaN(parseFloat(price)) || isNaN(parseInt(prepTime, 10))) {
            console.error('All fields must be filled correctly.');
            return;
        }

        const newDish = {
            id: nextId++,
            name: dishName,
            ingredients: ingredients,
            price: parseFloat(price),
            prepTime: parseInt(prepTime, 10),
        };

        dispatch({ type: 'ADD_DISH', payload: newDish });
        dispatch({ type: 'NAVIGATE', payload: 'Home' });
    };

    const InputField = ({ label, type = 'text', value, onChange, icon: Icon, required = true }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Icon className="w-4 h-4 mr-2 text-indigo-500" />
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
            />
        </div>
    );

    return (
        <ScreenWrapper title="Add New Dish" dispatch={dispatch}>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <InputField label="Dish Name" value={dishName} onChange={setDishName} icon={Soup} />
                    <InputField label="Key Ingredients" value={ingredients} onChange={setIngredients} icon={List} />
                    <InputField label="Price ($)" type="number" value={price} onChange={setPrice} icon={DollarSign} />
                    <InputField label="Preparation Time (min)" type="number" value={prepTime} onChange={setPrepTime} icon={Clock} />

                    <Button type="submit" color="indigo" icon={Plus} className="w-full mt-6">
                        Save Dish to Menu
                    </Button>
                </form>
            </div>
        </ScreenWrapper>
    );
};
