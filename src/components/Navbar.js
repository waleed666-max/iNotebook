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
    const showAuthButtons = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/about";

    const AuthButtons = () => (
        !localStorage.getItem('token') ? (
            showAuthButtons && (
                <div className="d-flex gap-2 auth-btn-group">
                    <Link className="btn btn-light auth-icon-btn" to="/login" title="Login">
                        <i className="fas fa-sign-in-alt"></i>
                        <span className="auth-btn-label">Login</span>
                    </Link>
                    <Link className="btn btn-outline-light auth-icon-btn" to="/signup" title="Sign Up">
                        <i className="fas fa-user-plus"></i>
                        <span className="auth-btn-label">Sign Up</span>
                    </Link>
                </div>
            )
        ) : (
            <button className="btn btn-light auth-icon-btn" onClick={handleLogout} title="Logout">
                <i className="fas fa-sign-out-alt"></i>
                <span className="auth-btn-label">Logout</span>
            </button>
        )
    );

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    marginBottom: "28px"
}}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold d-flex align-items-center brand-text" to="/">
                        <i className="fas fa-book-open me-2 brand-icon"></i>
                        iNotebook
                    </Link>

                    <div className="d-flex align-items-center order-lg-2">
                        {/* Desktop only auth buttons, in the top row */}
                        <div className="d-none d-lg-flex">
                            <AuthButtons />
                        </div>

                        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse order-lg-1" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mobile-nav-list">
                            <li className="nav-item">
                              <Link
    className={`nav-link fw-semibold nav-link-custom ${location.pathname==="/"? "active" : ""}`}
    aria-current="page"
    to={localStorage.getItem('token') ? "/" : "/login"}
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

                        {/* Mobile only auth buttons, inside the dropdown menu */}
                        <div className="d-lg-none mobile-auth-wrap">
                            <AuthButtons />
                        </div>
                    </div>
                </div>
            </nav>

            <style>{`
                .brand-text { font-size: 1.5rem; transition: transform 0.3s ease; }
                .brand-text:hover { transform: scale(1.05); }
                .brand-icon { font-size: 1.3rem; }

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

                .auth-icon-btn {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    border-radius: 50px;
                    font-weight: 600;
                    padding: 8px 16px;
                    color: #667eea !important;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }
                .btn-outline-light.auth-icon-btn {
                    color: #fff !important;
                    border: 2px solid rgba(255,255,255,0.6);
                }
                .auth-icon-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.3);
                }
                .btn-outline-light.auth-icon-btn:hover {
                    background: white !important;
                    color: #667eea !important;
                }

                @media (max-width: 991px) {
    .mobile-nav-list {
        margin-top: 14px;
    }
}
                .mobile-auth-wrap {
                    margin-top: 16px;
                    padding-top: 14px;
                    border-top: 1px solid rgba(255,255,255,0.2);
                    padding-bottom: 8px;
                }
                .mobile-auth-wrap .auth-btn-group {
                    flex-direction: column;
                }
                .mobile-auth-wrap .auth-icon-btn {
                    width: 100%;
                    justify-content: center;
                    border-radius: 10px;
                    padding: 10px 16px;
                }
                .mobile-auth-wrap .auth-btn-label {
                    display: inline !important;
                }

                @media (max-width: 480px) {
                    .brand-text { font-size: 1.15rem; }
                    .brand-icon { font-size: 1.05rem; }
                }
            `}</style>
        </div>
    )
}

export default Navbar