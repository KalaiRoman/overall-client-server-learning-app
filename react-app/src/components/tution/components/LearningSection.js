import React from 'react';

const LearningSection = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%);
          border-radius: 0 0 80px 80px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
        }
        
        .btn-get-started {
          background: #FF8C42;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          color: white;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .btn-get-started:hover {
          background: #FF6B1A;
          transform: translateY(-2px);
          color: white;
        }
        
        .btn-watch-video {
          background: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .btn-watch-video:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          color: #333;
        }
        
        .play-icon {
          width: 20px;
          height: 20px;
          background: #FF8C42;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
        }
        
        .about-tag {
          color: #FF8C42;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: #2C3E50;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .hero-description {
          color: #6C757D;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
          width:1000px;
          text-align:center;
        }
        
        .teacher-image {
          width: 400px;
          height: 500px;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="%23FF8C42"/><rect x="50" y="100" width="300" height="350" rx="20" fill="white"/><circle cx="200" cy="200" r="50" fill="%23E8E8E8"/><rect x="150" y="260" width="100" height="10" rx="5" fill="%23E8E8E8"/><rect x="125" y="280" width="150" height="8" rx="4" fill="%23E8E8E8"/><rect x="100" y="300" width="200" height="8" rx="4" fill="%23E8E8E8"/></svg>') center/cover;
          border-radius: 50px;
          position: relative;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-section {
            border-radius: 0 0 40px 40px;
          }
          .teacher-image {
            width: 300px;
            height: 400px;
          }
        }
      `}</style>
      
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <section className="hero-section py-5">
          <div className="container">
            <div className="row align-items-center min-vh-100 py-5">
              {/* Left Column - Image */}
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="text-center">
                  <div className="teacher-image">
                    {/* Placeholder for teacher image */}
                    <div className="position-absolute top-50 start-50 translate-middle text-white">
                      <div className="bg-white rounded-circle p-4 shadow-lg" style={{width: '120px', height: '120px'}}>
                        <div className="d-flex align-items-center justify-content-center h-100">
                          <span className="text-muted fs-6">👩‍🏫</span>
                        </div>
                      </div>
                      {/* Thumbs up gesture */}
                      <div className="position-absolute" style={{top: '60%', left: '70%'}}>
                        <span style={{fontSize: '2rem'}}>👍</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="col-lg-6">
                <div className="text-white">
                  <div className="about-tag">ABOUT US</div>
                  <h1 className="hero-title text-white">
                 Empowering Students<br />
With Personalized Learning Support
                  </h1>
                  <p className="hero-description text-white-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Risus dignissim faucibus id sit consequat. Vivamus quam 
                    senectus vitae dolor ac.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
                    <a href="#" className="btn-get-started">
                      Get Started
                    </a>
                    <a href="#" className="btn-watch-video">
                      <span className="play-icon">▶</span>
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Content Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="about-tag">WHY CHOOSE US</div>
                <h2 className="hero-title" style={{fontSize: '2.5rem'}}>
                  Professional Learning Experience
                </h2>
                <div className="hero-descriptions text-center d-flex align-items-center justify-content-center col-lg-12" style={{color:"#6C757D",fontSize:"16.5px",width:"70%",margin:"0 auto",lineHeight:"32px"}}>
                  Our experienced tutors provide personalized lessons tailored to your learning style and goals. 
                  Start your journey to fluent English today with our proven teaching methods.
                </div>
                
                <div className="row mt-5">
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <span style={{fontSize: '3rem'}}>📚</span>
                        </div>
                        <h5 className="card-title">Personalized Learning</h5>
                        <p className="card-text text-muted">
                          Custom lessons designed for your specific needs and learning pace.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <span style={{fontSize: '3rem'}}>👨‍🏫</span>
                        </div>
                        <h5 className="card-title">Expert Tutors</h5>
                        <p className="card-text text-muted">
                          Learn from certified native speakers with years of teaching experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <span style={{fontSize: '3rem'}}>⏰</span>
                        </div>
                        <h5 className="card-title">Flexible Schedule</h5>
                        <p className="card-text text-muted">
                          Book lessons at your convenience with our flexible scheduling system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearningSection;