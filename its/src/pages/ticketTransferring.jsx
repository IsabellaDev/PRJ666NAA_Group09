import React from "react";
import {withRouter} from 'react-router-dom';
function TransferTicket() {
  
    return (

      <div className="container px-5 my-5">
        <form id="ticketxfr" >
          <div className="form-floating mb-3">
            <input className="form-control" id="ticketNumber" type="text" placeholder="Ticket Number" data-sb-validations />
            <label htmlFor="ticketNumber">Ticket Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="ticketBreifing" type="text" placeholder="Ticket Breifing" style={{height: '10rem'}} data-sb-validations defaultValue={""} />
            <label htmlFor="ticketBreifing">Ticket Breifing</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" id="transferTo" aria-label="Transfer to">
              <option value="IT Service Manager">IT Service Manager</option>
              <option value="Network Office">Network Office</option>
              <option value="Electrical Office">Electrical Office</option>
              <option value="Security Office">Security Office</option>
              <option value="Office of Registrar">Office of Registrar</option>
              <option value="Office of Admission">Office of Admission</option>
              <option value="International Student Office">International Student Office</option>
            </select>
            <label htmlFor="transferTo">Transfer to</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="additionalEmail" type="email" placeholder="Additional Email" data-sb-validations="email" />
            <label htmlFor="additionalEmail">Additional Email</label>
            <div className="invalid-feedback" data-sb-feedback="additionalEmail:email">Additional Email Email is not valid.</div>
          </div>
          <div className="mb-3">
            <label className="form-label d-block">Transfer Reason</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="needAdditionalAuthorization" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="needAdditionalAuthorization">Need Additional Authorization</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="outsideAgentScoope" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="outsideAgentScoope">Outside Agent Scoope</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="notAnItIssue" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="notAnItIssue">Not an IT Issue</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="notAnEnglishSpeaker" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="notAnEnglishSpeaker">Not an English speaker</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="other" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
            <div className="invalid-feedback" data-sb-feedback="transferReason:required">One option is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="additionalCommentNotVisibleToClient" type="text" placeholder="Additional Comment (not visible to client)" style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
            <label htmlFor="additionalCommentNotVisibleToClient">Additional Comment (not visible to client)</label>
            <div className="invalid-feedback" data-sb-feedback="additionalCommentNotVisibleToClient:required">Additional Comment (not visible to client) is required.</div>
          </div>
          
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default withRouter(TransferTicket);