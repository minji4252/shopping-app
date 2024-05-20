import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductItemPage from "./pages/ProductItemPage";
import PurchasePage from "./pages/PurchasePage";
import CreatePage from "./pages/CreatePage";
import ModifyPage from "./pages/ModifyPage";
import NotfoundPage from "./pages/NotfoundPage";
import Layout from "./components/common/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/product/:productId" element={<ProductItemPage />} />
        <Route path="/purchase/:productId" element={<PurchasePage />} />
        <Route path="/modify/:productId" element={<ModifyPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
