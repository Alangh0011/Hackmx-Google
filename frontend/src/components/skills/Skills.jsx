import React from 'react'
import Imagen1 from '../../assets/Imagen1.png';

export default function Skills() {
    return (
      <section id='skills' className='flex flex-col items-center justify-center text-white py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-start'>
            <div className='md:w-1/2 mr-auto mt-40 ml-[-100px]'> {/* Margen negativo para mover más a la izquierda */}
              <h2 className='text-6xl font-extrabold text-left mb-4'>¿Quiénes Somos?</h2>
              <p className='text-3xl text-left leading-relaxed'>
                Somos un equipo dedicado a brindar soluciones de ciberseguridad accesibles y confiables para todos.
              </p>
            </div>
            <div className='md:w-1/2 flex justify-end'>
              <img
                src={Imagen1}
                alt="Representación de habilidades y equipo"
                className='w-full h-auto rounded-lg shadow-lg max-w-[800px]'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }