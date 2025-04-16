import { Swiper, SwiperSlide } from "swiper/react"; import { Navigation, Pagination } from "swiper/modules"; import "swiper/css"; import "swiper/css/navigation"; import "swiper/css/pagination";

export default function Depoimentos() { return ( <section id="depoimentos" className="py-24 px-4 sm:px-6 md:px-8 bg-dark text-white relative" > <div className="max-w-4xl mx-auto text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary" data-aos="fade-up" > Depoimentos reais </h2>

<Swiper
  modules={[Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  pagination={{ clickable: true }}
  className="relative"
  data-aos="fade-up"
  data-aos-delay="100"
>
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-xl p-8 text-left shadow-lg">
          <p className="text-lg text-gray-200 italic mb-4">
            “Tive meu primeiro lead em menos de 24h com a landing que eles criaram.”
          </p>
          <p className="text-sm text-gray-400">— Carla, designer freelancer</p>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-xl p-8 text-left shadow-lg">
          <p className="text-lg text-gray-200 italic mb-4">
            “O design ficou muito acima do esperado. Profissional demais!”
          </p>
          <p className="text-sm text-gray-400">— Lucas, gestor de tráfego</p>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-xl p-8 text-left shadow-lg">
          <p className="text-lg text-gray-200 italic mb-4">
            “É muito prático. Eu só preenchi o formulário e recebi tudo pronto pra divulgar.”
          </p>
          <p className="text-sm text-gray-400">— Amanda, coach de performance</p>
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Estilos das setas */}
    <style jsx global>{`
      .swiper-button-prev,
      .swiper-button-next {
        color: #00FF88 !important;
        width: 28px !important;
        height: 28px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10 !important;
      }

      .swiper-button-prev {
        left: -36px !important;
      }

      .swiper-button-next {
        right: -36px !important;
      }

      .swiper-button-disabled {
        opacity: 0.3 !important;
        pointer-events: none !important;
      }

      .swiper-button-prev:hover,
      .swiper-button-next:hover {
        transform: translateY(-50%) scale(1.15) !important;
        transition: all 0.3s ease !important;
      }

      @media (max-width: 768px) {
        .swiper-button-prev {
          left: -20px !important;
        }
        .swiper-button-next {
          right: -20px !important;
        }
      }
    `}</style>
  </div>
</section>
); }