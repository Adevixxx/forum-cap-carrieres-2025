import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TitleHeader from "../components/TitleHeader";

const teamSlides = [
  {
    id: "lead",
    img: "/images/br1.jpg",
  },
  {
    id: "logistics",
    img: "/images/logistique.jpg",
  },
  {
    id: "communication",
    img: "/images/com.jpg",
  },
  {
    id: "web",
    img: "/images/web.jpg",
  },
];

const TeamSlider = () => {
  const { t } = useTranslation();
  const members = t("team.members", { returnObjects: true });
  const getMember = (id) => members.find((member) => member.id === id) || {};

  return (
    <section id="team" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t("team.title")}
          sub={t("team.subtitle")}
        />

        <div className="mt-16 max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            className="w-full"
          >
            {teamSlides.map((slide) => {
              const content = getMember(slide.id);
              return (
                <SwiperSlide key={slide.id}>
                  <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center">
                    {/* Image avec plus de height */}
                    <div className="w-full h-80 md:h-[32rem] overflow-hidden">
                      <img
                        src={slide.img}
                        alt={content.name || slide.id}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Texte */}
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-3">{content.name}</h3>
                      <p className="text-slate-600 text-lg">{content.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;

