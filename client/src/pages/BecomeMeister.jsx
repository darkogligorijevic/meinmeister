import React from 'react'

const BecomeMeister = () => {
  return (
    <div className="flex flex-col justify-center relative h-screen py-[128px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499815022134-5a333f5a299c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80')" }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="flex justify-center absolute right-0 left-0 mx-auto w-[320px] sm:w-[480px] md:w-[728px] 2xl:w-[1200px]">
      <div className='flex flex-col gap-8 rounded-3xl w-full sm:w-2/3 md:w-1/2 2xl:w-1/3 bg-orange-500 px-8 py-16'>
        <div className='flex flex-col justify-center gap-4'>
          <h1 className='text-white text-4xl font-black text-center'>Postanite Majstor</h1>
        </div>
        <form className='flex flex-col gap-4'>
          <input className='px-8 py-2 rounded-xl outline-none' name='title' type='text' placeholder='Naslov' />
          <textarea className='px-8 py-2 rounded-xl outline-none' name='description' placeholder='Deskripcija' />
          <input className='px-8 py-2 rounded-xl outline-none' name='phone' type='phone' placeholder='Broj telefona' />
          <select className='px-8 py-2 rounded-xl outline-none'>
            <option className='px-8 py-2' value="moler">Moler</option>
            <option className='px-8 py-2' value="elektricar">Električar</option>
            <option className='px-8 py-2' value="kucni majstor">Kućni majstor</option>
            <option className='px-8 py-2' value="montazer">Montažer</option>
          </select>
          <button className="text-white px-4 py-2 bg-transparent border border-white hover:border-white rounded-xl sm:px-8 sm:hover:scale-105 sm:hover:bg-white sm:hover:text-black sm:duration-300 mt-4 font-black">Postanite majstor</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BecomeMeister