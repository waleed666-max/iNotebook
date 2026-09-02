import React, {useContext} from 'react';
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-4'>
            <div className="card note-card border-0 shadow-sm h-100" style={{ 
                borderLeft: "4px solid #667eea",
                transition: "all 0.3s ease"
            }}>
                <div className="card-body p-4">
                    {/* Header with tag */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="card-title fw-bold mb-0" style={{ color: "#667eea" }}>
                            {note.title}
                        </h5>
                        {note.tag && (
                            <span className="badge" style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white"
                            }}>
                                <i className="fas fa-tag me-1"></i>{note.tag}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="card-text text-muted" style={{ 
                        minHeight: "60px",
                        fontSize: "0.95rem"
                    }}>
                        {note.description}
                    </p>

                    {/* Action buttons */}
                    <div className="d-flex gap-2 mt-3">
                        <button 
                            className="btn btn-sm flex-fill action-btn edit-btn"
                            onClick={() => { updateNote(note) }}
                            style={{
                                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                border: "none",
                                color: "white",
                                fontWeight: "500"
                            }}
                        >
                            <i className="far fa-edit me-1"></i>Edit
                        </button>
                        <button 
                            className="btn btn-sm flex-fill action-btn delete-btn"
                            onClick={() => { 
                                deleteNote(note._id); 
                                props.showAlert("Note Deleted Successfully", "success");
                            }}
                            style={{
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                border: "none",
                                color: "white",
                                fontWeight: "500"
                            }}
                        >
                            <i className="far fa-trash-alt me-1"></i>Delete
                        </button>
                    </div>
                </div>

                
                <div className="card-footer bg-transparent border-0 p-3 pt-0">
                    <small className="text-muted">
                        <i className="far fa-clock me-1"></i>
                        {new Date(note.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                        })}
                    </small>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .note-card {
                    cursor: pointer;
                }

                .note-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
                }

                .action-btn {
                    transition: all 0.3s ease;
                    border-radius: 8px;
                }

                .action-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                .edit-btn:hover {
                    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4) !important;
                }

                .delete-btn:hover {
                    box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4) !important;
                }

                .card-title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .card-text {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            `}</style>
        </div>
    )
}

export default Noteitem