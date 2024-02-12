import Image from "next/image";
import productImg from "../../public/product.webp"
import styles from "./body.module.css"
import MaxWithWrap from "./components/MaxWithWrapper/MaxWithWrap"
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Link from "next/link";
import carouselimg from "../../public/carousel/carousel.png"



export default function Home() {
  
  return (
    
   <div className="relative">
    <Navbar></Navbar>
    {/* Hero section started */}
    
      <div className={`${styles.bacroungPattern} text-center`}>
      <MaxWithWrap>
        <div className="flex flex-col justify-center items-center pt-24 p-5">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl sm:font-semibold font-bold w-4/5 text-center p-5">Discover the ultimate LinkedIn content creation solution</h1>
          <p className="text-xl w-3/6 text-center text-gray-600 py-5">Effortlessly generate content ideas, craft polished LinkedIn posts, create captivating carousels, ensure readability with seamless formatting, and schedule with simplicity—all within a single platform!</p> 
          <Link href='/login'><button className="p-4 mt-5 bg-main text-white font-semibold rounded-full inline-flex">Get started for free <span className="inline-flex text-2xl ms-2 px-px bg-gray-50 rounded-full text-main"><HiArrowNarrowRight/></span></button></Link>
        </div>
        </MaxWithWrap>
      </div>
    {/* Reviews section started */}
    <div className={`${styles.review}  h-20 max-md:hidden`}>
          <div className={`${styles.dashboard} flex justify-center max-md:-bottom-32 mb-10`}>
              <Image className="w-5/6 shadow-md" src={productImg} alt="product demo"></Image>
          </div>
    </div>
    <div id="review" className="text-center  bg-gray-50 mx-8 py-10">
            <h2 className="mt-10 text-4xl font-bold ">Loved by Professionals</h2>
            <MaxWithWrap>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 text-xl relative">
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>I&apos;m thrilled with Superpost! The carousel feature is fantastic, making my life so much easier. The customer service is outstanding—so personable. Big thanks to the team!</p>
                    <div className="mt-10 pt-5 flex justify-start absolute max-lg:static bottom-8">
                        <img src="/user/ant.jpg" className="w-12 h-12 rounded-full" alt="user" />
                        <div className="ps-4">
                            <p>John Lohmer</p>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>Superpost has become my absolute favorite LinkedIn app! The templates are incredibly helpful, and the AI functionality works like a charm. Thanks to Superpost.</p>
                    <div className="mt-10  pt-5 flex justify-start ">
                        <img src="/user/emonji.png" className="w-12 h-12 rounded-full" alt="user" />
                        <div className="ps-4">
                            <p>Fabio Piterson</p>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-md rounded-xl text-left">
                    <p>I&apos;ve had an amazing experience with Superpost! The app is impeccably polished, and I absolutely love it. If you&apos;re into LinkedIn business, it&apos;s a definite green light!</p>
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
    {/* Price Section */}
    <section className="bg-gray-50" id="price">
        <MaxWithWrap>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 my-20">
            <div className="post text-left">
                        <h1 className="text-4xl font-bold py-8  ">Starter</h1>
                        <h2 className="text-2xl font-semibold">Free</h2>
                        <ul className="text-xl py-5 leading-10">
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> 5K AI words per month</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Posts Generated for You</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Content Inspiration </li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Generate Ideas</li>
                          <li><span className="inline-block text-red-500"><RxCross2/></span> Post Formatting </li>
                          <li><span className="inline-block text-red-500"><RxCross2/></span> Post Styling (Bold & Italic)</li>
                          <li><span className="inline-block text-red-500"><RxCross2/></span> Post Preview</li>
                          <li><span className="inline-block text-red-500"><RxCross2/></span> Scheduling</li>
                        </ul>
                        <Link href='/login'><button className="p-4 mt-5 mb-10 hover:bg-main hover:text-white text-main border border-main font-semibold rounded-full inline-flex">Get started for free </button></Link>
            </div>
            <div className="post text-left">
                        <h1 className="text-4xl font-bold py-8  ">Basic</h1>
                        <h2 className="text-2xl font-semibold">$10<span className="text-sm font-normal">/Month</span></h2>
                        <ul className="text-xl py-5 leading-10">
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> 50K AI words per month</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Posts Generated for You</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Content Inspiration </li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Generate Ideas</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Post Formatting </li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Post Styling (Bold & Italic)</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Post Preview</li>
                          <li><span className="inline-block text-main"><IoMdCheckmark/></span> Scheduling</li>
                        </ul>
                        <Link href='/login'><button className="p-4 mt-5 mb-10 hover:bg-main hover:text-white text-main border border-main font-semibold rounded-full inline-flex">Get started for free </button></Link>
            </div>
        </div>
        </MaxWithWrap>
    </section>
    {/* post section */}
    <section  className="bg-gray-50">
        <MaxWithWrap>
        <div id="post" className="post my-20 text-left">
                  <h1 className="text-5xl font-bold py-8  ">LinkedIn posts on autopilot</h1>
                  <p className="text-xl leading-8">Explore the convenience of automatic post generation. Just provide your topic and role, and receive expertly crafted posts each week. Effortless content creation at your fingertips!</p>
                  <ul className="text-xl py-5 leading-10">
                    <li><span className="inline-block text-main"><IoMdCheckmark/></span> Share your details</li>
                    <li><span className="inline-block text-main"><IoMdCheckmark/></span> Get fresh and high-quality posts effortlessly, no effort required.</li>
                  </ul>
                  
                 <Link href='/login'> <button className="p-4 mt-5 mb-10 hover:bg-main hover:text-white text-main border border-main font-semibold rounded-full inline-flex">Get started for free </button></Link>
          </div>
        </MaxWithWrap>
    </section>
    {/* carousel section started */}
    <section  id="carousel" className="bg-gray-50 ">
        <MaxWithWrap>
        <div id="post" className="post my-20 text-left">
                  <h1 className="text-5xl font-bold py-8  ">Carousel Maker</h1>
                  <p className="text-xl leading-8">Discover the effortless convenience of automated post-generation. Simply share your topic and role, and receive expertly tailored posts every week. Effortless content creation made possible!</p>
                  <ul className="text-xl py-5 leading-10">
                    <li><span className="inline-block text-main"><IoMdCheckmark/></span> Share your details</li>
                    <li><span className="inline-block text-main"><IoMdCheckmark/></span> Receive fresh and high-quality slides effortlessly</li>
                  </ul>
                  <Image src={carouselimg} alt="Carousel Image" />
                 <Link href='/login'> <button className="p-4 mt-5 mb-10 hover:bg-main hover:text-white text-main border border-main font-semibold rounded-full inline-flex">Get started for free </button></Link>
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
          <p className="text-xl w-5/6 text-center text-gray-600 py-5">Transform your personal brand on LinkedIn effortlessly, effectively, and affordably with Superpost. Trusted by hundreds of professionals and agencies, Superpost saves time and amplifies audience growth.</p> 
          <Link href='/login'><button className="p-4 mt-5 bg-main text-white font-semibold rounded-full inline-flex">Get started for free <span className="inline-flex text-2xl ms-2 px-px bg-gray-50 rounded-full text-main"><HiArrowNarrowRight/></span></button> </Link>
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
