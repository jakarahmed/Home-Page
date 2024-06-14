
import { FaHandsClapping } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoMdContacts } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Mouse = () => {




    return (


      
   <div  >
<div>

<h2 className="text-center text-3xl py-8">Mówią o nas</h2>

<div className=" flex justify-center gap-10 my-11">

  <img src="https://i.ibb.co/YkzYYS6/image-3.png
" alt="" />
  <img src="https://i.ibb.co/jT9Ygf9/image-6.png" alt="" />
  <img src="https://i.ibb.co/8gRhX8C/image-7.png" alt="" />
  <img src="https://i.ibb.co/P4k5c3F/image-8.png" alt="" />
  <img src="https://i.ibb.co/Drx3g7Z/image-9.png" alt="" />
  <img src="https://i.ibb.co/RyMwYNZ/image-10.png" alt="" />
  <img src="https://i.ibb.co/FwbPDGZ/image-11.png" alt="" />
  
  


</div>

</div>





{/* ..............End........... */}
<div className='bg-[#EDF8F8] lg:py-20 '>




<h2 className="text-center text-3xl pb-8">Znajdź kurs dla siebie</h2>

<div className='flex justify-center gap-6 mx-14 '>


  

<div className="card w-[30vw] h-[40vh] bg-base-100 shadow-xl image-full">
  <figure><img src="   https://i.ibb.co/txFnSZK/4-J3-A2830-1.png" className='w-[30vw] h-[40vh]' alt="Shoes" /></figure>
  <div className="card-body lg:mt-20">
  <IoMdContacts className="text-[#00BBA6] w-10 h-10"/>
    <p>Kursy angielskiego<br></br>
    dla dorosłych</p>
 
  </div>
</div>
<div className="card w-[30vw] h-[40vh] bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/YRJdMZ8/image-14.png" alt="Shoes" /></figure>
  <div className="card-body lg:mt-20">
  < FaHandsClapping className="text-[#00BBA6] w-10 h-10"/>
    <p>Rsy angielskiego<br></br>
    dla dorosłych</p>
 
  </div>
</div>
<div className="card w-[30vw] h-[40vh] bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/zbWqHfV/image-23.png" alt="Shoes" /></figure>
  <div className="card-body lg:mt-20">
  <PiBagSimpleFill className="text-[#00BBA6] w-10 h-10"/>
    <p> Angielskiego<br></br>
    dla dorosłych</p>
 
  </div>
</div>
</div>





{/* ...........end........ */}



          <h2 className="text-center text-3xl py-8">Opinie naszych uczniów</h2>
        <div className='h-auto w-[80vw] flex justify-center text-center m-auto py-10 lg:pb-10   '>

<Swiper
        
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      





      <SwiperSlide className='rounded-lg'><div >
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Jakarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
        <SwiperSlide  className='rounded-lg'><div>
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Yatarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
        <SwiperSlide  className='rounded-lg'><div>
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Jakarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
        <SwiperSlide  className='rounded-lg'><div>
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Yatarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
        <SwiperSlide  className='rounded-lg'><div>
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Jakarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
        <SwiperSlide  className='rounded-lg'><div>
        <p className="text-[#7CD9D7]">★★★★★</p>
        <h2>Yatarzyna | 30 lat</h2>
        <p className="text-xs p-1">Webinar Angielski na Skróty całkowicie zmienił moje podejście do nauki języka. Metody, które poznałam, są nie tylko skuteczne, ale też niesamowicie przyjemne. Teraz codziennie uczę się angielskiego, nawet nie zdając sobie z tego sprawy!</p>
        </div></SwiperSlide>
   
      </Swiper>
      </div>

        <h2 className='text-center text-3xl font-bold mb-10'> Wiedza za free</h2>
          <div className='flex justify-center'>
            <img src="https://i.ibb.co/bW5Dzgg/mouse.png" alt="" />
            
        </div>
      </div>
   </div>
    );
};

export default Mouse;











