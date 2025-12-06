import axios from 'axios'
import { data } from 'react-router-dom'


const api = axios.create({

    baseURL : import.meta.env.VITE_BACKEND_URL,
    withCredentials : true,
    
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json"
    }
})



// API ENDPOINTS

// login
export const login = (data) => {
    return api.post("/api/user/login", data)
}

// logout
export const logout = () => {
    return api.post("/api/user/logout")
}

// register
export const register = (data) => {
    return api.post("/api/user/register", data)
}

// getUserData
export const getUserData = () => {
    return api.get("/api/user")
}


// add table
export const addTable = (data) => {
    return api.post("/api/table/", data)
}

// getTableData
export const getTables = () => {
    return api.get("/api/table/")
}

// updateTable
export const updateTable = (tableId, tableData) => {
    return api.put(`/api/table/${tableId}`, tableData)
}


// payment endpoints
export const createOrderRazorpay = (data) => {
    return api.post("/api/payment/create-order", data)
}

export const verifyRazorpayPayment = (data) => {
    return api.post("/api/payment/verify-payment", data)
}



// order endpoints
export const addOrder = (data) => {
    return api.post("/api/order", data)
}

// get all orders
export const getAllOrder = () => {
    return api.get("/api/order")
}

// update order
export const updateOrderStatus = ({orderId, orderStatus}) => {
    return api.put(`/api/order/${orderId}`, {orderStatus})
}