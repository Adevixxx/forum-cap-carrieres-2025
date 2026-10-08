import gsap from "gsap"; //
import { useGSAP } from "@gsap/react"; //
import { ScrollTrigger } from "gsap/ScrollTrigger"; //
import { useTranslation } from "react-i18next"; //

import TitleHeader from "../components/TitleHeader"; //
import GlowCard from "../components/GlowCard"; //

gsap.registerPlugin(ScrollTrigger); //

const DaySchedule = () => {
  const { t } = useTranslation(); //
  const scheduleEvents = t("schedule.items", { returnObjects: true }); //

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => { //
      gsap.from(card, { //
        xPercent: -100, //
        opacity: 0, //
        transformOrigin: "left left", //
        duration: 1, //
        ease: "power2.inOut", //
        scrollTrigger: { //
          trigger: card, //
          start: "top 80%", //
        },
      });
    }); //

    gsap.to(".timeline", { //
      transformOrigin: "bottom bottom", //
      ease: "power1.inOut", //
      scrollTrigger: { //
        trigger: ".timeline", //
        start: "top center", //
        end: "70% center", //
        onUpdate: (self) => { //
          gsap.to(".timeline", { scaleY: 1 - self.progress }); //
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => { //
      gsap.from(text, { //
        opacity: 0, //
        xPercent: 0, //
        duration: 1, //
        ease: "power2.inOut", //
        scrollTrigger: { //
          trigger: text, //
          start: "top 60%", //
        },
      });
    }); //
  }, []); //

  return (
    <section id="schedule" className="flex-center md:mt-40 mt-20 section-padding xl:px-0"> {/* */}
      <div className="w-full h-full md:px-20 px-5"> {/* */}
        <TitleHeader //
          title={t("schedule.title")} //
          sub={t("schedule.subtitle")} //
        />

        <div className="mt-32 relative"> {/* */}
          <div className="relative z-50 xl:space-y-32 space-y-10"> {/* */}
            {scheduleEvents.map((event, index) => ( //
              
              // MODIFICATION 1: Ajout de 'xl:flex xl:items-stretch'
              <div key={event.time} className="exp-card-wrapper xl:flex xl:items-stretch"> {/* */}
                <div className="xl:w-2/6"> {/* */}
                  
                  {/* MODIFICATION 2: Utilisation de 'paddingClass' et 'className' */}
                  <GlowCard 
                    index={index} 
                    paddingClass="p-0"
                    className="h-50"
                    childrenWrapperClass="h-full"
                  >
                    <img 
                      src={event.imgPath} 
                      alt="event-img" 
                      className="w-full h-full object-cover" // MODIFICATION 3
                    />
                  </GlowCard>
                </div>

                <div className="xl:w-4/6"> {/* */}
                  <div className="flex items-start"> {/* */}
                    <div className="timeline-wrapper"> {/* */}
                      <div className="timeline" /> {/* */}
                      <div className="gradient-line w-1 h-full" /> {/* */}
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20"> {/* */}
                      <div className="timeline-logo"> {/* */}
                        <img src={event.logoPath} alt="logo" className="scale-60" /> {/* */}
                      </div>

                      <div> {/* */}
                        <h1 className="font-semibold text-3xl">{event.title}</h1> {/* */}
                        <p className="my-5 text-slate-600">🕒 {event.time}</p> {/* */}
                        {event.description && ( //
                          <p className="text-slate-600">{event.description}</p> //
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaySchedule; //