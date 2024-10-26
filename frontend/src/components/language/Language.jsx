// Language.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Language() {
    const languages = [
        { 
            code: 'AI', 
            name: 'Ciberseguridad para el Día a Día (Virtual)', 
            level: 'Inicial', 
            url: 'https://maestriasydiplomados.tec.mx/programas/ciberseguridad-para-el-dia-a-dia-virtual', // URL del curso
            id: 'course1' 
        },
        { 
            code: 'AI', 
            name: 'Curso de Ciberseguridad Online Gratuito', 
            level: 'Medio', 
            url: 'https://academia-ciberseguridad.com/tecnico-ciberseguridad', // URL del curso
            id: 'course2' 
        },
        { 
            code: 'AI', 
            name: 'Capacitación - Datos Personales', 
            level: 'Difícil', 
            url: 'https://datos-personales.scjn.gob.mx/capacitacion', // URL del curso
            id: 'course3' 
        },
        { 
            code: 'AI', 
            name: 'Formación y Certificado en Ciberseguridad', 
            level: 'Avanzado', 
            url: 'https://grow.google/intl/es/google-career-certificates/cybersecurity/', // URL del curso
            id: 'course4' 
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const handleCourseClick = (language) => {
        window.open(language.url, '_blank'); // Abre la URL del curso en una nueva pestaña
    };

    return (
        <section id='language' data-aos='fade-up' data-aos-delay='400' className='relative overflow-hidden flex flex-col text-blue-950 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>Cursos de Ciberseguridad</h2>
                <Slider {...settings}>
                    {
                        languages.map((language, index) => (
                            <div key={index} className='p-4'>
                                <div className='achievement flex flex-col items-center'>
                                    <div className='circle w-20 h-20 bg-white rounded-full relative flex items-center justify-center text-lg font-bold mb-6 shadow-lg'>
                                        <span className='z-10'>{language.code}</span>
                                        <div className='absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0'></div>
                                    </div>
                                    <span className='text-xl text-white'>{language.name}</span>
                                    <span className='text-[#ffa600] text-lg font-bold'>{language.level}</span>
                                    <button 
                                        className='mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition duration-300'
                                        onClick={() => handleCourseClick(language)} // Redirige al hacer clic
                                    >
                                        Accesar al curso
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}
