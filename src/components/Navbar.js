import React from 'react'
import{ Link, useLocation }from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        });
    };

    let location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}>
                <div className="container-fluid">
                    {/* Brand with icon */}
                    <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{ fontSize: "1.5rem" }}>
                        <i className="fas fa-book-open me-2" style={{ fontSize: "1.3rem" }}></i>
                        iNotebook
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link fw-semibold nav-link-custom ${location.pathname==="/"? "active" : ""}`} 
                                    aria-current="page" 
                                    to="/"
                                >
                                    <i className="fas fa-home me-1"></i>Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link fw-semibold nav-link-custom ${location.pathname==="/about"? "active" : ""}`} 
                                    to="/about"
                                >
                                    <i className="fas fa-info-circle me-1"></i>About
                                </Link>
                            </li>
                        </ul>
                        
                        {!localStorage.getItem('token') ? (
                            <div className="d-flex">
                                <Link 
                                    className="btn btn-light mx-2 fw-semibold auth-btn" 
                                    to="/login"
                                    style={{ borderRadius: "8px" }}
                                >
                                    <i className="fas fa-sign-in-alt me-1"></i>Login
                                </Link>
                                <Link 
                                    className="btn btn-outline-light mx-2 fw-semibold auth-btn-outline" 
                                    to="/signup"
                                    style={{ borderRadius: "8px" }}
                                >
                                    <i className="fas fa-user-plus me-1"></i>Sign Up
                                </Link>
                            </div>
                        ) : (
                            <button 
                                className="btn btn-light fw-semibold logout-btn" 
                                onClick={handleLogout}
                                style={{ borderRadius: "8px" }}
                            >
                                <i className="fas fa-sign-out-alt me-1"></i>Logout
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* CSS Styling */}
            <style>{`
                .navbar-brand {
                    transition: transform 0.3s ease;
                }

                .navbar-brand:hover {
                    transform: scale(1.05);
                }

                .nav-link-custom {
                    transition: all 0.3s ease;
                    border-radius: 8px;
                    padding: 8px 16px !important;
                    margin: 0 4px;
                }

                .nav-link-custom:hover {
                    background: rgba(255,255,255,0.2);
                    transform: translateY(-2px);
                }

                .nav-link-custom.active {
                    background: rgba(255,255,255,0.3);
                    font-weight: bold;
                }

                .auth-btn {
                    transition: all 0.3s ease;
                    color: #667eea !important;
                }

                .auth-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.3);
                    background: white !important;
                }

                .auth-btn-outline {
                    transition: all 0.3s ease;
                    border: 2px solid white !important;
                }

                .auth-btn-outline:hover {
                    background: white !important;
                    color: #667eea !important;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.3);
                }

                .logout-btn {
                    transition: all 0.3s ease;
                    color: #667eea !important;
                }

                .logout-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.3);
                    background: white !important;
                }
            `}</style>
        </div>
    )
}

export default Navbar