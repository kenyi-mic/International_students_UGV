import React from 'react'
import {  ArrowUpIcon} from '@heroicons/react/solid'
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
    return (
        <div>
            {/*Arrow button */}
          <div className="bg-transparent">
           <a href="#up"  className="grid grid-cols-1 text-bold place-items-center">
               <  ArrowUpIcon className=" hover:text-yellow-700 h-5 w-5 text-blue-500 p-5"/>
               
           </a>
          </div>

          {/* footer linka */}

          <div className="bg-gray-900 text-white grid grid-flow-row-dense grid-cols-4 border border-l-white w-full m-auto p-10">
          <div>
           <h5 className="font-bold">Learn More</h5>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm ">University of Global Village</a></p>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm ">Campus Experience </a></p>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm ">Tour and Vocations</a></p>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm ">Int'l Student University Site</a></p>
          </div>  
          <div>
           <h5 className="font-bold">Social Links</h5>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm "><FacebookIcon className="hover:text-blue-700"/>FaceBook</a></p>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm "><LinkedInIcon className="hover:text-blue-600"/>LinkedIn</a></p>
           <p><a href="" className="hover:underline hover:text-gray-300 font-sm "><WhatsAppIcon className="hover:text-green-600"/>WhatsAPP</a></p>
          </div> 
          <div>
           <h5 className="font-bold">Important Links</h5>
           <p><a href="https:www.visa.gov.bd" className="hover:underline hover:text-gray-300 font-sm ">Bangladesh Visa Office</a></p>
           <p><a href="http://daraz.com.bd" className="hover:underline hover:text-gray-300 font-sm ">Daraz Shoping</a></p>
           <p><a href="https://foodpanda.com" className="hover:underline hover:text-gray-300 font-sm ">Food Panda</a></p>
          </div> 
          <div>
           <h5 className="font-bold">Get In Touch</h5>
           <p><RoomIcon className="h-5 w-5"/>874/322 C &#38; B Road, Barishal.</p>
           <p><EmailIcon className="h-5 w-5"/>internationstudents@ugv.edu</p>
           <p><PhoneIcon className="h-5 w-5"/>+8810824035899</p>
          </div>
          </div>
          {/*copyright statement */}
          <hr className="text-bold"/>
          <div className="bg-gray-900 box-border">
           <p className="text-center md:pt-4 md:pb-4 text-sm text-white">International Studens | <a href="https://ugv.edu.bd" className="text-yellow-500">UGV</a> &copy; 2021 | Buid by <a href="" className="hover:text-blue-500 ">Hyperdevs</a></p>
          </div>
          <hr/>
          <div className="w-full h-7 bg-black"></div>
          <hr/>
        </div>
    )
}

export default Footer
