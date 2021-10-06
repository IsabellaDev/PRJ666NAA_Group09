import React from "react";
import {withRouter} from 'react-router-dom';
function MoreInfo() {
  return (
    <div className="MoreInfo">
     ;<div className="container px-5 my-5">
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
  <h1 className="display-6">Request more information</h1>
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
        id="ticketDetails"
        type="text"
        placeholder="Additional information required, if needed."
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="ticketDetails">
       Ticket Details Display:
      </label>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">
        What additional information requsting
      </label>
      <div className="form-check">
        <input
          className="form-check-input"
          id="studentNumber"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="studentNumber">
          Student Number
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="legalFullNameExactMatchStudentIdCard"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="legalFullNameExactMatchStudentIdCard"
        >
          Legal Full Name( Exact Match student ID card)
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="privateNonSchoolProvidedEmail"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="privateNonSchoolProvidedEmail"
        >
          Private(non-school provided) Email
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="phoneNumber"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="phoneNumber">
          Phone Number
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="dateOfBirth"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="dateOfBirth">
          Date of Birth
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="postalCodeForCurrentAddress"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="postalCodeForCurrentAddress"
        >
          Postal Code for Current Address
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="other"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
      <div
        className="invalid-feedback"
        data-sb-feedback="whatAdditionalInformationRequsting:required"
      >
        One option is required.
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="additionalInformationRequiredIfNeeded"
        type="text"
        placeholder="Additional information required, if needed."
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="additionalInformationRequiredIfNeeded">
        Additional information required, if needed.
      </label>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">Reason</label>
      <div className="form-check">
        <input
          className="form-check-input"
          id="verificationPurpose"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label className="form-check-label" htmlFor="verificationPurpose">
          Verification Purpose
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="duplicationContactFound"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label className="form-check-label" htmlFor="duplicationContactFound">
          Duplication Contact Found
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="noRecordFoundInOrRecordExpiredUpdateIsRequired"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label
          className="form-check-label"
          htmlFor="noRecordFoundInOrRecordExpiredUpdateIsRequired"
        >
          No record found in or Record expired. Update is required.
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="other"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="additionalReasonIfNeeded"
        type="text"
        placeholder="Additional Reason, If needed"
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="additionalReasonIfNeeded">
        Additional Reason, If needed
      </label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="emailAddressIfClientProvided"
        type="email"
        placeholder="Email Address (if client provided)"
        data-sb-validations="email"
      />
      <label htmlFor="emailAddressIfClientProvided">
        Email Address (if client provided)
      </label>
      <div
        className="invalid-feedback"
        data-sb-feedback="emailAddressIfClientProvided:email"
      >
        Email Address (if client provided) Email is not valid.
      </div>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="phoneNumberIfClientProvided"
        type="text"
        placeholder="Phone number (if client provided)"
        data-sb-validations
      />
      <label htmlFor="phoneNumberIfClientProvided">
        Phone number (if client provided)
      </label>
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

export default withRouter(MoreInfo);