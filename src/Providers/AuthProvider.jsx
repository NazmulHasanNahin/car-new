// import { getAuth } from "firebase/auth";
// import app from "../Firebase/firebase.config";
// import { AuthContext } from "./Authcontext";
// import { useEffect, useState } from "react";




// const auth = getAuth(app);





const AuthProvider = () => {

    // const [user,setUser] = useState(null);

    // const [loading , setLoading]  = useState(true)


    const authinfo = {
        // user,loading

    }
    return (
        <AuthContext.Provider value={authinfo}>
           
        </AuthContext.Provider>
    );
};

export default AuthProvider;