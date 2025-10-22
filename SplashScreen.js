
import React from 'react';

const SplashScreen = ({ dispatch }) => {
    const handleStart = () => {
        dispatch({ type: 'SET_SCREEN', screen: 'Home' });
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <h1 className="text-4xl font-bold">Welcome to the App</h1>
                <button
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                    onClick={handleStart}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default SplashScreen;

