import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere morbi ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere morbi.",
      name: "Rizqi Assegaf",
      title: "Student At Tutorfly",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      text: "Exceptional service and outstanding results! The team went above and beyond to deliver exactly what we needed. Their attention to detail and professional approach made all the difference in our project success.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      text: "Working with this team has been a game-changer for our business. Their innovative solutions and dedication to excellence have helped us achieve goals we never thought possible. Highly recommended!",
      name: "Michael Chen",
      title: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      text: "Professional, reliable, and incredibly talented. They delivered our project on time and exceeded our expectations. The quality of work and customer service is truly outstanding.",
      name: "Emily Rodriguez",
      title: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 p-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">
            TESTIMONI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What They Say About US
          </h2>
        </div>

        {/* Manual Carousel */}
        <div className="position-relative">
          <div className="overflow-hidden">
            <div
              className="d-flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-100 flex-shrink-0">
                  <div className="row align-items-center g-4">
                    {/* Text Section */}
                    <div className="col-lg-7 col-md-6">
                      <div className="pe-lg-5">
                        <blockquote className="mb-4">
                          <p className="text-gray-600 text-lg leading-relaxed mb-0">
                            "{testimonial.text}"
                          </p>
                        </blockquote>
                        <div className="mt-6">
                          <h5 className="font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h5>
                          <p className="text-gray-500 text-sm mb-0">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-5 col-md-6">
                      <div className="position-relative">
                        <div
                          className="bg-orange-400 rounded-circle position-absolute"
                          style={{
                            width: "120px",
                            height: "120px",
                            bottom: "-20px",
                            right: "-20px",
                            zIndex: 1,
                          }}
                        ></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="img-fluid rounded-3 shadow-lg position-relative"
                          style={{
                            maxHeight: "400px",
                            width: "100%",
                            objectFit: "cover",
                            zIndex: 2,
                            borderRadius:"20px"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Navigation */}
          <div className="d-flex justify-content-between align-items-center mt-5">
            {/* Indicators */}
            <div className="d-flex align-items-center">
              <span className="text-gray-600 me-3">
                <span>{(currentSlide + 1).toString().padStart(2, "0")}</span>/
                <span className="text-gray-400">
                  {testimonials.length.toString().padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                type="button"
                onClick={prevSlide}
                style={{ width: "48px", height: "48px" }}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="btn btn-warning rounded-circle p-2 d-flex align-items-center justify-content-center text-white"
                type="button"
                onClick={nextSlide}
                style={{ width: "48px", height: "48px" }}
              >
                <ChevronRight className="w-5 h-5" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default TestimonialCarousel;
