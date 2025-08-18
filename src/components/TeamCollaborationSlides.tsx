import { useEffect, useState } from "react";
import { slides } from "../data/Home_data";

const TeamCollaborationSlides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    const initTimer = setTimeout(() => {
      setHasInitialized(true);
    }, 100);

    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    if (!isPlaying || !hasInitialized) return;

    const interval = setInterval(() => {
      setIsPlaying(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying, hasInitialized]);

  const getVisibleSlides = () => {
    const visible = [];
    const totalSlides = slides.length;

    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % totalSlides;
      visible.push(slides[index]);
    }

    return visible;
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleSlides = getVisibleSlides();
  const centerSlide = visibleSlides[2]; // Middle slide is the active one

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Team Photos Carousel */}
          <div
            className={`
              flex justify-center items-center gap-4 mb-12 perspective-1000
              transition-all duration-1000 ease-out
              ${
                hasInitialized
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {visibleSlides.map((slide, index) => {
              const isCenter = index === 2;
              const isAdjacent = index === 1 || index === 3;
              const isEdge = index === 0 || index === 4;

              return (
                <div
                  key={`${slide.id}-${currentIndex}`}
                  className={`
                    relative cursor-pointer transition-all duration-500 ease-in-out
                    ${hasInitialized ? "scale-100" : "scale-0"}
                    ${
                      isCenter
                        ? "w-72 h-80 z-20 scale-110"
                        : isAdjacent
                        ? "w-60 h-72 z-20 scale-95 opacity-80"
                        : "w-48 h-64 z-10 scale-90 opacity-60"
                    }
                    ${isEdge ? "transform rotate-y-12" : ""}
                  `}
                  style={{
                    transitionDelay: hasInitialized
                      ? `${index * 150}ms`
                      : "0ms",
                  }}
                  onClick={() =>
                    goToSlide(
                      (currentIndex + index - 2 + slides.length) % slides.length
                    )
                  }
                >
                  <div
                    className={`
                      w-full h-full rounded-3xl overflow-hidden shadow-2xl
                      ${slide.bgColor} flex items-center justify-center
                      hover:shadow-3xl transition-all duration-300
                      transform hover:scale-105
                    `}
                  >
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={`Team member ${slide.id}`}
                        className={`
                          w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg
                          transition-all duration-700 ease-out
                          ${
                            hasInitialized
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }
                        `}
                        style={{
                          transitionDelay: hasInitialized
                            ? `${index * 150 + 300}ms`
                            : "0ms",
                        }}
                      />
                      <div
                        className={`
                        absolute inset-0 rounded-full bg-white opacity-20
                        transition-all duration-500 ease-out
                        ${
                          hasInitialized
                            ? "scale-100 opacity-0"
                            : "scale-150 opacity-20"
                        }
                      `}
                        style={{
                          transitionDelay: hasInitialized
                            ? `${index * 150 + 300}ms`
                            : "0ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content Section */}
          <div
            className={`
              text-center max-w-4xl mx-auto
              transition-all duration-1000 ease-out
              ${
                hasInitialized
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
            style={{
              transitionDelay: hasInitialized ? "800ms" : "0ms",
            }}
          >
            <h2
              className={`
              text-4xl font-bold text-gradient  mb-6 transition-all duration-700 ease-out
              ${hasInitialized ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
              style={{
                transitionDelay: hasInitialized ? "1000ms" : "0ms",
              }}
            >
              {centerSlide.title}
            </h2>
            <p
              className={`
              text-lg  leading-relaxed transition-all duration-700 ease-out
              ${hasInitialized ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
              style={{
                transitionDelay: hasInitialized ? "1200ms" : "0ms",
              }}
            >
              {centerSlide.description}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div
              className={`
              w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full
              transition-all duration-1000 ease-out
              ${
                hasInitialized
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }
            `}
              style={{
                transitionDelay: hasInitialized ? "400ms" : "0ms",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCollaborationSlides;
