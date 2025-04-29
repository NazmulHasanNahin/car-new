import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { AuthContext } from "./Authcontext";
import { useEffect, useState } from "react";




const auth = getAuth(app);





const AuthProvider = (  {children} ) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curentuser => {
            setUser(curentuser);
            console.log("CU: ", curentuser);
            setLoading(false);

        })
        return () => {
            return unsubscribe;
        }
    }, [])


    const authinfo = {
        user, loading, createUser, signInUser,

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;