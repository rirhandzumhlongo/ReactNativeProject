

import React, { useReducer, useCallback } from 'react';
import SplashScreen from './SplashScreen.';
import HomeScreen from './HomeScreen.';
import AddDishScreen from './AddDishScreen.';
import SummaryScreen from './SummaryScreen.';

// -----------------------------
// Initial State
// -----------------------------
const initialState = {
  currentScreen: 'Splash',
  dishes: [],
};

// -----------------------------
// Reducer
// -----------------------------
function menuReducer(state, action) {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'ADD_DISH':
      return { ...state, dishes: [...state.dishes, action.payload] };
    default:
      return state;
  }
}

// -----------------------------
// App Component
// -----------------------------
const App = () => {
  const [state, dispatch] = useReducer(menuReducer, initialState);
  const { currentScreen, dishes } = state;

  // Function to switch between screens
  const renderScreen = useCallback(() => {
    const commonProps = { dispatch, dishes };

    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen dispatch={dispatch} />;
      case 'Home':
        return <HomeScreen {...commonProps} />;
      case 'AddDish':
        return <AddDishScreen dispatch={dispatch} />;
      case 'Summary':
        return <SummaryScreen {...commonProps} />;
      default:
        return <HomeScreen {...commonProps} />;
    }
  }, [currentScreen, dishes]);

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div className="min-h-screen font-sans bg-gray-50 antialiased">
      <div className="h-screen w-full mx-auto">{renderScreen()}</div>
    </div>
  );
};

export default App;
