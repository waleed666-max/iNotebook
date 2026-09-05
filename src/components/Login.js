import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const host = process.env.REACT_APP_API_URL || "http://localhost:5000";

    const [credential, setCredential] = useState({email: "", password:""});
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response= await fetch(`${host}/api/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully", "success");
            navigate("/");
        }
        else{
           props.showAlert(json.error, "danger");
        }
    }

    const onChange=(e)=> {
        setCredential({...credential, [e.target.name]: e.target.value})
    }

    return (
        <div className="auth-container">
            <div className="card border-0 shadow-lg auth-card" style={{ borderTop: "5px solid #667eea" }}>
                <div className="card-body auth-card-body">
                    <div className="text-center mb-4">
                        <div className="icon-box mx-auto mb-3" style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        }}>
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <h2 className="fw-bold mb-2 auth-title" style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Welcome Back!
                        </h2>
                        <p className="text-muted auth-subtitle">Login to continue to iNotebook</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold auth-label">
                                <i className="fas fa-envelope me-2 text-primary"></i>Email address
                            </label>
                            <input
                                type="email"
                                className="form-control auth-input"
                                value={credential.email}
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                onChange={onChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold auth-label">
                                <i className="fas fa-lock me-2 text-success"></i>Password
                            </label>
                            <input
                                type="password"
                                className="form-control auth-input"
                                id="password"
                                value={credential.password}
                                name="password"
                                onChange={onChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-100 fw-bold mb-1 login-btn auth-submit-btn"
                            style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                border: "none",
                                color: "white"
                            }}
                        >
                            <i className="fas fa-sign-in-alt me-2"></i>Login
                        </button>
                    </form>

                    <div className="auth-divider">
                        <div className="auth-divider-line"></div>
                        <span className="auth-divider-text">OR</span>
                        <div className="auth-divider-line"></div>
                    </div>

                    <div className="text-center">
                        <p className="text-muted mb-3 auth-subtitle">Don't have an account?</p>
                        <Link
                            to="/signup"
                            className="btn btn-outline-primary w-100 fw-semibold signup-link-btn auth-submit-btn"
                        >
                            <i className="fas fa-user-plus me-2"></i>Create New Account
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <small className="text-muted auth-footer-text">
                    <i className="fas fa-shield-alt me-1"></i>
                    Your data is secure with us
                </small>
            </div>

            <style>{`
                .auth-container {
    max-width: 450px;
    margin: 0 auto;
    padding: 0 16px;
}
                .auth-card-body { padding: 2rem; }

                .icon-box {
                    border-radius: 50%;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 40px;
                    transition: transform 0.3s ease;
                }
                .card:hover .icon-box { transform: scale(1.1) rotate(5deg); }

                .auth-title { font-size: 1.7rem; }
                .auth-subtitle { font-size: 0.95rem; }
                .auth-label { font-size: 0.92rem; }

                .auth-input {
                    border-radius: 10px;
                    padding: 0.65rem 0.9rem;
                    font-size: 1rem;
                }
                .auth-input:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
                }

                .auth-submit-btn {
                    border-radius: 10px;
                    padding: 0.7rem 1rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                .login-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                }

                .auth-divider {
                    display: flex;
                    align-items: center;
                    margin: 20px 0;
                }
                .auth-divider-line { flex: 1; border-bottom: 1px solid #ddd; }
                .auth-divider-text { padding: 0 12px; color: #888; font-size: 0.85rem; }

                .signup-link-btn {
                    color: #667eea;
                    border-color: #667eea;
                    transition: all 0.3s ease;
                }
                .signup-link-btn:hover {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-color: #667eea;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
                }

                .auth-footer-text { font-size: 0.8rem; }
                                  @media (max-width: 480px) {
    .auth-container { padding: 0 12px; }
    .auth-card-body { padding: 1.5rem 1.25rem; }
    .icon-box { width: 64px; height: 64px; font-size: 30px; margin-bottom: 12px !important; }
    .auth-title { font-size: 1.45rem; }
    .auth-subtitle { font-size: 1.0rem; }
    .auth-label { font-size: .99rem; }
    .auth-input { padding: 0.6rem 0.85rem; font-size: 0.97rem; }
    .auth-submit-btn { padding: 0.65rem 1rem; font-size: 0.95rem; }
    .auth-divider { margin: 16px 0; }
    .auth-footer-text { font-size: 0.78rem; }
    .mb-3 { margin-bottom: 0.9rem !important; }
    .mb-4 { margin-bottom: 1.1rem !important; }
}
    
                
            `}</style>
        </div>
    )
}

export default Login