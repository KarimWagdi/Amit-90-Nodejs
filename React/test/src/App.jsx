import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Form from "./components/Form.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="Form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
