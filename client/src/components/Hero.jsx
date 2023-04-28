
const Hero = () => {
  return (
    <div className="relative md:h-[80vh] py-[128px] bg-auto bg-no-repeat bg-center md:h-fit" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="mx-auto h-full w-[320px] sm:w-[480px]  md:w-[728px] 2xl:w-[1200px] relative z-10">
                <div className="h-full flex flex-col justify-center gap-2 text-white md:gap-8">
                    <div className="w-20 h-[2px] bg-white mb-2"></div>
                    <h1 className="text-2xl font-black md:w-1/2 sm:text-2xl lg:text-4xl 2xl:text-6xl">Nesto ste skecali i glupi ste da to popravite? Tu je za Vas <span className="text-orange-500">MeinMeister</span></h1>
                    <p className="md:text-lg md:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor</p>
                    <button className="px-4 py-2 bg-transparent border border-white rounded-xl sm:self-start sm:px-8 py-2 sm:hover:scale-105 sm:hover:bg-white sm:hover:text-black sm:duration-300 lg:self-start mt-4 font-black">Pridruzite nam se</button>
                </div>
            </div>
    </div>
  )
}

export default Hero