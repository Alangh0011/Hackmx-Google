// Experience.jsx
import React from 'react';
import chatbot2 from '../../assets/chatbot2.jpg';

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
      <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
        {/* Cambiar el degradado de fondo a verde */}
        <div className='h-96 w-96 bg-gradient-to-br from-green-400 to-green-800 blur-2xl invisible opacity-40 rounded-full'></div>
        <div className='h-96 w-96 bg-gradient-to-r from-green-300 to-green-600 opacity-40 blur-2xl rounded-full'></div>
      </div>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
          <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-green-500 to-green-700 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(0,225,0,0.7)] z-0'></div>
          <img src={chatbot2} className='object-cover md:w-[350px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
        </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center'>
          {/* Cambiar el color del título a verde degradado */}
          <h1 className='text-6xl font-extrabold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent mb-4'>
            ¿Qué hacemos?
          </h1>
          <p className='text-3xl text-white leading-relaxed'>
            Ofrecemos alertas proactivas, un chatbot de asistencia y programas educativos para empoderar a nuestros usuarios. Nuestro enfoque es hacer que la educación sobre ciberseguridad sea accesible y comprensible para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
