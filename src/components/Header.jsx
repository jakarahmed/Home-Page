
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";


function Header() {

 


  return (









    
    <header className="bg-white shadow">





      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="../../public/Screenshot_38.png" alt="Logo" className="h-10 w-10" />
          <Link to="/" className="text-xl font-bold text-gray-800">CO LUDZIE<br></br><span className=' font-normal'> POWIEDZĄ</span></Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800  font-bold hover:text-[#7AD9D7]">Strona główna
h</Link>
          <Link to="/kids" className="text-black font-bold flex items-center gap-2 hover:text-[#7AD9D7]">
          Kursy<FaArrowDown />

</Link>
       
          <Link to="/about" className="text-black font-bold flex gap-2 items-center hover:text-[#7AD9D7]">
            O nas <FaArrowDown /></Link>
          <Link to="/recruitment" className="text-gray-800 font-bold hover:text-[#7AD9D7]">Rekrutacja</Link>
          <Link to="/jobs" className="text-gray-800 font-bold hover:text-[#7AD9D7]">Praca</Link>
          <Link to="/blog" className="text-gray-800 font-bold hover:text-[#7AD9D7]">Blog</Link>
        </nav>







<section className='md:hidden lg:hidden'>



  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}><label className="btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label></button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <div className="py-1 text-center " role="none">
            <a href="#" className="block px-4 py-2 text-2xl  text-gray-700 hover:bg-gray-100" role="menuitem">Strona główna</a>
            <a href="#" className=" items-center justify-center px-4  text-2xl py-2  text-gray-700 flex hover:bg-gray-100" role="menuitem">    Kursy<FaArrowDown /></a>
            <a href="#" className="flex items-center justify-center px-4 text-2xl  py-2  text-gray-700 hover:bg-gray-100" role="menuitem">   O nas<FaArrowDown /></a>
            <a href="#" className="block px-4 py-2 text-2xl  text-gray-700 hover:bg-gray-100" role="menuitem">  Rekrutacja</a>
            <a href="#" className="block px-4 py-2 text-2xl  text-gray-700 hover:bg-gray-100" role="menuitem">Praca</a>
            <a href="#" className="block px-4 py-2  text-2xl   text-gray-700 hover:bg-gray-100" role="menuitem">Blog</a>

            

            <hr  className='bg-green-600 mx-auto  w-[70vw]'/>

            <button className=" w-full text-center  bg-teal-500 text-white px-4 py-2 mx-auto flex  justify-center items-center rounded">
            <MdWifiCalling3  />Kontakt i pomoc</button>

          








          </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</section>














       
        <button className="hidden md:block bg-teal-500 text-white px-4 py-2 flex items-center rounded">
        <MdWifiCalling3 />Kontakt i pomoc</button>
      </div>
      <nav className="md:hidden flex justify-between items-center px-6 py-4 bg-white shadow">
      
       
      </nav>




      
    </header>
  );
}

export default Header;
