import { useContext } from "react";
import { AuthContext } from "../Providers/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user,loading  } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <progress className="progress w-56"></progress>
            </div>
        );
    }
    

    if (user?.email)
    {
        return children
    }



    return (
        <Navigate to="/login" replace ></Navigate>
    );
};

export default PrivateRoutes;