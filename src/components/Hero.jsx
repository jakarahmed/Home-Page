

const Hero = () => {
    return (
        <div>
    <div className="hero h-auto lg:h-[60vh]  flex justify-center ">
  <div className="hero-content flex-col lg:flex-row justify-center lg:gap-44 ">
    <img src="https://i.ibb.co/vH2b87q/Group-9572-1-1-e1715608098803.png" className="max-w-sm rounded-lg " />
    <div className=" w-[80vw] lg:w-[30vw]">
      <h1 className="text-3xl">Kim jesteśmy?</h1>
      <p className="py-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nobis dolores! Est a laboriosam provident facere voluptate nihil nisi aliquam aliquid? Ea officia eius repellat, voluptatibus sit autem reprehenderit dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qvoluptatum.</p>
  
      <button className="btn btn-accent">Dowiedz się więcej</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Hero;