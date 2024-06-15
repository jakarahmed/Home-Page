import { HiMiniArrowDownRight } from "react-icons/hi2";

import { IoIosContacts } from "react-icons/io";
import Upmap from "./Upmap";
import { PiBagSimpleFill } from "react-icons/pi";
import Map from "./Map";

import { MdWavingHand } from "react-icons/md";
import Hero from "./Hero";
import Mouse from "./Mouse";
import Count from "./Count";
import Bar from "./Bar";
import { IoArrowForward } from "react-icons/io5";
const Home = () => {

    return (




        <div>




            {/* first section */}
<section className="z-10" >



<div className="hero h-[70vh] p-10 w-full "  style={{backgroundImage: 'url(./public/banner1.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold "> Zapisy otwarte!</h1>

      

      <p className="mb-5">Semestr wiosenny 2023/2024</p>
      <button className="btn ">
      Zapisz się teraz
  <HiMiniArrowDownRight />
 
</button>
    </div>
  
  </div>

  
</div>










</section>



{/* 2nd section */}


<section className=" w-full h-[100%] bg-white ">



  <div className="hero sm:h-auto lg:h-[100vh] relative opacity-95  " style={{backgroundImage: 'url(https://i.ibb.co/41qRbxn/Group-9462.png)', height:"",}}>





  <div className="">






{/* // ghgsdhfhhdsghhfvhsdfvvgfsdghfvh */}











<div className="flex justify-center ">
  
  
<div className="sm:grid space-y-4 sm:flex-wrap-reverse grid-cols-1 gap-7 absolute sm:right-0-20 -top-10 lg:grid-cols-3 lg:gap-20 justify-center ml-0 p-0">


  






<div  className="bg-white p-6 sm:w-full lg:-[25vw] shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110   font-bold  rounded">
  <h3 className="text-4xl text-[#00BBA6] "><MdWavingHand /></h3>
 <div className="flex justify-between">
 <p className=""><span className="font-bold">Kursy angielskiego</span><br></br>
 dla dorosłych</p>

 <IoArrowForward />

 </div>
 

</div>
<div  className="bg-white p-6 sm:w-full lg:w-[25vw] shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110  py-5 font-bold  px-4 rounded">
  <h3 className="text-4xl text-[#00BBA6]"><IoIosContacts /></h3>
  <div className="flex justify-between">
 <p className=""><span className="font-bold">Kursy angielskiego</span><br></br>
 dla dorosłych</p>

 <IoArrowForward />

 </div>
</div>
<div  className="bg-white sm:w-full lg:w-[25vw] shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110   font-bold py-2 px-4 rounded">
  <h3 className="text-4xl text-[#00BBA6]"><PiBagSimpleFill /></h3>
  <div className="flex justify-between">
 <p className=""><span className="font-bold">Kursy angielskiego</span><br></br>
 dla dorosłych</p>

 <IoArrowForward />

 </div>
</div>



</div>
</div>


   </div>


{/* #3333############ */}

<Bar></Bar>





  

</div>




      <div>
            <div className="my-10 bg-black ">
           <div className="w-full h-[70vh]  bg-[url('https://i.ibb.co/1rcvrSB/9986cbd059152f1914932140504efa4f.jpg')] justify-center items-center bg-fixed bg-no-repeat">



           </div>
       </div>
       </div>


</section>












            {/* End */}
      




            <Count></Count>
            <Mouse></Mouse>
            <Hero></Hero>
          
            <Upmap/>
          
            <Map/>
      
        </div>
    );
};

export default Home;