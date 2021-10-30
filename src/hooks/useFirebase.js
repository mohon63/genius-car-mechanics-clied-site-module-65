import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(resutl => {
                setUser(resutl.user)
            })
            .finally(() => setIsLoding(user));
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoding(user));


    }

    return {
        user,
        isLoding,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;