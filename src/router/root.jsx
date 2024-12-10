import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../components/NonFound";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import AllProducts from "../components/AllProducts";
import IslikesPage from "../pages/IslikesPage";
import IsBuysPage from "../pages/IsBuysPage";

export default function Root() {
  return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" elemen={<Blog/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/isLikes" element={<IslikesPage/>}/>
    <Route path="/isBuys" element={<IsBuysPage/>}/>
    <Route path="/all/:category/:id" element={<AllProducts/>}/>
    <Route path="*" element={<NotFound/>}/>
</Routes>
  )
}
