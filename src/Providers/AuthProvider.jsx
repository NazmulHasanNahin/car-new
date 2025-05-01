import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { AuthContext } from "./Authcontext";
import { useEffect, useState } from "react";




const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = (  {children} ) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)
    //google
    const creategoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // logout 
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

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
        user, loading, createUser, signInUser,creategoogleUser,logout,

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;