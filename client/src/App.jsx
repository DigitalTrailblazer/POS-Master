import  React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";
import NotFound from "./components/shared/NotFound";

function App() {

    const location = useLocation()
    const hideHeaderRoutes = ["/auth"]

    return (
       <>
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/menu" element={<Menu />}/>

            <Route path="*" element={<NotFound />} />
            </Routes>
       </>
    );
}

export default App;
