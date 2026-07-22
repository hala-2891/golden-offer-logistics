"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Partners() {
  const { language } = useLanguage();

  const partners = [
    {
      name: "شركة ازال العربية",
      logo: "/partners/azal.png",
    },
    {
      name: "شركة وسام الخليج التجارية",
      logo: "/partners/wesam.png",
    },
    {
      name: "تايجر",
      logo: "/partners/tiger.png",
    },
    {
      name: "شركة توب الجواهر",
      logo: "/partners/top.png",
    },
    {
      name: "خيرات الأسطورة",
      logo: "/partners/khairat.png",
    },
    {
      name: "صوت الموضة",
      logo: "/partners/style.png",
    },
    {
      name: "مؤسسة دار العامودي",
      logo: "/partners/dar.png",
    },
    {
      name: "مؤسسة برايم",
      logo: "/partners/prime.png",
    },
  ];


  return (
    <section className="py-24 theme-surface-muted overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold theme-text">
            {language === "ar"
              ? "شركاؤنا في النجاح"
              : "Our Partners"}
          </h2>

          <p className="mt-4 theme-text-muted max-w-xl mx-auto">
            {language === "ar"
              ? "نفخر بثقة شركائنا الذين يساهمون معنا في تحقيق النجاح."
              : "We are proud of our trusted partners who share our vision."}
          </p>

        </div>


        <div className="mt-16 relative">

          <div className="
            flex 
            w-max
            gap-8
            animate-slide
            hover:[animation-play-state:paused]
          ">


            {[...partners, ...partners].map((partner,index)=>(

              <div
                key={index}
                className="
                group
                w-72
                h-40
                rounded-3xl
                backdrop-blur-xl
                bg-white/40
                dark:bg-white/5
                border
                border-[#C8A15A]/20
                flex
                flex-col
                items-center
                justify-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                "
              >

                <div
                  className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-md
                  mb-4
                  group-hover:scale-110
                  transition
                  "
                >

                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="
                    max-w-[60px]
                    max-h-[60px]
                    object-contain
                    "
                  />

                </div>


                <p className="
                  text-sm
                  font-semibold
                  theme-text
                  text-center
                  px-3
                ">
                  {partner.name}
                </p>


              </div>

            ))}


          </div>

        </div>


      </div>

    </section>
  );
}