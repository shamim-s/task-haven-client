import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log("from private",user?.email);

    if (loading) {
        return <div>Loading...</div>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;