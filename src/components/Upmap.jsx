

const Upmap = () => {
    return (
        <div>
            <div className="hero h-auto lg:h-[40vh] bg-[#1F2F2F]">
  <div className="hero-content flex-col lg:flex-row">

    <div>
        <img src="https://i.ibb.co/GPzphLk/02-Groovy-neon-text-effect-kopia-1-1-1.png" alt="" />
    </div>
    <div className="text-center leading-1 text-white lg:text-left lg:pb-14 ">
      <h1 className="text-3xl font-bold">Newsletter</h1>
      <p className="py-6">

Bądź na bieżąco z naszymi newsami i promocjami.</p>
    </div>


    <div className="card shrink-0 w-[50vw] flex">
      <form className="">
        <div className=" lg:flex pr-20 gap-4">
         
          <input type="email" placeholder="
Imię*" className="bg-[#1F2F2F] border-solid border-[#4F5A5A] border-2 p-1  sm:w-[40vh] lg:w-[40%] rounded-md" required />
 <input type="password" placeholder="Twój adres e-mail*
" className="bg-[#1F2F2F] border-solid border-[#4F5A5A] border-2 sm:w-[40vh] lg:w-[70%] p-1 rounded-md" required />
        </div>

       

        <div><div className="form-control">

<p className="text-white text-xs pt-6">       <input type="checkbox" defaultChecked className="checkbox checkbox-info" /> Zgadzam się na przetwarzanie moich danych osobowych przez firmę CLP Sp. z o.o. z siedzibą w Lublinie, ul. Przy Stawie 4/38, w celu realizacji usługi newsletter, a tym samym wysyłania mi informacji o webinarach, kursach i nowościach w Co Ludzie Powiedzą zgodnie z Polityką Prywatności. Rozumiem, że zgodę tę mogę w każdej chwili cofnąć.</p>
    </div>
    
    <div className="flex justify-center lg:justify-end">
    <button className="btn btn-accent  p-2 text-sm mt-4">Zapisz się</button>
    </div>
    </div>


      </form>
    </div>
    
  </div>
  
</div>
            
        </div>
    );
};

export default Upmap;