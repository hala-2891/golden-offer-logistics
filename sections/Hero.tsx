export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      h-screen
      flex
      items-center
      justify-center
      text-center
      overflow-hidden
      "
    >
      {/* Background Image */}
     <video
  autoPlay
  muted
  loop
  playsInline
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  "
>
  <source
    src="/hero-video.mp4"
    type="video/mp4"
  />
</video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F2744]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          "
        >
          خدمات الشحن البحري
          <span className="block text-[#C8A15A]">
            والتخليص الجمركي
          </span>
        </h1>

        <p
          className="
          mt-6
          text-lg
          md:text-xl
          text-gray-200
          "
        >
          نوفر حلولاً احترافية للشحن البحري والتخليص الجمركي
          مع متابعة دقيقة لكافة الإجراءات.
        </p>

        <div
          className="
          mt-10
          flex
          flex-col
          md:flex-row
          gap-4
          justify-center
          "
        >
          <a
            href="#services"
            className="
            bg-[#C8A15A]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition
            "
          >
            استكشف خدماتنا
          </a>

          <a
            href="https://wa.me/966545052121"
            target="_blank"
            className="
            border
            border-white
            text-white
            px-8
            py-4
            rounded-full
            hover:bg-white
            hover:text-black
            transition
            "
          >
            تواصل واتساب
          </a>
        </div>

      </div>
    </section>
  );
}