import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MealPlannerPage from './pages/MealPlannerPage';

// Components
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/sign-in" element={<Layout hideNav><SignInPage /></Layout>} />
        <Route path="/sign-up" element={<Layout hideNav><SignUpPage /></Layout>} />
        <Route path="/meal-planner" element={<Layout><MealPlannerPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;