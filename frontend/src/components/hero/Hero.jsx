// Hero.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
// import hi from '../../assets/hi.png'; // Eliminar esta línea
import robot1 from '../../assets/robot1.png';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
      <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-green-800 
        via-green-500 to-lime-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(50, 205, 50, 0.7)]'>
      </div>
      <Navbar /> 
      <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
            mb-16 md:mb-0 items-center text-center relative'>
            {/* Eliminar la línea de la imagen hi */}
            <h1 className='title-font sm:text-8xl text-8xl mb-4 font-bold text-white ml-40'>CyberAmigo</h1> {/* Mover más a la derecha */}
            <p className='mb-8 leading-relaxed text-3xl ml-40'>Tu compañero seguro en el mundo digital.</p> {/* Mover más a la derecha */}
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6 
                focus:outline-none hover:bg-green-600 hover:shadow-[0_0_40px_rgb(50,205,50,0.7)]
                rounded-full text-lg ml-40'> {/* Mover más a la derecha */}
                Descargar
              </button>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img src={robot1} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
          </div>
        </div>
      </section>
    </div>
  );
}
