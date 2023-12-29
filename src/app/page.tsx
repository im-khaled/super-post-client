import Image from "next/image";
import productImg from "../../public/product.webp"
import styles from "./body.module.css"
import MaxWithWrap from "./components/MaxWithWrapper/MaxWithWrap"
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";



export default function Home() {
  
  return (
    
   <div>
    <Navbar></Navbar>
    {/* Hero section started */}
    <MaxWithWrap>
      <div className={`${styles.bacroungPattern} text-center`}>
        <div className="flex flex-col justify-center items-center pt-20 p-5">
          <h1 className="text-6xl font-bold w-4/5 text-center p-5">The only LinkedIn content creation tool you’ll ever need</h1>
          <p className="text-xl w-3/6 text-center text-gray-600 py-5">Generate content ideas, high-quality LinkedIn posts, make eye-catching carousels, format for readability, and schedule easily—all in one place!</p> 
          <button className="p-4 mt-5 bg-main text-white font-semibold rounded-full inline-flex">Get started for free <span className="inline-flex text-2xl ms-2 px-px bg-gray-50 rounded-full text-main"><HiArrowNarrowRight/></span></button>
        </div>
      </div>
      
    </MaxWithWrap>
    {/* Reviews section started */}
    <div className={`${styles.review}  h-20  `}>
          <div className={`${styles.dashboard} flex justify-center max-md:-bottom-32 mb-10`}>
              <Image className="w-5/6 shadow-md" src={productImg} alt="product demo"></Image>
          </div>
    </div>
    <div className="text-center  bg-gray-50 mx-8 py-10">
            <h2 className="mt-10 text-4xl font-bold ">Loved by Professionals</h2>
            <MaxWithWrap>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 text-xl relative">
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>I love Superpost. The carousel feature is awesome. Life is so much easier! The customer service is outstanding. So personable. Thanks, guys.</p>
                    <div className="mt-10 pt-5 flex justify-start absolute max-lg:static bottom-8">
                        <img src="/user/ant.jpg" className="w-12 h-12 rounded-full" alt="user" />
                        <div className="ps-4">
                            <p>John Lohmer</p>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>I love Superpost, it is by far my favorite LinkedIn app! The templates are super helpful, and the AI works great. With Supergrow, I save at least 4 hours per week.</p>
                    <div className="mt-10  pt-5 flex justify-start ">
                        <img src="/user/emonji.png" className="w-12 h-12 rounded-full" alt="user" />
                        <div className="ps-4">
                            <p>Fabio Piterson</p>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>My experience with Superpost has been amazing, I love the app and it is super polished. If you do Linkined business then it's a Green light!</p>
                    <div className="mt-10 pt-5 flex justify-start absolute max-lg:static bottom-8">
                        <img src="/user/projapoti.jpg" className="w-12 h-12 rounded-full" alt="user" />
                        <div className="ps-4">
                            <p>Max Miller</p>
                            <p className="text-gray-500 text-sm">CEO</p>
                        </div>
                    </div>
                  </div>
              </div>
              
            </MaxWithWrap>   
    </div>
    {/* post section */}
    <section className="bg-gray-50">
        <MaxWithWrap>
        <div className="post my-20 text-left">
                        <h1 className="text-5xl font-bold py-8  ">LinkedIn posts on autopilot</h1>
                        <p className="text-xl leading-8">Experience the convenience of automated post-generation. Share your topic and role, and receive expertly tailored posts every week. Effortless content creation made possible!</p>
                        <ul className="text-xl py-5 leading-10">
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Share your details</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Receive fresh and high-quality posts without lifting a finger.</li>
                        </ul>
                        <button className="p-4 mt-5 mb-10 hover:bg-main hover:text-white text-main border border-main font-semibold rounded-full inline-flex">Get started for free </button>
                  </div>
        </MaxWithWrap>
    </section>
    {/* keyword sliding section started */}
    <h1 className="text-center text-4xl py-5 mt-32 font-bold">Everything else you need</h1>
    <div className="slide mt-10  overflow-x-hidden">
      <div className={`${styles.sliding} p-0 whitespace-nowrap `}>
          <ul className=" inline-block whitespace-nowrap  text-xl font-semibold ">
            <div className="flex flex-row gap-5">
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Post formatting</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Seamless scheduling</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>linkedIn carousel</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Add emoji</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Post for you</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Video, photos, gif</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full">Content inspiration</li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Video, photos, gif</p></li>
            </div>
          </ul>
          <ul className=" inline-block whitespace-nowrap  text-xl font-semibold">
            <div className="flex flex-row gap-5">
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full ms-5"><p>Post formatting</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Seamless scheduling</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>linkedIn carousel</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Add emoji</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Post for you</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Video, photos, gif</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full">Content inspiration</li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Video, photos, gif</p></li>
            </div>
          </ul>
      </div>
    </div>
    <div className="slide mb-10 mt-7 overflow-x-hidden ">
      <div className={`${styles.slidingReverse} p-0 whitespace-nowrap `}>
          <ul className=" inline-block whitespace-nowrap  text-xl font-semibold ">
            <div className="flex flex-row gap-5 whitespace-nowrap">
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full ms-5"><p>Post score</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Calendar view</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Bold & italic</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Auto comments</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Save as draft</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Ideas generation</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full">Content inspiration</li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Best carousel</p></li>
            </div>
          </ul>
          <ul className=" inline-block whitespace-nowrap  text-xl font-semibold">
            <div className="flex flex-row gap-5 whitespace-nowrap">
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full ms-5"><p>Post score</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Calendar view</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Bold & italic</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Auto comments</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Save as draft</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Ideas generation</p></li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full">Content inspiration</li>
                <li className="bg-[#f5f4f4] px-5 py-3 rounded-full"><p>Best carousel</p></li>
            </div>
          </ul>
      </div>
    </div>
    <section className="mt-28">
      <div className={`${styles.grow}  mt-32 `}>
      <div className={` text-center`}>
        <div className="flex flex-col justify-center items-center pt-20 p-5">
          <h1 className="text-6xl max-sm:text-5xl font-bold w-full text-center p-5">Grow on LinkedIn with Superpost</h1>
          <p className="text-xl w-5/6 text-center text-gray-600 py-5">Grow your personal brand on LinkedIn the simple, powerful, and affordable way with Superpost. Hundreds of professionals and agencies trust Superpost to save them time and help them grow their audience.</p> 
          <button className="p-4 mt-5 bg-main text-white font-semibold rounded-full inline-flex">Get started for free <span className="inline-flex text-2xl ms-2 px-px bg-gray-50 rounded-full text-main"><HiArrowNarrowRight/></span></button> 
          <ul className="text-sm pt-5 pb-16 leading-10 max-sm:block flex justify-center">
             <li><span className="inline-block text-main"><IoMdCheckmark/></span> No credit card required</li>
            <li><span className="inline-block ms-5 text-main"><IoMdCheckmark/></span> 7-day free trial</li>
          </ul>
        </div>
      </div>
      </div>
      
    </section>
    <Footer></Footer>
  </div>
  )
}
