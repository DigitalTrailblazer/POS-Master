import  React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";
import NotFound from "./components/shared/NotFound";
import useLoadData from "./hooks/useLoadData";
import Loader from "./components/shared/Loader";
import { useSelector } from "react-redux";


function ProtectedRoute({ children }){

    const isAuth = useSelector(state => state.user.isAuth)
    if(!isAuth){
        return <Navigate to="/auth" replace />
    }

    return children
}


function App() {

    const location = useLocation()
    const isAuth = useSelector(state => state.user.isAuth)
    const loading = useLoadData()
    
    if(loading){
        return <Loader />
    }
    
    const hideHeaderRoutes = ["/auth"]

    return (
       <>
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        
            <Routes>
            <Route path="/" element={<Home />} />

            <Route 
                path="/auth" 
                element={isAuth ? <Navigate to="/" replace/> : <Auth />}
            />

            <Route
                path="/orders"
                element={
                    <ProtectedRoute>
                        <Orders />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/tables"
                element={
                    <ProtectedRoute>
                        <Tables />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/menu" 
                element={
                    <ProtectedRoute>
                        <Menu />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />
            </Routes>
       </>
    )
}

export default App;
