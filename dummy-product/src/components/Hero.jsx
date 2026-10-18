
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    label: "Welcome to Addis Restaurant",
    title: "A Taste of Ethiopia, Served With Heart",
    description:
      "Gather around vibrant flavors, fragrant spices, and recipes passed down through generations.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2200&q=85",
  },
  {
    label: "Tradition on Every Plate",
    title: "Share the Joy of Authentic Injera",
    description:
      "Experience the warmth of Ethiopian dining with generous platters made for sharing.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=2200&q=85",
  },
  {
    label: "Fresh From Our Kitchen",
    title: "Bold Flavors. Beautiful Moments.",
    description:
      "From slow-cooked classics to fresh seasonal dishes, every bite brings Addis closer.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85",
  },
];

const sliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5500,
  cssEase: "ease-in-out",
  dots: true,
  dotsClass: "slick-dots !bottom-6 sm:!bottom-8",
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 750,
  swipeToSlide: true,

  customPaging: (index) => (
    <button
      type="button"
      aria-label={`Go to slide ${index + 1}`}
      className="mx-1 h-2 w-8 rounded-full bg-white/45 transition-all duration-300 hover:bg-white sm:w-10"
    />
  ),
};

function Hero() {
  return (
    <section
      aria-label="Addis Restaurant featured dishes"
      className="w-full overflow-hidden bg-stone-950"
    >
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <article
            key={slide.title}
            className="relative isolate min-h-[620px] outline-none sm:min-h-[680px] lg:min-h-[760px]"
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-linear-to-r from-stone-950/90 via-stone-950/65 to-stone-950/25"
            />

            {/* Additional dark overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-stone-950/20"
            />

            {/* Content */}
            <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pb-20 pt-24 sm:min-h-[680px] sm:px-10 sm:pb-24 lg:min-h-[760px] lg:px-16">
              <div className="max-w-3xl text-white">
                {/* Label */}
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-base">
                  {slide.label}
                </p>

                {/* Title */}
                <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:mt-8 sm:text-lg sm:leading-8">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                  <button
                    type="button"
                    className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-lg shadow-amber-950/20 transition-colors duration-300 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-stone-950"
                  >
                    Order Now
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-950"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;

