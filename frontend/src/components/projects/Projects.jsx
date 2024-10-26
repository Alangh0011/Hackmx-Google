// Projects.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Imagen01 from '../../assets/Imagen01.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project5 from '../../assets/project5.jpg';

export default function Projects() {
    const listProjects = [
        { 
            id: 1, 
            image: Imagen01, 
            title: 'Demasiado bueno para ser verdad!', 
            description: 'Los estafadores pueden mandar correos o mensajes muy atractivos, ¡no caigas ante ellos! Lee este artículo en como prevenirlo',
            articleUrl: 'https://www.incibe.es/aprendeciberseguridad/phishing' // URL del artículo
        },
        { 
            id: 2, 
            image: project2, 
            title: 'Evita el robo de información', 
            description: 'Aprende a activar la autentificación de dos pasos para asegurar tu información',
            articleUrl: 'https://home.inai.org.mx/wp-content/documentos/GuiasTitulares/Gu%C3%ADa_Prevenir_RI.pdf' // URL del artículo
        },
        { 
            id: 3, 
            image: project3, 
            title: 'Jamás des tus datos personales ni bancarios', 
            description: '¡Revisa que la página es 100% confiable antes de proporcionar algún dato! Acá te mostramos como identificar si una página es confiable',
            articleUrl: 'https://www.abm.org.mx/recomendaciones-de-seguridad/abm-recomendaciones-seguridad-d.htm' // URL del artículo
        },
        { 
            id: 4, 
            image: project5, 
            title: 'Usa contraseñas seguras', 
            description: 'Te enseñamos a crear una contraseña fuerte para alejar a los ladrones',
            articleUrl: 'https://latam.kaspersky.com/resource-center/threats/how-to-create-a-strong-password?srsltid=AfmBOoobOGnDi5A4t7IgfdzctnOeC6EDXBGP3oHrIh9dSQwRPyb-RofN' // URL del artículo
        },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>Educación</h2>
                <Slider {...settings}>
                    {
                        listProjects.map((project) => {
                            return (
                                <div key={project.id} className='p-4'>
                                    <div 
                                        className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden cursor-pointer'
                                        onClick={() => window.open(project.articleUrl, '_blank')} // Redirige al hacer clic
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' 
                                        />
                                        <div className='p-6'>
                                            <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                            <p className='leading-relaxed mb-3'>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}
