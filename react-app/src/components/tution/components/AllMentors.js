import React, { useState } from 'react';

const AllMentors = () => {
  const [searchTerm, setSearchTerm] = useState('');

const mentors = [
  {
    id: 1,
    name: 'Dr. Arvind Iyer',
    role: 'Physics Teacher / Mentor',
    hours: 120,
    rating: 4.9,
    reviews: 17,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    skills: ['Kinematics', 'Thermodynamics', 'Electromagnetism']
  },
  {
    id: 2,
    name: 'Prof. Meena Nair',
    role: 'Maths Teacher / Coach',
    hours: 740,
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332c234?w=300&h=300&fit=crop&crop=face',
    skills: ['Algebra', 'Calculus', 'Geometry']
  },
  {
    id: 3,
    name: 'Dr. Suresh Rao',
    role: 'NEET Biology Mentor',
    hours: 850,
    rating: 4.9,
    reviews: 63,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    skills: ['Genetics', 'Human Physiology', 'Biochemistry']
  },
  {
    id: 4,
    name: 'Ms. Kavitha R.',
    role: 'Tamil Teacher / Mentor',
    hours: 120,
    rating: 4.8,
    reviews: 22,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    skills: ['Tamil Grammar', 'Classical Literature', 'Essay Writing']
  },
  {
    id: 5,
    name: 'Mr. Rajeev Menon',
    role: 'JEE Physics Mentor',
    hours: 120,
    rating: 4.7,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
    skills: ['Mechanics', 'Optics', 'Modern Physics']
  },
  {
    id: 6,
    name: 'Ms. Shruti Sharma',
    role: 'Social Science Teacher',
    hours: 350,
    rating: 4.9,
    reviews: 41,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    skills: ['History', 'Civics', 'Geography']
  },
  {
    id: 7,
    name: 'Prof. Neha Aggarwal',
    role: 'Maths Teacher / Mentor',
    hours: 680,
    rating: 4.8,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
    skills: ['Trigonometry', 'Probability', 'Statistics']
  },
  {
    id: 8,
    name: 'Mr. Prakash Verma',
    role: 'Science Teacher / Coach',
    hours: 420,
    rating: 4.9,
    reviews: 36,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    skills: ['Chemistry', 'Physics', 'Biology']
  },
  {
    id: 9,
    name: 'Ms. Anjali Desai',
    role: 'English Language Mentor',
    hours: 290,
    rating: 4.7,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    skills: ['Grammar', 'Writing', 'Literature']
  },
  {
    id: 10,
    name: 'Dr. Vinod Khanna',
    role: 'NEET Chemistry Teacher',
    hours: 560,
    rating: 4.8,
    reviews: 47,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    skills: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry']
  },
  {
    id: 11,
    name: 'Ms. Sneha Patil',
    role: 'Computer Science Mentor',
    hours: 380,
    rating: 4.9,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
    skills: ['Data Structures', 'C Programming', 'OOPs']
  },
  {
    id: 12,
    name: 'Mr. Ramesh Balan',
    role: 'General Science Teacher',
    hours: 720,
    rating: 4.8,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    skills: ['Physics', 'Chemistry', 'Biology']
  },
  {
    id: 13,
    name: 'Mrs. Deepa Joshi',
    role: 'Social Studies Teacher',
    hours: 450,
    rating: 4.7,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    skills: ['Political Science', 'Geography', 'History']
  },
  {
    id: 14,
    name: 'Prof. Manish Sinha',
    role: 'JEE Maths Mentor',
    hours: 610,
    rating: 4.9,
    reviews: 44,
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face',
    skills: ['Algebra', 'Differential Equations', 'Coordinate Geometry']
  },
  {
    id: 15,
    name: 'Ms. Ritu Jain',
    role: 'Computer Applications Coach',
    hours: 340,
    rating: 4.8,
    reviews: 33,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face',
    skills: ['MS Office', 'Internet Basics', 'Typing']
  },
  {
    id: 16,
    name: 'Dr. Abhinav Reddy',
    role: 'AI Fundamentals Teacher',
    hours: 520,
    rating: 4.9,
    reviews: 37,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    skills: ['Basic AI', 'Logic Building', 'Projects']
  },
  {
    id: 17,
    name: 'Ms. Tanvi Pandey',
    role: 'Computer Science / Coding Mentor',
    hours: 280,
    rating: 4.7,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face',
    skills: ['Scratch', 'Python Basics', 'Block Coding']
  },
  {
    id: 18,
    name: 'Mr. Arjun Bhaskar',
    role: 'Game Design Teacher',
    hours: 390,
    rating: 4.8,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
    skills: ['Game Mechanics', '3D Design', 'Unity Basics']
  },
  {
    id: 19,
    name: 'Ms. Priya Kapoor',
    role: 'Marketing & Communication Mentor',
    hours: 460,
    rating: 4.9,
    reviews: 51,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    skills: ['Public Speaking', 'Branding', 'Writing']
  },
  {
    id: 20,
    name: 'Dr. Nikhil Kulkarni',
    role: 'Engineering Graphics Teacher',
    hours: 890,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
    skills: ['Technical Drawing', 'AutoCAD', 'Isometric Views']
  }
];


  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: '#FFD93D' }}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ color: '#FFD93D' }}>☆</span>);
    }

    return stars;
  };

  return (
    <div>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Header Section */}
        <div style={{ backgroundColor: '#e9ecef', padding: '60px 0' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="mb-4">
                  <p className="text-muted mb-2" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                    HOME / MENTORS
                  </p>
                  
                  <h1 className="display-4 fw-bold text-dark mb-4">
                    Our Mentors
                  </h1>
                  
                  <p className="lead text-dark mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                    Experts and mentors artis at placerat. Leg integer malesuada nunc vel 
                    risus Et sollicitud non molestie sapil molstie nex dis. Facilibus finibus 
                    mollis mauris lacinia rutrum.
                  </p>

                  {/* Search Section */}
                  <div className="row g-0" style={{ maxWidth: '500px' }}>
                    <div className="col-8">
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
                    <div className="col-4">
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
              </div>

              <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                {/* Tablet Illustration */}
                <div 
                  className="bg-dark rounded-4 p-3 shadow-lg position-relative"
                  style={{ 
                    width: '280px', 
                    height: '200px',
                    backgroundColor: '#2c2c2c',
                    border: '8px solid #333'
                  }}
                >
                  <div 
                    className="bg-warning rounded-3 h-100 p-2 position-relative overflow-hidden"
                    style={{ backgroundColor: '#FFD93D' }}
                  >
                    <div className="row g-1 h-100">
                      <div className="col-6">
                        <div className="bg-white rounded-2 h-50 mb-1 d-flex align-items-center justify-content-center">
                          <div className="bg-dark rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                        </div>
                        <div className="bg-white rounded-2 h-50 d-flex align-items-center justify-content-center">
                          <div className="bg-warning rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-white rounded-2 h-50 mb-1 d-flex align-items-center justify-content-center">
                          <div className="bg-success rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                        </div>
                        <div className="bg-white rounded-2 h-50 d-flex align-items-center justify-content-center">
                          <div className="bg-primary rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Grid Section */}
        <div className="container py-5">
          <div className="row g-4">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                  <div className="card-body text-center p-4">
                    {/* Profile Image */}
                    <div className="mb-3">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="rounded-3 shadow-sm"
                        style={{ 
                          width: '120px', 
                          height: '120px', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    {/* Name and Role */}
                    <h5 className="fw-bold text-dark mb-2">{mentor.name}</h5>
                    <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                      {mentor.role}
                    </p>

                    {/* Skills */}
                    <div className="mb-3">
                      {mentor.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="badge me-1 mb-1"
                          style={{ 
                            backgroundColor: '#FFD93D',
                            color: '#333',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="row text-center mb-3">
                      <div className="col-4">
                        <div className="d-flex align-items-center justify-content-center mb-1">
                          <span 
                            className="badge rounded-pill me-1"
                            style={{ backgroundColor: '#FFD93D', color: '#333' }}
                          >
                            {mentor.hours}
                          </span>
                        </div>
                        <small className="text-muted">Hours</small>
                      </div>
                      <div className="col-4">
                        <div className="mb-1">
                          {renderStars(mentor.rating)}
                        </div>
                        <small className="text-muted">{mentor.rating}</small>
                      </div>
                      <div className="col-4">
                        <div className="mb-1">
                          <span className="fw-bold text-dark">{mentor.reviews}</span>
                        </div>
                        <small className="text-muted">Reviews</small>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      className="btn btn-outline-dark btn-sm w-100"
                      style={{ 
                        borderRadius: '25px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#FFD93D';
                        e.target.style.borderColor = '#FFD93D';
                        e.target.style.color = '#333';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#333';
                        e.target.style.color = '#333';
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-lg-3 col-md-6">
                <h2 className="display-5 fw-bold text-dark mb-2">500+</h2>
                <p className="text-muted mb-0">Students Placed to job in our courses</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h2 className="display-5 fw-bold text-dark mb-2">1500+</h2>
                <p className="text-muted mb-0">Students Passed Our Competitons and Got a Job</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h2 className="display-5 fw-bold text-dark mb-2">25/75</h2>
                <p className="text-muted mb-0">The Ratio of Theory and Practice in Each Course</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h2 className="display-5 fw-bold text-dark mb-2">40+</h2>
                <p className="text-muted mb-0">We teach subjects from 4 continents and over 40 countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMentors;