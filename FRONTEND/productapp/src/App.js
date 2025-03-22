import FetchProducts from "./FetchProducts";
import "./output.css"
import { Route, Link, Routes } from "react-router-dom"
import ProductCreationForm from "./ProductCreationForm";

function App() {
  return (
    <div>

      <Link to="/create">Create Product</Link>

      <Routes>
          <Route path="/create" element={<ProductCreationForm />}></Route>
          <Route path="/" element={<FetchProducts/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
