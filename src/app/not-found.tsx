import Link from 'next/link'
import { LiaSadTear } from "react-icons/lia";
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center mt-24 text-4xl '>
      <div className='space-y-10'>
            <h2>Not Found <span className=' inline-block'><LiaSadTear /></span></h2>
            <p>Could not find requested resource</p>
            <p>Return<Link  href="/"> <button className='px-4 py-2 text-white bg-main hover:bg-blue-500 rounded-full'>Home</button></Link></p>
      </div>
    </div>
  )
}