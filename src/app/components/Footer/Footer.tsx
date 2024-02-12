import Link from "next/link";
import MaxWithWrap from "../MaxWithWrapper/MaxWithWrap";

const Footer = () => {
    return (
        <div>
            <div className=" bg-gray-50 pb-10">
            <hr />
            <MaxWithWrap>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20 relative">
                  <div>
                    <h2 className="text-lg font-semibold pb-2">Product</h2>
                     <ul className="leading-8">
                        <li className="hover:text-main"><Link href="">LinkedIn Post Ideas</Link></li>
                        <li className="hover:text-main"><Link href="">LinkedIn Post Generator</Link></li>
                        <li className="hover:text-main"><Link href="">LinkedIn Carousel Maker</Link></li>
                        <li className="hover:text-main"><Link href="">LinkedIn Post Scheduling</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold pb-2">Company</h2>
                     <ul className="leading-8">
                        <li className="hover:text-main"><Link href="">Team</Link></li>
                        <li className="hover:text-main"><Link href="">Roadmap</Link></li>
                        <li className="hover:text-main"><Link href="">Privacy Policy</Link></li>
                        <li className="hover:text-main"><Link href="">Trams of Service</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold pb-2">Resources</h2>
                     <ul className="leading-8">
                        <li className="hover:text-main"><Link href="">For Agency</Link></li>
                        <li className="hover:text-main"><Link href="">Our Wall Of Love</Link></li>
                        <li className="hover:text-main"><Link href="">ChatGPT vs Superpost</Link></li>
                        <li className="hover:text-main"><Link href="">Post Preview & Styling</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold pb-2">Keep in touch</h2>
                     <ul className="leading-8">
                        <li className="hover:text-main"><Link href="">Whatsapp</Link></li>
                        <li className="hover:text-main"><Link href="">LinkedIn</Link></li>
                        <li className="hover:text-main"><Link href="">Twitter</Link></li>
                        <li className="hover:text-main"><Link href="">Email</Link></li>
                    </ul>
                  </div>
              </div>
              <hr />
              <div className="py-5 text-center">
                    <p className="font-semibold text-sm">Copyright © 2023 Superpost. All rights reserved.</p>
                    <p className="py-2 text-gray-700 text-sm">Disclaimer: Superpost is an independent entity and is not endorsed by or affiliated with the LinkedIn Corporation, which is registered in the U.S. and other countries. LinkedIn is a trademark owned by the LinkedIn Corporation. Additionally, please note that Superpost is a mock website created for practice purposes.</p>
              </div>
            </MaxWithWrap>   
    </div>
        </div>
    );
};

export default Footer;