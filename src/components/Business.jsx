import React, { useState } from 'react';
import Carousel from "./Carousel"; 
import { img1_c, img2_c, img3_c, img_test1 } from '../assets'; 
import styles, { layout } from "../style"; 

const Business = () => {
  // TEXTOS #####

  const carouselData = [
    {
      img: img1_c,
      title: "Jogos de Impacto",
      paragraph: "Lorem ipsum dolor sit ametenean phaid.Lorem ipsum dolor sit ameteneaem ipsum dolor sit ametenean pharetra vestibulum tellus, vel mattis est n pharetra vestibulum tellus, vel mattis est porttitor em ipsum dolor sit ametenean pharetra vestibulum tellus, vel mattis est id.Lorem ipsum dolor sit ametenean pharetra vestibulum tellus, vel mattis est porttitor i END."
    },
    {
      img: img1_c,
      title: "Além da Consultoria",
      paragraph: "Vamos além da consultoria, facilitando a implementação prática das mudanças necessárias."
    },
    {
      img: img1_c,
      title: "Transformação Vivencial",
      paragraph: "Com a OptSec, você vivencia a transformação, posicionando sua empresa para prosperar na era digital."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  const updateCurrentSlide = (index) => {
    setIsAnimatingOut(true); // Inicia a animação de saída

    setTimeout(() => {
      setIsAnimatingOut(false); // Finaliza a animação de saída
      setCurrentSlide(index); // Atualiza o slide
      setIsAnimatingIn(true); // Inicia a animação de entrada
    }, 800); // Tempo da animação de saída

    setTimeout(() => {
      setIsAnimatingIn(false); // Finaliza a animação de entrada
    }, 1600); // Tempo total das animações de saída e entrada
  };

  return (
<section 
  id="features" 
  className="flex items-center justify-center py-10 pb-10 sm:pb-10" 
  style={{ backgroundColor: '#E5E7EB', padding: '10px 0' }}
>
      <div 
        className="bg-white rounded-lg p-0 flex flex-col md:flex-row shadow-sm" 
        style={{ width: '100%', maxWidth: '1820px', maxHeight: '1200px' }}
      >
        <div 
          className={`${layout.sectionInfo} flex-3 z-10 ${styles.flexStart} flex-col xl:px-50 sm:px-12 px-6 ml-8 pt-10 md:pt-0`} 
          style={{ marginLeft: '80px' }}
        >
          {/* Subtítulo com linha amarela */}
          <div className={`flex items-center mb-2 ${isAnimatingOut ? 'mask-slide-out' : ''} ${isAnimatingIn ? 'mask-slide-in' : ''}`}>
            <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div>
            <p className="uppercase text-black font-bold">
              {carouselData[currentSlide].title}
            </p>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold text-[#272727] leading-tight ${isAnimatingOut ? 'mask-slide-out' : ''} ${isAnimatingIn ? 'mask-slide-in' : ''}`}>
            Serious Game.
          </h1>

          {/* Parágrafo */}
          <p className={`text-[#272727] text-base md:text-lg mt-5 max-w-lg leading-relaxed ${isAnimatingOut ? 'mask-slide-out' : ''} ${isAnimatingIn ? 'mask-slide-in' : ''}`}>
            {carouselData[currentSlide].paragraph}
          </p>

          {/* Botão estilizado com animação */}
          <div className={`mt-8 ${isAnimatingOut ? 'mask-slide-out' : ''} ${isAnimatingIn ? 'mask-slide-in' : ''}`}>
            <a
              href="#"
              className="relative inline-block py-3 px-6 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
              <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
              <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">Saiba mais</span>
            </a>
          </div>
        </div>

        {/* Ajuste do tamanho do Carousel e posicionamento ao lado do texto */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full h-auto">
          <div className="w-full h-auto overflow-visible">
            <Carousel
              slides={carouselData.map(data => data.img)}
              autoSlide={true}
              autoSlideInterval={5000}
              updateCurrentSlide={updateCurrentSlide}
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
