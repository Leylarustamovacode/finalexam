
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import AdminAdd from './pages/admin/AdminAdd';
import Basket from './pages/basket/Basket';
import Detail from './pages/detail/Detail';
import NoPage from './pages/nopage/NoPage';
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="adminadd" element={<AdminAdd />} />
           <Route path="basket" element={<Basket />} />
            <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
