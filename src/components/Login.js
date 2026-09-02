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
            props.showAlert("Invalid Details", "danger");
        }
    }
 
    const onChange=(e)=> {
        setCredential({...credential, [e.target.name]: e.target.value})
    }

    return (
        <div className="container" style={{ maxWidth: "450px", marginTop: "8px" }}>
            {/* Card wrapper */}
            <div className="card border-0 shadow-lg" style={{ borderTop: "5px solid #667eea" }}>
                <div className="card-body p-4">
                    {/* Header with icon */}
                    <div className="text-center mb-4">
                        <div className="icon-box mx-auto mb-3" style={{ 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white"
                        }}>
                            <i className="fas fa-user-circle" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h2 className="fw-bold mb-2" style={{ 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Welcome Back!
                        </h2>
                        <p className="text-muted">Login to continue to iNotebook</p>
                    </div>

                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label fw-semibold">
                                <i className="fas fa-envelope me-2 text-primary"></i>Email address
                            </label>
                            <input 
                                type="email" 
                                className="form-control form-control-lg" 
                                value={credential.email}   
                                id="email" 
                                name="email" 
                                aria-describedby="emailHelp" 
                                onChange={onChange}
                                style={{ borderRadius: "10px" }}
                            />
                            
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold">
                                <i className="fas fa-lock me-2 text-success"></i>Password
                            </label>
                            <input 
                                type="password" 
                                className="form-control form-control-lg" 
                                id="password" 
                                value={credential.password}  
                                name="password" 
                                onChange={onChange}
                                style={{ borderRadius: "10px" }}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-lg w-100 fw-bold mb-1 login-btn"
                            style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                border: "none",
                                color: "white",
                                borderRadius: "10px"
                            }}
                        >
                            <i className="fas fa-sign-in-alt me-2"></i>Login
                        </button>
                    </form>

                    
                    <div className="text-center my-4">
                        <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            textAlign: "center",
                            margin: "20px 0"
                        }}>
                            <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}></div>
                            <span className="px-3 text-muted" style={{ fontSize: "0.9rem" }}>OR</span>
                            <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}></div>
                        </div>
                    </div>

                    {/* Signup Link */}
                    <div className="text-center">
                        <p className="text-muted mb-3">Don't have an account?</p>
                        <Link 
                            to="/signup" 
                            className="btn btn-outline-primary btn-lg w-100 fw-semibold signup-link-btn"
                            style={{ borderRadius: "10px" }}
                        >
                            <i className="fas fa-user-plus me-2"></i>Create New Account
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
                <small className="text-muted">
                    <i className="fas fa-shield-alt me-1"></i>
                    Your data is secure with us
                </small>
            </div>

            {/* CSS - Only styling */}
            <style>{`
                .login-btn {
                    transition: all 0.3s ease;
                }

                .login-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                }

                .form-control:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
                }

                .icon-box {
                    transition: transform 0.3s ease;
                }

                .card:hover .icon-box {
                    transform: scale(1.1) rotate(5deg);
                }

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
            `}</style>
        </div>
    )
}

export default Login