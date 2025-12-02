import { useEffect, useState } from "react"
import { getUserData } from "../https"
import { useDispatch } from "react-redux"
import { removeUser, setUser } from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"


const useLoadData = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
  
    useEffect(() => {

        const fetchUser = async () => {
            try {
                // data via endpooint
                const res = await getUserData()
                const data = res.data.data
                // console.log(data.name)

                dispatch(setUser({
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    role: data.role
                }))
            } 
            catch (error) {
                dispatch(removeUser())
                setTimeout(() => {

                    navigate("/auth")
                }, 500)

                console.log(error)    
            }
            finally{
                setLoading(false)
            }
        }

        // fetch user on every reload
        fetchUser()
    }, [dispatch, navigate])

    return loading
}

export default useLoadData
