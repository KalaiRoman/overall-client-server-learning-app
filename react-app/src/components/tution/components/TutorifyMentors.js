import React from "react";

const TutorifyMentors = () => {
  const mentors = [
    {
      name: "Rizqi Assegaf",
      role: "SD-SMA Mentor",
      experience: "10 Years",
      rating: 4,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Rifky Surya",
      role: "SD-SMA Mentor",
      experience: "7 Years",
      rating: 4,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Louis Cahya",
      role: "SD-SMA Mentor",
      experience: "5 Years",
      rating: 4,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : "empty"}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="mentor-section">
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style jsx>{`
        .mentor-section {
          background-color: #f8f9fa;
          padding: 80px 0;
          min-height: 100vh;
        }

        .section-tag {
          color: #ff8c42;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .section-description {
          color: #6c757d;
          font-size: 16px;
          text-align: center;
          margin-bottom: 60px;
        }

        .mentor-card {
          background: white;
          border-radius: 20px;
          padding: 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: none;
          overflow: hidden;
          height: 100%;
        }

        .mentor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .mentor-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }

        .mentor-info {
          padding: 25px;
        }

        .mentor-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .mentor-role {
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .mentor-experience {
          display: flex;
          align-items: center;
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .clock-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          opacity: 0.6;
        }

        .rating-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stars {
          display: flex;
          align-items: center;
        }

        .star {
          font-size: 18px;
          margin-right: 2px;
        }

        .star.filled {
          color: #ff8c42;
        }

        .star.empty {
          color: #e5e5e5;
        }

        .review-count {
          color: #6c757d;
          font-size: 14px;
          margin-left: 10px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .mentor-section {
            padding: 60px 0;
          }

          .mentor-image {
            height: 250px;
          }

          .mentor-info {
            padding: 20px;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 1.8rem;
          }

          .mentor-section {
            padding: 40px 0;
          }

          .section-description {
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="section-tag">MENTOR</div>
            <h2 className="section-title">Our Top Mentor At Tutorify</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="row g-4">
          {mentors.map((mentor, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mentor-card">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-image"
                />
                <div className="mentor-info">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>

                  <div className="mentor-experience">
                    <svg
                      className="clock-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                    </svg>
                    {mentor.experience}
                  </div>

                  <div className="rating-section">
                    <div className="stars">{renderStars(mentor.rating)}</div>
                    <span className="review-count">({mentor.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a
              href="#"
              className="btn btn-lg px-4 py-3"
              style={{
                backgroundColor: "#FF8C42",
                borderColor: "#FF8C42",
                color: "white",
                borderRadius: "25px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#FF6B1A";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#FF8C42";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View All Mentors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorifyMentors;
