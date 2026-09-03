import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = (props) =>{
    const host = process.env.REACT_APP_API_URL || "http://localhost:5000";
    const [credential, setCredential] = useState({name:"", email: "", password:"", cpassword:""});
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password, cpassword} = credential;
        if(password !== cpassword){
            alert("Password and Confirm Password must be same");
            return;
        }
        const response= await fetch(`${host}/api/auth/createuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);

        if (json.success === true){
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Account Created Successfully", "success");
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
            <div className="card border-0 shadow-lg auth-card" style={{ borderTop: "5px solid #f093fb" }}>
                <div className="card-body auth-card-body">
                    <div className="text-center mb-4">
                        <div className="icon-box mx-auto mb-3" style={{
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                        }}>
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <h2 className="fw-bold mb-2 auth-title" style={{
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Create Account
                        </h2>
                        <p className="text-muted auth-subtitle">Create an account to use iNotebook</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold auth-label">
                                <i className="fas fa-user me-2 text-info"></i>Name
                            </label>
                            <input
                                type="text"
                                className="form-control auth-input"
                                id="name"
                                name='name'
                                onChange={onChange}
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold auth-label">
                                <i className="fas fa-envelope me-2 text-primary"></i>Email address
                            </label>
                            <input
                                type="email"
                                className="form-control auth-input"
                                id="email"
                                name='email'
                                onChange={onChange}
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold auth-label">
                                <i className="fas fa-lock me-2 text-success"></i>Password
                            </label>
                            <input
                                type="password"
                                className="form-control auth-input"
                                id="password"
                                name='password'
                                onChange={onChange}
                                minLength={5}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cpassword" className="form-label fw-semibold auth-label">
                                <i className="fas fa-check-circle me-2 text-warning"></i>Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control auth-input"
                                id="cpassword"
                                name='cpassword'
                                onChange={onChange}
                                minLength={5}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-100 fw-bold signup-btn auth-submit-btn"
                            style={{
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                border: "none",
                                color: "white"
                            }}
                        >
                            <i className="fas fa-rocket me-2"></i>Create Account
                        </button>
                    </form>

                    <div className="auth-divider">
                        <div className="auth-divider-line"></div>
                        <span className="auth-divider-text">OR</span>
                        <div className="auth-divider-line"></div>
                    </div>

                    <div className="text-center">
                        <p className="text-muted mb-3 auth-subtitle">Already have an account?</p>
                        <Link
                            to="/login"
                            className="btn btn-outline-primary w-100 fw-semibold signup-link-btn auth-submit-btn"
                        >
                            <i className="fas fa-sign-in-alt me-2"></i>Login
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4 mb-5">
                <small className="text-muted auth-footer-text">
                    <i className="fas fa-shield-alt me-1"></i>
                    By signing up, you agree to our terms and privacy policy
                </small>
            </div>

            <style>{`
                .auth-container {
                    max-width: 500px;
                    margin: 8px auto 0;
                    padding: 0 16px;
                }
                .auth-card-body { padding: 1.75rem; }

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
                .card:hover .icon-box { transform: scale(1.1) rotate(-5deg); }

                .auth-title { font-size: 1.7rem; }
                .auth-subtitle { font-size: 0.95rem; }
                .auth-label { font-size: 0.92rem; }

                .auth-input {
                    border-radius: 10px;
                    padding: 0.65rem 0.9rem;
                    font-size: 1rem;
                }
                .auth-input:focus {
                    border-color: #f093fb;
                    box-shadow: 0 0 0 0.2rem rgba(240, 147, 251, 0.25);
                }

                .auth-submit-btn {
                    border-radius: 10px;
                    padding: 0.7rem 1rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                .signup-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(240, 147, 251, 0.4);
                }

                .auth-divider {
                    display: flex;
                    align-items: center;
                    margin: 20px 0;
                }
                .auth-divider-line { flex: 1; border-bottom: 1px solid #ddd; }
                .auth-divider-text { padding: 0 12px; color: #888; font-size: 0.85rem; }

                .signup-link-btn {
                    color: #f5576c;
                    border-color: #f5576c;
                    transition: all 0.3s ease;
                }
                .signup-link-btn:hover {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    border-color: #f5576c;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(240, 147, 251, 0.3);
                }

                .auth-footer-text { font-size: 0.8rem; }

                @media (max-width: 480px) {
                    .auth-container { margin-top: 4px; padding: 0 12px; }
                    .auth-card-body { padding: 1.1rem 1rem; }
                    .icon-box { width: 56px; height: 56px; font-size: 26px; margin-bottom: 10px !important; }
                    .auth-title { font-size: 1.3rem; }
                    .auth-subtitle { font-size: 0.82rem; }
                    .auth-label { font-size: 0.85rem; }
                    .auth-input { padding: 0.5rem 0.75rem; font-size: 0.9rem; }
                    .auth-submit-btn { padding: 0.6rem 0.9rem; font-size: 0.9rem; }
                    .auth-divider { margin: 14px 0; }
                    .auth-footer-text { font-size: 0.72rem; }
                    .mb-3 { margin-bottom: 0.7rem !important; }
                    .mb-4 { margin-bottom: 0.9rem !important; }
                }
            `}</style>
        </div>
    )
}

export default Signup