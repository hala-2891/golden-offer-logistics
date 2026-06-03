"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-10 md:gap-20">

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={1000}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              معاملة منجزة
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={500}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              عميل
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={10}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              سنوات خبرة
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              24/7
            </h3>

            <p className="mt-2 text-[#0F2744]">
              دعم ومتابعة
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}