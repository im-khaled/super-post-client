"use client"

import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";

const userlog: object[] = []
const UserReturn = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading){
        console.log('loading');
    }
    if(user){
        userlog.push(user)
     return user

    }
    console.log(userlog);
    return (
        <div>
            
        </div>
    );
};

export default UserReturn;