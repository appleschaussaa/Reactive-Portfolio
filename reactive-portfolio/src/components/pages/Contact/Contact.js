import React from "react";

export default function Contact() {
    return (
        <div className="row">
            <h2>Contact</h2>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input type="string" className="form-control" id="nameInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="messageTextInput" className="form-label">Message</label>
                <textarea className="form-control" id="messageTextInput" rows="3"></textarea>
            </div>
        </div>
    )
}