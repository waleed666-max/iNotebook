import React, {useContext, useEffect, useState, useRef } from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes, getNotes, editNote} = context;
    const navigate = useNavigate();

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle:"", edescription:"", etag:""});

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (!token){
            navigate("/login");
            return;
        }
        getNotes();
        //eslint-disable-next-line
    },[])

    const updateNote = (currentNote)=>{
        ref.current.click();
        setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
    }

    const handleClick=(e)=>{
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Note Updated Successfully", "success");
    }

    const onchange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    if (!localStorage.getItem('token')) {
        return null;
    }  

    return (
        <>
            <AddNote showAlert={props.showAlert}/>

            {/* Hidden modal trigger */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Enhanced Edit Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg">
                        <div className="modal-header" style={{ 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white"
                        }}>
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                                <i className="fas fa-edit me-2"></i>Edit Note
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label fw-semibold">
                                        <i className="fas fa-heading me-2 text-primary"></i>Title
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="etitle" 
                                        name="etitle" 
                                        value={note.etitle} 
                                        onChange={onchange} 
                                        minLength={5} 
                                        required
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label fw-semibold">
                                        <i className="fas fa-align-left me-2 text-success"></i>Description
                                    </label>
                                    <textarea 
                                        className="form-control" 
                                        id="edescription" 
                                        name="edescription" 
                                        value={note.edescription} 
                                        onChange={onchange}  
                                        minLength={5} 
                                        rows="4"
                                        required
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label fw-semibold">
                                        <i className="fas fa-tag me-2 text-warning"></i>Tag
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="etag" 
                                        name="etag" 
                                        value={note.etag} 
                                        onChange={onchange}
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0">
                            <button ref={refClose} type="button" className="btn btn-secondary px-4" data-bs-dismiss="modal">
                                <i className="fas fa-times me-2"></i>Close
                            </button>
                            <button 
                                disabled={note.etitle.length < 5 || note.edescription.length < 5} 
                                onClick={handleClick} 
                                type="button" 
                                className="btn px-4 update-btn"
                                style={{
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    border: "none",
                                    color: "white"
                                }}
                            >
                                <i className="fas fa-check me-2"></i>Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
   
            {/* Your Notes Section */}
            <div className="container my-4">
                <div className="card border-0 shadow-lg">
                    <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex align-items-center mb-4">
                            <div className="icon-box me-3" style={{ 
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                borderRadius: "12px",
                                padding: "12px",
                                color: "white"
                            }}>
                                <i className="fas fa-sticky-note" style={{ fontSize: "24px" }}></i>
                            </div>
                            <h2 className="mb-0 fw-bold" style={{ 
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                                Your Notes ({notes.length})
                            </h2>
                        </div>

                        {/* Notes Grid */}
                        {notes.length === 0 ? (
                            <div className="text-center py-5">
                                <i className="fas fa-inbox fa-4x mb-3" style={{ color: "#ddd" }}></i>
                                <h4 className="text-muted">No notes yet!</h4>
                                <p className="text-muted">Create your first note above to get started.</p>
                            </div>
                        ) : (
                            <div className="row g-4">
                                {notes.map((note)=>{
                                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .update-btn {
                    transition: all 0.3s ease;
                }

                .update-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
                }

                .icon-box {
                    transition: transform 0.3s ease;
                }

                .card:hover .icon-box {
                    transform: rotate(5deg) scale(1.1);
                }
            `}</style>
        </>
    )
}

export default Notes