import React, {useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""});

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""})
        props.showAlert("Note Added Successfully", "success");
    }

    const onchange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className="container my-2">
            {/* Card with gradient border */}
            <div className="card border-0 shadow-lg" style={{ borderLeft: "5px solid #667eea" }}>
                <div className="card-body p-4">
                    {/* Header with icon */}
                    <div className="d-flex align-items-center mb-4">
                        <div className="icon-box me-3" style={{ 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "12px",
                            padding: "12px",
                            color: "white"
                        }}>
                            <i className="fas fa-plus-circle" style={{ fontSize: "24px" }}></i>
                        </div>
                        <h2 className="mb-0 fw-bold" style={{ 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Add a New Note
                        </h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleClick}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-semibold">
                                <i className="fas fa-heading me-2 text-primary"></i>Title
                            </label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="title" 
                                name="title" 
                                placeholder="Enter note title..."
                                value={note.title} 
                                onChange={onchange}
                                minLength={5}
                                required
                                style={{ borderRadius: "10px" }}
                            />
                           
{note.title.trim().length > 0 && note.title.trim().length < 5 && (
  <small className="text-danger">
    Title must be at least 5 characters
  </small>
)}


                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-semibold">
                                <i className="fas fa-align-left me-2 text-success"></i>Description
                            </label>
                            <textarea 
                                className="form-control" 
                                id="description" 
                                name="description" 
                                rows="4" 
                                placeholder="Write your note here..."
                                onChange={onchange}  
                                value={note.description}
                                minLength={5}
                                required
                                style={{ borderRadius: "10px" }}
                            />
                              
 {note.description.trim().length > 0 && note.description.trim().length < 5 && (
  <small className="text-danger">
    Description must be at least 5 characters
  </small>
)}



                        </div>

                        <div className="mb-4">
                            <label htmlFor="tag" className="form-label fw-semibold">
                                <i className="fas fa-tag me-2 text-warning"></i>Tag (Optional)
                            </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tag" 
                                name="tag" 
                                placeholder="e.g., Work, Personal, Ideas..."
                                value={note.tag} 
                                onChange={onchange}
                                style={{ borderRadius: "10px" }}
                            />
                        </div>

                        <button 
                            disabled={note.title.trim().length < 5 || note.description.trim().length < 5} 
                            type="submit" 
                            className="btn btn-lg px-5 fw-bold add-note-btn"
                            style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                border: "none",
                                color: "white",
                                borderRadius: "10px"
                            }}
                        >
                            <i className="fas fa-save me-2"></i>Add Note
                        </button>
                    </form>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .icon-box {
                    transition: transform 0.3s ease;
                }

                .card:hover .icon-box {
                    transform: rotate(5deg) scale(1.1);
                }

                .form-control:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
                }

                .add-note-btn {
                    transition: all 0.3s ease;
                }

                .add-note-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                }

                .add-note-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    )
}

export default AddNote