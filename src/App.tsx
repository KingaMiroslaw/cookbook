import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MealDetailsPage from "./pages/MealDetailsPage/MealDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="meal-details/:id" element={<MealDetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
