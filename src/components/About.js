import React from "react";

const About = () => {
  return (
    <div className="container my-1">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          About iNotebook
        </h1>
        <p className="lead text-muted">
          Your personal cloud-based notebook for organizing thoughts and ideas
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="row g-4">
        
        {/* Card 1 - What is iNotebook */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-lg hover-card" style={{ borderLeft: "4px solid #667eea" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3" style={{ 
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white"
                }}>
                  <i className="fas fa-book" style={{ fontSize: "24px" }}></i>
                </div>
                <h5 className="card-title mb-0 fw-bold">What is iNotebook?</h5>
              </div>
              <p className="card-text text-muted">
                <strong>iNotebook</strong> is a modern, cloud-based note-taking application built with the MERN stack. 
                Organize your thoughts, ideas, and important information securely - accessible from anywhere, anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Key Features */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-lg hover-card" style={{ borderLeft: "4px solid #f093fb" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3" style={{ 
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white"
                }}>
                  <i className="fas fa-star" style={{ fontSize: "24px" }}></i>
                </div>
                <h5 className="card-title mb-0 fw-bold">Key Features</h5>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Create and save unlimited notes
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Edit or delete notes instantly
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Secure authentication system
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Clean and intuitive interface
                </li>
                <li className="mb-0">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Tag-based organization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 - Why Use */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-lg hover-card" style={{ borderLeft: "4px solid #4facfe" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3" style={{ 
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white"
                }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: "24px" }}></i>
                </div>
                <h5 className="card-title mb-0 fw-bold">Why Choose iNotebook?</h5>
              </div>
              <p className="card-text text-muted">
                Perfect for students, professionals, and anyone who needs a reliable place to store ideas. 
                Keep everything organized and never lose an important thought again. Access your notes from any device, anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 - Tech Stack */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-lg hover-card" style={{ borderLeft: "4px solid #43e97b" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3" style={{ 
                  background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white"
                }}>
                  <i className="fas fa-code" style={{ fontSize: "24px" }}></i>
                </div>
                <h5 className="card-title mb-0 fw-bold">Built With</h5>
              </div>
            
             
             <div className="d-flex flex-wrap gap-2">
  <span className="badge bg-primary px-3 py-2">
    <i className="fab fa-react me-2"></i>React
  </span>
  <span className="badge bg-success px-3 py-2">
    <i className="fab fa-node-js me-2"></i>Node.js
  </span>
  <span className="badge bg-warning text-dark px-3 py-2">
    <i className="fas fa-server me-2"></i>Express
  </span>
  <span className="badge bg-info px-3 py-2">
    <i className="fas fa-database me-2"></i>MongoDB
  </span>
  <span className="badge bg-secondary px-3 py-2">
    <i className="fab fa-bootstrap me-2"></i>Bootstrap
  </span>
  <span className="badge bg-dark px-3 py-2">
    <i className="fas fa-key me-2"></i>JWT Auth
  </span>
</div>

              
            </div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-3">
          <div className="stat-card p-4">
            <h2 className="display-5 fw-bold text-primary">100%</h2>
            <p className="text-muted mb-0">Secure</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="stat-card p-4">
            <h2 className="display-5 fw-bold text-success">24/7</h2>
            <p className="text-muted mb-0">Access</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="stat-card p-4">
            <h2 className="display-5 fw-bold text-info">Free</h2>
            <p className="text-muted mb-0">Forever</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5 p-5 rounded-3" style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}>
        <h3 className="text-white fw-bold mb-3">Ready to Get Started?</h3>
        <p className="text-white mb-4">Start organizing your thoughts today!</p>
        <h3 className="container text-white ">
          ©2026 | 666 | All Rights Reserved.
        </h3>
      </div>

      {/* Enhanced Hover Effect CSS */}
      <style>{`
        .hover-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
        }
        
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }

        .stat-card {
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          transform: scale(1.05);
        }

        .icon-box {
          transition: transform 0.3s ease;
        }

        .hover-card:hover .icon-box {
          transform: rotate(5deg) scale(1.1);
        }

        .badge {
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
      `}</style>

      

    </div>
  );
};

export default About;