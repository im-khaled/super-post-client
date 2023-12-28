"use client"
import auth from "@/firebase/firebase.auth";
import { useForm } from 'react-hook-form';
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import { useSession } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation'

const Register = () => {
    const {register, handleSubmit, reset, formState: { errors }}  = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const {data: session} = useSession();
    if(session?.user){
        return redirect('/', )
    }
      
    const handleSignUp = async (data:any) =>{
        const email = data.email;
        const password = data.password;
        const result = await createUserWithEmailAndPassword(email, password);
        console.log(result);
        
        if(result?.user){
            try {
                const res = await fetch('/api/register',{
                    method: "POST",
                    headers:{"content-type": "application/json"},
                    body: JSON.stringify({email})
                })
                if(res.ok){
                    console.log("registered")
                }
            } catch (error) {
                console.log("not registered");
            }
        }
        reset();
        
    }
    return (
        <div className='flex justify-center my-20'>

                <div className='py-16 w-1/3 max-sm:w-3/4 max-lg:w-2/3'>
                <div className='p-8 '>
                    
                    <form onSubmit={handleSubmit(handleSignUp)}> 
                        <div className='space-y-8'>
                            
                            <label className='block'>
                                <p className="pb-2">Email</p>
                                <input {...register('email', {required:true})} className='px-2 py-2 w-full border rounded-xl' type="email"  placeholder='Enter Your Email'  />
                            </label>
                            <label className='block'>
                                <p className="pb-2">Password</p>
                                <input {...register("password", {
                                required: "Please Enter Your Password",
                                minLength:{
                                value: 6,
                                message: "Password must be at least 6 characters long!"
                                }})} className='px-2 py-2 w-full border rounded-xl' type="password"placeholder='Enter Password' />
                                {errors.password&& <p className='text-red-500'>Password is not correct</p>} 
                            </label>
                            <button type="submit" className='btn bg-main px-4 py-2 w-full rounded-full text-center text-white hover:bg-blue-500'>SignUp</button>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;