import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
 
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
           // props.showAlert("Invalid credentials", "danger");
        }
    }
 
    const onChange=(e)=> {
        setCredential({...credential, [e.target.name]: e.target.value})
    }

    return (
        <div className="container" style={{ maxWidth: "500px", marginTop: "1px" }}>
            
            <div className="card border-0 shadow-lg" style={{ borderTop: "5px solid #f093fb" }}>
                <div className="card-body p-3">
                   
                    <div className="text-center mb-4">
                        <div className="icon-box mx-auto mb-3" style={{ 
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white"
                        }}>
                            <i className="fas fa-user-plus" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h2 className="fw-bold mb-2" style={{ 
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Create Account
                        </h2>
                        <p className="text-muted">Create an account to use iNotebook</p>
                    </div>

                   
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                                <i className="fas fa-user me-2 text-info"></i>Name
                            </label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="name" 
                                name='name' 
                                onChange={onChange}
                                aria-describedby="emailHelp"
                                style={{ borderRadius: "10px" }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                <i className="fas fa-envelope me-2 text-primary"></i>Email address
                            </label>
                            <input 
                                type="email" 
                                className="form-control form-control-lg" 
                                id="email" 
                                name='email' 
                                onChange={onChange} 
                                aria-describedby="emailHelp"
                                style={{ borderRadius: "10px" }}
                            />
                          
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">
                                <i className="fas fa-lock me-2 text-success"></i>Password
                            </label>
                            <input 
                                type="password" 
                                className="form-control form-control-lg" 
                                id="password" 
                                name='password' 
                                onChange={onChange}  
                                minLength={5} 
                                required
                                style={{ borderRadius: "10px" }}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cpassword" className="form-label fw-semibold">
                                <i className="fas fa-check-circle me-2 text-warning"></i>Confirm Password
                            </label>
                            <input 
                                type="password" 
                                className="form-control form-control-lg" 
                                id="cpassword"
                                name='cpassword' 
                                onChange={onChange} 
                                minLength={5} 
                                required
                                style={{ borderRadius: "10px" }}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-lg w-100 fw-bold signup-btn"
                            style={{
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                border: "none",
                                color: "white",
                                borderRadius: "10px"
                            }}
                        >
                            <i className="fas fa-rocket me-2"></i>Create Account
                        </button>
                    </form>

                </div>
            </div>

            
            <div className="text-center mt-4 mb-5">
                <small className="text-muted">
                    <i className="fas fa-shield-alt me-1"></i>
                    By signing up, you agree to our terms and privacy policy
                </small>
            </div>

            {/* CSS - Only styling */}
            <style>{`
                .signup-btn {
                    transition: all 0.3s ease;
                }

                .signup-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(240, 147, 251, 0.4);
                }

                .form-control:focus {
                    border-color: #f093fb;
                    box-shadow: 0 0 0 0.2rem rgba(240, 147, 251, 0.25);
                }

                .icon-box {
                    transition: transform 0.3s ease;
                }

                .card:hover .icon-box {
                    transform: scale(1.1) rotate(-5deg);
                }
            `}</style>
        </div>
    )
}

export default Signup