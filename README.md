
### **1. SplashScreen.js**

**Purpose:**
Displays a short loading or welcome screen when the app starts. It’s often used for branding or initialization.

**Functionality:**

* Shows the app logo or animation.
* Automatically transitions to the Home screen after a short delay using `dispatch({ type: 'SET_SCREEN', payload: 'Home' })`.
---

### **2. HomeScreen.js**

**Purpose:**
Main screen that displays all dishes currently in the menu.

**Functionality:**

* Displays a list of dishes stored in the app’s state.
* If there are no dishes, it shows a message prompting the user to add one.
* Contains buttons to navigate to:

  * **AddDishScreen** → `dispatch({ type: 'SET_SCREEN', payload: 'AddDish' })`
  * **SummaryScreen** → `dispatch({ type: 'SET_SCREEN', payload: 'Summary' })`
* Uses `map()` to loop through dishes and display each item’s name, price, and prep time.

---

### **3. AddDishScreen.js**

**Purpose:**
Allows users to input new dish details and add them to the menu.

**Functionality:**

* Displays form fields for dish name, price, and preparation time.
* On form submission, it dispatches:

  ```js
  dispatch({ type: 'ADD_DISH', payload: newDish });
  ```
* After adding a dish, it can redirect back to the Home or Summary screen.

---

### **4. SummaryScreen.js**

**Purpose:**
Provides an overview of all dishes added to the menu.

**Functionality:**

* Displays total number of dishes and cumulative information (like total prep time or average price, if included).
* Allows navigation back to Home using `dispatch({ type: 'SET_SCREEN', payload: 'Home' })`.
* Used as the final screen for reviewing before saving or exiting.

---

### **5. App.js (Main Controller)**

**Purpose:**
Central hub that connects all screens together using React’s `useReducer` hook.

**Functionality:**

* Holds the main app state:

  ```js
  { currentScreen: 'Splash', dishes: [] }
  ```
* Contains the reducer that updates the screen and dish list.
* Uses a function to render the current screen dynamically based on `state.currentScreen`.


