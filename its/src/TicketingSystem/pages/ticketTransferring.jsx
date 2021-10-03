import React from "react";

function TransferTicket() {
  return (
    <div className="TicketTransfer">
    <div className="container px-5 my-5">
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="ticketNumber"
        type="text"
        placeholder="Ticket Number"
        data-sb-validations="required"
      />
      <label htmlFor="ticketNumber">Ticket Number</label>
      <div
        className="invalid-feedback"
        data-sb-feedback="ticketNumber:required"
      >
        Ticket Number is required.
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="ticketBreifDescription"
        type="text"
        placeholder="Ticket Breif Description"
        style={{ height: "10rem" }}
        data-sb-validations="required"
        defaultValue={""}
      />
      <label htmlFor="ticketBreifDescription">Ticket Breif Description</label>
      <div
        className="invalid-feedback"
        data-sb-feedback="ticketBreifDescription:required"
      >
        Ticket Breif Description is required.
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">Transfer Reason</label>
      <div className="form-check">
        <input
          className="form-check-input"
          id="needAuthorization"
          type="checkbox"
          name="transferReason"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="needAuthorization">
          Need Authorization
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="outOfAgentResponsibilityScoope"
          type="checkbox"
          name="transferReason"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="outOfAgentResponsibilityScoope"
        >
          Out of Agent Responsibility Scoope
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="notAnItRelatedProblem"
          type="checkbox"
          name="transferReason"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="notAnItRelatedProblem">
          Not an IT-related problem
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="other"
          type="checkbox"
          name="transferReason"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
      <div
        className="invalid-feedback"
        data-sb-feedback="transferReason:required"
      >
        One option is required.
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="additionalInformation"
        type="text"
        placeholder="Additional Information"
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="additionalInformation">Additional Information</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="additionalEmail"
        type="email"
        placeholder="Additional Email "
        data-sb-validations="required,email"
      />
      <label htmlFor="additionalEmail">Additional Email </label>
      <div
        className="invalid-feedback"
        data-sb-feedback="additionalEmail:required"
      >
        Additional Email is required.
      </div>
      <div
        className="invalid-feedback"
        data-sb-feedback="additionalEmail:email"
      >
        Additional Email Email is not valid.
      </div>
    </div>
    <div className="mb-3">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          id="closeThisTicketImmediatelyAfterTransferred"
          type="checkbox"
          name="closeThisTicketImmediatelyAfterTransferred"
        />
        <label
          className="form-check-label"
          htmlFor="closeThisTicketImmediatelyAfterTransferred"
        >
          Close this ticket immediately after transferred
        </label>
      </div>
    </div>
    <div className="d-none" id="submitSuccessMessage">
      <div className="text-center mb-3">
        <div className="fw-bolder">Form submission successful!</div>
        <p>To activate this form, sign up at</p>
        <a href="https://startbootstrap.com/solution/contact-forms">
          https://startbootstrap.com/solution/contact-forms
        </a>
      </div>
    </div>
    <div className="d-none" id="submitErrorMessage">
      <div className="text-center text-danger mb-3">Error sending message!</div>
    </div>
    <div className="d-grid">
      <button
        className="btn btn-primary btn-lg disabled"
        id="submitButton"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>
  );
}

export default TransferTicket;