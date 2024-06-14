import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaArrowDownShortWide } from "react-icons/fa6";

function Footer() {
  return (
<div>
<footer className="footer p-10  bg-[#C7EEEE] text-base-content">
  <nav>

  <footer className="footer footer-center  text-black ">
  <aside>
  <div className="flex items-center space-x-4">
          <img src="../../public/Screenshot_38.png" alt="Logo" className="h-10 w-10" />
          <Link to="/" className="text-xl font-bold text-gray-800">CO LUDZIE<br></br><span className=' font-normal'> POWIEDZĄ</span></Link>
        </div>
    <p className="text-left">
    Krakowskie Przedmieście 21
  <br/>  20-002 Lublin 
    </p> 

  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <CiFacebook />
    <FaInstagram />
    <FaLinkedin />
    <FaArrowDownShortWide />
    <IoLogoYoutube />
x
     
    </div>
  <div className="flex">

<p className="pr-2">Regulamin
</p>
<p className="pl-2 border-l-2 border-slate-950">Polityka prywatności</p>

  </div>
  </nav>
</footer>
  </nav> 
  <nav>
<div className="bg-white p-2 rounded-lg">info@coludziepowiedza.co</div>
<div className="bg-white p-2 rounded-lg">(+48) 531-11-00-11</div>
<div className="bg-white p-2 rounded-lg">(+48) 531-00-11-33</div>
  </nav> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer> 





</div>
  );
}

export default Footer;
