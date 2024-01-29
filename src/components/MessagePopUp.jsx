import React from "react";
// import "./Dialog.css";
import "./App.css"

function MessagePopUp({ show, onClose, content }) {
  if (!show) return <></>;
  return (
    <div className="dialog">
      <div className="dialog-content">
        <div className="dialog-header">
          <h4 className="dialog-title">Satus</h4>
        </div>
        <div className="dialog-body">{content}</div>
        <div className="dialog-footer">
          <button className="dialog-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessagePopUp;
