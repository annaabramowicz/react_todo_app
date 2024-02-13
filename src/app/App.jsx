import "reset.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/recipes/recipes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "components/Buttons/Button/Button";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Fridge from "./pages/Fridge/Fridge";
import Spinner from "components/Spinner/Spinner";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);

  return (
    <div >
      <Router>
        <nav>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/ingredients">Ingredients</Link>
          </Button>
          <Button>
            <Link to="/fridge">Fridge</Link>
          </Button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/fridge" element={<Fridge />} />
        </Routes>
        <Spinner />
      </Router>
    </div>
  );
}

export default App;
