import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  if (!props.alert) return null;

  return (
    <div className="toast-alert-wrapper">
      <div className={`toast-alert toast-${props.alert.type}`} role="alert">
        <i className={`fas ${props.alert.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
        <span><strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}</span>
      </div>

      <style>{`
        .toast-alert-wrapper {
          position: fixed;
          top: 78px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2000;
          width: 92%;
          max-width: 420px;
          pointer-events: none;
        }
        .toast-alert {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-radius: 12px;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 500;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          animation: toastSlideIn 0.35s ease;
          pointer-events: auto;
        }
        .toast-success { background: linear-gradient(135deg, #2ecc71, #27ae60); }
        .toast-danger  { background: linear-gradient(135deg, #ff6b6b, #e74c3c); }

        @keyframes toastSlideIn {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .toast-alert-wrapper { top: 66px; width: 94%; }
          .toast-alert { font-size: 0.85rem; padding: 12px 14px; }
        }
      `}</style>
    </div>
  )
}

export default Alert