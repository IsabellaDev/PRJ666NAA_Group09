import React from "react";
import {withRouter} from 'react-router-dom';
function TransferTicket() {
  
  return (
    <div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: "@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}" }} />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f7ed99c2c2c7240ba580251" />
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.28156" />
      <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.28156" />
      <form className="jotform-form" action="https://submit.jotform.com/submit/212768422807056/" method="post" name="form_212768422807056" id={212768422807056} acceptCharset="utf-8" autoComplete="on">
        <input type="hidden" name="formID" defaultValue={212768422807056} />
        <input type="hidden" id="JWTContainer" defaultValue />
        <input type="hidden" id="cardinalOrderNumber" defaultValue />
        <div role="main" className="form-all">
          <style dangerouslySetInnerHTML={{__html: "\n      .form-all:before { background: none;}\n    " }} />
          <ul className="form-section page-section">
            <li id="cid_1" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_1" className="form-header" data-component="header">
                    Ticket Transfer Form
                  </h1>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_textbox" id="id_3">
              <label className="form-label form-label-top form-label-auto" id="label_3" htmlFor="input_3"> Ticket Number </label>
              <div id="cid_3" className="form-input-wide" data-layout="half">
                <input type="text" id="input_3" name="q3_ticketNumber3" data-type="input-textbox" className="form-textbox" data-defaultvalue style={{width: '310px'}} size={310} defaultValue data-component="textbox" aria-labelledby="label_3" />
              </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_6">
              <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> Ticket Breifing (Display Only) </label>
              <div id="cid_6" className="form-input-wide" data-layout="full">
                <textarea id="input_6" className="form-textarea" name="q6_ticketBreifing" style={{width: '648px', height: '163px'}} data-component="textarea" aria-labelledby="label_6" defaultValue={""} />
              </div>
            </li>
            <li className="form-line" data-type="control_widget" id="id_30">
              <label className="form-label form-label-top form-label-auto" id="label_30" htmlFor="input_30"> Transfer to </label>
              <div id="cid_30" className="form-input-wide" data-layout="full">
                <div data-widget-name="Dynamic Dropdowns" style={{width: '100%', textAlign: 'Left', overflowX: 'auto'}} data-component="widget-field">
                  <iframe data-client-id="53201a2d6866be393e000028" title="Dynamic Dropdowns" frameBorder={0} scrolling="no" allowTransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" className="custom-field-frame" id="customFieldFrame_30" src style={{maxWidth: '400px', border: 'none', width: '100%', height: '50px'}} data-width={400} data-height={50}>
                  </iframe>
                  <div className="widget-inputs-wrapper">
                    <input type="hidden" id="input_30" className="form-hidden form-widget  " name="q30_transferTo30" defaultValue />
                    <input type="hidden" id="widget_settings_30" className="form-hidden form-widget-settings" defaultValue="%5B%7B%22name%22%3A%22list%22%2C%22value%22%3A%22Group%20A%5Cn%20Option%20A1%5Cn%20Option%20A2%5CnGroup%20B%5Cn%20%20Option%20B1%5Cn%20%20*Option%20B2%5Cn%20%20%20%20.%5Cn%20%20%20%20Option%20B2-1%5Cn%20%20%20%20Option%20B2-2%5Cn%20%20%20%20Option%20B2-3%5Cn%20%20%20%20%20%20Option%20B2-3-1%5Cn%20%20%20%20%20%20Option%20B2-3-2%5Cn%20%20%20%20%20%20%20%20Option%20B2-3-2-1%5Cn*Group%20C%5Cn%20%20%20.%5Cn%20%20%20Option%20C1%5Cn%20%20%20Option%20C2%5Cn%20%20%20%20%20%20.%5Cn%20%20%20%20%20%20Option%20C2-1%5Cn%20%20%20%20%20%20Option%20C2-2%5Cn%20%20%20Option%20C3%22%7D%5D" data-version={2} />
                  </div>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_widget" id="id_17">
              <label className="form-label form-label-top form-label-auto" id="label_17" htmlFor="input_17"> Additional Email </label>
              <div id="cid_17" className="form-input-wide" data-layout="full">
                <div data-widget-name="Dynamic Textbox" style={{width: '100%', textAlign: 'Left', overflowX: 'auto'}} data-component="widget-field">
                  <iframe data-client-id="528ee7cf8d5a5fc76a000004" title="Dynamic Textbox" frameBorder={0} scrolling="no" allowTransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" className="custom-field-frame" id="customFieldFrame_17" src style={{maxWidth: '300px', border: 'none', width: '100%', height: '70px'}} data-width={300} data-height={70}>
                  </iframe>
                  <div className="widget-inputs-wrapper">
                    <input type="hidden" id="input_17" className="form-hidden form-widget  " name="q17_additionalEmail" defaultValue />
                    <input type="hidden" id="widget_settings_17" className="form-hidden form-widget-settings" defaultValue="%5B%7B%22name%22%3A%22existing%22%2C%22value%22%3A%221%22%7D%2C%7B%22name%22%3A%22buttontext%22%2C%22value%22%3A%22Add%20More%22%7D%2C%7B%22name%22%3A%22size%22%2C%22value%22%3A%22100%22%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22Default%22%7D%2C%7B%22name%22%3A%22buttonColor%22%2C%22value%22%3A%22%238894AB%22%7D%2C%7B%22name%22%3A%22showCounter%22%2C%22value%22%3A%22Yes%22%7D%5D" data-version={2} />
                  </div>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_widget" id="id_32">
              <label className="form-label form-label-top form-label-auto" id="label_32" htmlFor="input_32"> Additional Phone number (SMS only) </label>
              <div id="cid_32" className="form-input-wide" data-layout="full">
                <div data-widget-name="Dynamic Textbox" style={{width: '100%', textAlign: 'Left', overflowX: 'auto'}} data-component="widget-field">
                  <iframe data-client-id="528ee7cf8d5a5fc76a000004" title="Dynamic Textbox" frameBorder={0} scrolling="no" allowTransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" className="custom-field-frame" id="customFieldFrame_32" src style={{maxWidth: '300px', border: 'none', width: '100%', height: '70px'}} data-width={300} data-height={70}>
                  </iframe>
                  <div className="widget-inputs-wrapper">
                    <input type="hidden" id="input_32" className="form-hidden form-widget  " name="q32_additionalPhone" defaultValue />
                    <input type="hidden" id="widget_settings_32" className="form-hidden form-widget-settings" defaultValue="%5B%7B%22name%22%3A%22existing%22%2C%22value%22%3A%221%22%7D%2C%7B%22name%22%3A%22buttontext%22%2C%22value%22%3A%22Add%20More%22%7D%2C%7B%22name%22%3A%22size%22%2C%22value%22%3A%2225%22%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22Default%22%7D%2C%7B%22name%22%3A%22buttonColor%22%2C%22value%22%3A%22%238894AB%22%7D%5D" data-version={2} />
                  </div>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_checkbox" id="id_8">
              <label className="form-label form-label-top form-label-auto" id="label_8" htmlFor="input_8"> Transfer Reason </label>
              <div id="cid_8" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_8" data-component="checkbox">
                  <span className="form-checkbox-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="checkbox" aria-describedby="label_8" className="form-checkbox" id="input_8_0" name="q8_transferReason[]" defaultValue="Need Authorization" />
                    <label id="label_input_8_0" htmlFor="input_8_0"> Need Authorization </label>
                  </span>
                  <span className="form-checkbox-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="checkbox" aria-describedby="label_8" className="form-checkbox" id="input_8_1" name="q8_transferReason[]" defaultValue="Outside Agent Skill Scope, need additional support" />
                    <label id="label_input_8_1" htmlFor="input_8_1"> Outside Agent Skill Scope, need additional support </label>
                  </span>
                  <span className="form-checkbox-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="checkbox" aria-describedby="label_8" className="form-checkbox" id="input_8_2" name="q8_transferReason[]" defaultValue="Not IT Issue" />
                    <label id="label_input_8_2" htmlFor="input_8_2"> Not IT Issue </label>
                  </span>
                  <span className="form-checkbox-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="checkbox" aria-describedby="label_8" className="form-checkbox" id="input_8_3" name="q8_transferReason[]" defaultValue="Other" />
                    <label id="label_input_8_3" htmlFor="input_8_3"> Other </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_9">
              <label className="form-label form-label-top form-label-auto" id="label_9" htmlFor="input_9"> Additional Comment (Client will not see this) </label>
              <div id="cid_9" className="form-input-wide" data-layout="full">
                <textarea id="input_9" className="form-textarea" name="q9_additionalComment" style={{width: '648px', height: '163px'}} data-component="textarea" aria-labelledby="label_9" defaultValue={""} />
              </div>
            </li>
            <li className="form-line" data-type="control_button" id="id_2">
              <div id="cid_2" className="form-input-wide" data-layout="full">
                <div data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                  <button id="input_2" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                    Submit
                  </button>
                </div>
              </div>
            </li>
            <li style={{display: 'none'}}>
              Should be Empty:
              <input type="text" name="website" defaultValue />
            </li>
          </ul>
        </div>
        <input type="hidden" className="simple_spc" id="simple_spc" name="simple_spc" defaultValue={212768422807056} />
        <div className="formFooter-heightMask">
        </div>
        <div className="formFooter f6 branding21">
          <div className="formFooter-wrapper formFooter-leftSide">
            <a href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=212768422807056&utm_content=jotform_logo&utm_campaign=powered_by_jotform_le" target="_blank" className="formFooter-logoLink"><img className="formFooter-logo" src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo-white.svg" alt="Jotform Logo" style={{height: '44px'}} /></a>
          </div>
          <div className="formFooter-wrapper formFooter-rightSide">
            <span className="formFooter-text">
              Now create your own Jotform - It's free!
            </span>
            <a className="formFooter-button" href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=212768422807056&utm_content=jotform_button&utm_campaign=powered_by_jotform_le" target="_blank">Create your own Jotform</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(TransferTicket);