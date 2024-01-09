"use client"
import auth from "@/firebase/firebase.auth";
import { useSession, signOut } from "next-auth/react"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut as signoutFirebase } from 'firebase/auth';

const LoginBtn = () => {
    const [user, loading, error] = useAuthState(auth);
    
    const { data: session } = useSession();
    
    const email = session?.user;
    // console.log(session);
    const signOutHandle=() =>{
      signOut();
      signoutFirebase(auth);
    }
  if (session || user) {
    return (
      <>
        <Link href='/app'><button className="ms-5 px-4 py-1 border rounded-full hover:text-main border-main">App</button> <br /></Link>
        <button className="ms-5 px-4 py-1 border rounded-full hover:text-main border-main" onClick={() => signOutHandle()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Link href='/login'><button className="ms-5 px-4 py-1 border rounded-full hover:text-main border-main" >Login</button></Link>
    </>
  )

};

export default LoginBtn;