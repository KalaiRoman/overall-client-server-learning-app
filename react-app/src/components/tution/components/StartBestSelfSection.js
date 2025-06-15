// import React, { useState } from "react";

// const StartBestSelfSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const stats = [
//     {
//       number: "50+",
//       label: "MENTOR AT TUTORIFY",
//     },
//     {
//       number: "10K+",
//       label: "STUDENT TRUSTED US",
//     },
//     {
//       number: "120+",
//       label: "STUDENT SUCCESS",
//     },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="best-self-section">
//       {/* Bootstrap CSS */}
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
//         rel="stylesheet"
//       />

//       <style jsx>{`
//         .best-self-section {
//           background: linear-gradient(135deg, #fff5e6 0%, #ffe4b8 100%);
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//         }

//         .content-wrapper {
//           padding: 80px 0;
//           position: relative;
//           z-index: 2;
//         }

//         .hero-title {
//           font-size: 1rem;
//           font-weight: 900;
//           color: #2c3e50;
//           line-height: 1.1;
//           margin-bottom: 30px;
//           text-transform: uppercase;
//           letter-spacing: -2px;
//         }

//         .hero-title .highlight {
//           color: #ff8c42;
//         }

//         .hero-description {
//           color: #6c757d;
//           font-size: 16px;
//           line-height: 1.6;
//           margin-bottom: 50px;
//           max-width: 500px;
//         }

//         .stats-section {
//           margin-bottom: 50px;
//         }

//         .stat-item {
//           margin-bottom: 30px;
//         }

//         .stat-number {
//           font-size: 3.5rem;
//           font-weight: 900;
//           color: #2c3e50;
//           line-height: 1;
//           margin-bottom: 8px;
//         }

//         .stat-label {
//           color: #ff8c42;
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//         }

//         .search-section {
//           max-width: 500px;
//         }

//         .search-form {
//           display: flex;
//           background: white;
//           border-radius: 50px;
//           padding: 8px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }

//         .search-form:focus-within {
//           box-shadow: 0 15px 40px rgba(255, 140, 66, 0.2);
//         }

//         .search-input {
//           flex: 1;
//           border: none;
//           padding: 15px 20px;
//           font-size: 16px;
//           background: transparent;
//           outline: none;
//           color: #2c3e50;
//         }

//         .search-input::placeholder {
//           color: #999;
//         }

//         .search-btn {
//           background: #ff8c42;
//           border: none;
//           padding: 15px 30px;
//           border-radius: 40px;
//           color: white;
//           font-weight: 600;
//           font-size: 16px;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .search-btn:hover {
//           background: #ff6b1a;
//           transform: scale(1.05);
//         }

//         .student-image {
//           width: 100%;
//           max-width: 500px;
//           height: 600px;
//           background: url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face")
//             center/cover;
//           border-radius: 20px;
//           position: relative;
//           margin: 0 auto;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         }

//         .student-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(
//             45deg,
//             rgba(255, 140, 66, 0.1) 0%,
//             rgba(255, 107, 26, 0.1) 100%
//           );
//           border-radius: 20px;
//         }

//         .success-badge {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           background: white;
//           padding: 10px 15px;
//           border-radius: 20px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//           font-size: 2rem;
//         }

//         .floating-elements {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//         }

//         .floating-element {
//           position: absolute;
//           width: 20px;
//           height: 20px;
//           background: rgba(255, 140, 66, 0.1);
//           border-radius: 50%;
//           animation: float 6s ease-in-out infinite;
//         }

//         .floating-element:nth-child(1) {
//           top: 20%;
//           left: 10%;
//           animation-delay: 0s;
//         }
//         .floating-element:nth-child(2) {
//           top: 60%;
//           left: 5%;
//           animation-delay: 2s;
//         }
//         .floating-element:nth-child(3) {
//           top: 30%;
//           right: 15%;
//           animation-delay: 4s;
//         }
//         .floating-element:nth-child(4) {
//           bottom: 40%;
//           right: 10%;
//           animation-delay: 1s;
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-title {
//             font-size: 2.5rem;
//             text-align: center;
//           }

//           .content-wrapper {
//             padding: 60px 0;
//           }

//           .student-image {
//             height: 400px;
//             margin-top: 40px;
//           }

//           .stat-number {
//             font-size: 2.5rem;
//           }

//           .stats-section {
//             text-align: center;
//           }

//           .hero-description {
//             text-align: center;
//             max-width: 100%;
//           }
//         }

//         @media (max-width: 576px) {
//           .hero-title {
//             font-size: 2rem;
//           }

//           .content-wrapper {
//             padding: 40px 0;
//           }

//           .search-form {
//             flex-direction: column;
//             border-radius: 20px;
//           }

//           .search-btn {
//             margin-top: 10px;
//             border-radius: 15px;
//           }

//           .student-image {
//             height: 350px;
//           }
//         }
//       `}</style>

//       {/* Floating Background Elements */}
//       <div className="floating-elements">
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//       </div>

//       <div className="content-wrapper p-5">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left Column - Content */}
//             <div className="col-lg-6 mb-5 mb-lg-0">
//               <h1 className="hero-title">
//                 {/* START BECOME YOUR<br />
//                 BEST <span className="highlight">SELF</span> */}
//                 A Classical <br /> Education for the{" "}
//                 <span className="text-orange">Future</span>
//               </h1>

//               <p className="hero-description">
//                 We prepare you to engage in the world that is and to help bring
//                 about a world that ought to be.
//               </p>

//               {/* Statistics */}
//               <div className="stats-section">
//                 <div className="row">
//                   {stats.map((stat, index) => (
//                     <div key={index} className="col-md-4 col-sm-6">
//                       <div className="stat-item">
//                         <div className="stat-number">{stat.number}</div>
//                         <div className="stat-label">{stat.label}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Search Section */}
//               {/* <div className="search-section">
//                 <div className="search-form">
//                   <input
//                     type="text"
//                     className="search-input"
//                     placeholder="Cari Mentor Kamu"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <button onClick={handleSearch} className="search-btn">
//                     Search
//                   </button>
//                 </div>
//               </div> */}

//               <div>
//                 <button className="search-btn">Get Start Now</button>
//               </div>
//             </div>

//             {/* Right Column - Student Image */}
//             <div className="col-lg-6">
//               <div className="text-center">
//                 <div className="student-image">
//                   <div className="student-overlay"></div>
//                   <div className="success-badge">🎉</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StartBestSelfSection;





import React, { useState } from 'react';

const StartBestSelfSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const programmingLanguages = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Science',
  'Social Science',
  'English',
  'Tamil',
  'Hindi',
  'Computer Science',
  'History',
  'Geography',
  'Economics',
  'Civics',
  'Environmental Science'
];

  const videoCallWindows = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c234?w=150&h=150&fit=crop&crop=face',
      position: { top: '10%', right: '5%' },
      isActive: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      position: { bottom: '20%', right: '2%' },
      isActive: false
    },
    {
      id: 3,
      name: 'Emily Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      position: { bottom: '45%', left: '45%' },
      isActive: true
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <div style={{ 
        backgroundColor: '#FFD93D', 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-fluid">
          <div className="row min-vh-100 align-items-center">
            {/* Left Content Section */}
            <div className="col-lg-6 col-md-12 px-4 px-lg-5">
              <div className="py-5">
                <h1 className="display-3 fw-bold text-dark mb-4" style={{ lineHeight: '1.1' }}>
                  Learn Programming
                  <br />
                  with Online Course
                </h1>
                
                <p className="lead text-dark mb-5" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum fugiat
                </p>

                {/* Search Section */}
                <div className="mb-5">
                  <div className="row g-0">
                    <div className="col-8 col-md-9">
                      <input
                        type="text"
                        className="form-control form-control-lg border-0 rounded-0 rounded-start"
                        placeholder="What do you want to learn ?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ 
                          fontSize: '1rem',
                          padding: '12px 20px',
                          boxShadow: 'none'
                        }}
                      />
                    </div>
                    <div className="col-4 col-md-3">
                      <button 
                        className="btn btn-dark btn-lg w-100 rounded-0 rounded-end border-0"
                        onClick={handleSearch}
                        style={{ 
                          fontSize: '1rem',
                          padding: '12px 20px',
                          backgroundColor: '#2c2c2c'
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* Programming Language Tags */}
                <div className="mb-4">
                  <div className="row g-2">
                    {programmingLanguages.map((lang, index) => (
                      <div key={index} className="col-auto">
                        <button 
                          className="btn btn-light btn-sm fw-semibold border-0 shadow-sm"
                          style={{ 
                            padding: '8px 16px',
                            fontSize: '0.85rem',
                            backgroundColor: 'white',
                            color: '#333',
                            borderRadius: '20px',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f8f9fa';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          {lang}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center position-relative">
              <div className="position-relative">
                {/* Main Person Image */}
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop&crop=face"
                  alt="Happy student with laptop"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ 
                    maxWidth: '400px',
                    height: 'auto',
                    zIndex: 1,
                    position: 'relative'
                  }}
                />
                
                {/* Laptop Overlay */}
                <div 
                  className="position-absolute bg-dark rounded-2 shadow"
                  style={{
                    bottom: '10%',
                    left: '50%',
                    width: '280px',
                    height: '180px',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
                    border: '8px solid #333'
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div 
                      className="bg-light rounded-circle d-flex justify-content-center align-items-center"
                      style={{ width: '50px', height: '50px', opacity: 0.3 }}
                    >
                      <i className="fas fa-play text-dark"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Call Windows */}
              {videoCallWindows.map((person) => (
                <div
                  key={person.id}
                  className="position-absolute bg-white rounded-3 shadow-lg p-2 d-none d-md-block"
                  style={{
                    ...person.position,
                    width: '200px',
                    height: '140px',
                    zIndex: 3,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: person.id * 0.5 + 's'
                  }}
                >
                  <div className="h-100 position-relative overflow-hidden rounded-2">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                    
                    {/* Video Call Controls */}
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-2">
                      <div className="d-flex justify-content-center gap-2">
                        <div 
                          className={`rounded-circle d-flex align-items-center justify-content-center ${
                            person.isActive ? 'bg-success' : 'bg-secondary'
                          }`}
                          style={{ width: '30px', height: '30px' }}
                        >
                          <i className={`fas ${person.isActive ? 'fa-microphone' : 'fa-microphone-slash'} text-white`} style={{ fontSize: '12px' }}></i>
                        </div>
                        <div 
                          className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '30px', height: '30px' }}
                        >
                          <i className="fas fa-video text-white" style={{ fontSize: '12px' }}></i>
                        </div>
                        <div 
                          className="bg-danger rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '30px', height: '30px' }}
                        >
                          <i className="fas fa-phone-slash text-white" style={{ fontSize: '12px' }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px); 
            }
            50% { 
              transform: translateY(-10px); 
            }
          }
          
          @media (max-width: 768px) {
            .display-3 {
              font-size: 2.5rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .display-3 {
              font-size: 2rem !important;
            }
            .lead {
              font-size: 1rem !important;
            }
          }
        `
      }} />
    </div>
  );
};

export default StartBestSelfSection;