"use client"
import Link from "next/link";
import auth from "@/firebase/firebase.auth";
import { useForm } from 'react-hook-form';
import { FaGithub } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { redirect, useRouter } from 'next/navigation'
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";


const Login = () => {
    const {data: session} = useSession();
    
    const router = useRouter();
    const {register, handleSubmit, reset, formState: { errors }}  = useForm();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if(session?.user){
        return redirect('/');
    }
    const handleLogin = async (data:any, event:any) =>{
        event?.preventDefault();
        const email = data.email;
        const password = data.password;
        const result = await signInWithEmailAndPassword(email, password);
        
        if(result?.user){
            try {
                const res = await signIn("credentials", {
                 email,
                 redirect:true,
                 callbackUrl: '/blog',
                })
                
                if(res?.error){

                 return;
                }
             } catch (error) {
                 
             }
        } 
        // router.push('/')
    }
    const handleGithubLogin = async() =>{
        try {
            const res = await signIn("github")
            if(res?.error){
             console.log(error);
            }
         } catch (error) {
             
         }
    }
    return (
        <div className='flex justify-center my-20'>
                <div className='py-16 w-1/3 max-sm:w-3/4 max-lg:w-2/3'>
                <div className='  p-8 '>
                <div className='pe-2 pt-5'>
                    <button onClick={()=>handleGithubLogin()} className='btn bg-[#4dc2df] px-4 py-2 text-white w-full rounded-full hover:bg-[#64c9e2]' ><span className="inline"><FaGithub/></span> Continue with Github</button>
                </div>
                <div className="relative max-w-md my-5 mx-auto">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 text-sm font-medium tracking-wide text-gray-500 uppercase bg-white">Or</span>
                    </div>
                </div>
                    <form onSubmit={handleSubmit(handleLogin)}> 
                        <div className='space-y-8'>
                            
                            <label className='block'>
                                <p className="pb-2">Email</p>
                                <input {...register('email', {required:true})} className='px-2 py-2 w-full border rounded-xl' type="email"  placeholder='Enter Your Email'  />
                            </label>
                            <label className='block'>
                                <p className="pb-2">Password</p>
                                <input {...register("password", {
                                required: "Please Enter Your Password",
                                minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long!"
                                }})} className='px-2 py-2 w-full border rounded-xl' type="password"placeholder='Enter Password' />
                                {errors.password&& <p className='text-red-500'>Password is not correct</p>} 
                            </label>
                            <button  type="submit" className='btn bg-main px-4 py-2 w-full rounded-full text-center text-white hover:bg-blue-500'>Login</button>
                        </div>
                        
                    </form>
                    <div className='pt-2'>
                        <p>Don&apos;t have an account? <Link href='/signup'>SignUp</Link></p>
                    </div>
                   
                        
                </div>
            </div>
        </div>
    );
};

export default Login;