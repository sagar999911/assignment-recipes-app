import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { Recipes } from "./pages/Recipes";

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />*/}
      <Route path="/" element={<Recipes />} />
      <Route path="/:id" element={<Recipe />} />
    </Routes>
  );
}
