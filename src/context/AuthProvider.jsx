import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserInfo } from '../utils/eventService';


const AuthContext = createContext();

const { Provider } = AuthContext;
// used to store global state and provide it to its children, it wraps the whole aplication (in routes)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    console.log(user)
    useEffect(() => {
        const fetchUserData = async () => {
            if(user === null){
                setLoading(true);
                const { data } = await getUserInfo();

                if(data?.success){
                    const currentUser = data.data;
                    setUser(currentUser);   
                }
                else{
                    setUser(null);
                }
                setLoading(false)
            }
        }
        fetchUserData();
    }, [user])

    return ( // !!user means that user is not null and not undefiend 
        <Provider value={{isLoading: loading, isAdmin: user?.role === 'admin', isLoggedIn: !!user, user, setUser}}>
            {children}
        </Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;