import "./Verifywindow.css";
import React from "react";
var count = 0;
export default function Verifywindow(props) {
  function close() {
    var btn = document.querySelector(".popup-btn");
    var popup = document.querySelector(".popup-container");

    btn.style.display = "block";
    popup.style.display = "none";
  }

  return (
    <>
      <div className="popup-container">
        <div className="container_heading">
          <h3>Phone Verification</h3>
          <h1 onClick={close} id="cut">
            &times;
          </h1>
        </div>
        <div className="container_body">
          <p>enter the OTP you received on 89206-6XXXX</p>
          <div className="body_input">
            <div className="inputs">
              <input
                id="1"
                onKeyPress={function isInputNumber(ev) {
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                    count++;
                  }
                  if (count > 1) {
                    ev.preventDefault();
                  }
                }}
                type="text"
                required
              />
            </div>

            <div className="inputs">
              <input
                id="2"
                onKeyPress={function isInputNumber(ev) {
                  count = 0;
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                  }
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <input
                id="3"
                onKeyPress={function isInputNumber(ev) {
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                  }
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <input
                id="4"
                onKeyPress={function isInputNumber(ev) {
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                  }
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <input
                id="5"
                onKeyPress={function isInputNumber(ev) {
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                  }
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <input
                id="6"
                onKeyPress={function isInputNumber(ev) {
                  var ch = String.fromCharCode(ev.which);
                  if (!/[0-9]/.test(ch)) {
                    ev.preventDefault();
                    alert("only Numeric values alowed");
                  } else {
                    document.getElementById(1 + 1).focus();
                  }
                }}
                type="text"
                required
              />
            </div>
          </div>
          <div className="body_bottom">
            <div className="bottom_change">
              <p>Change Number</p>
            </div>
            <div className="bottom_change">
              <p>Re-Send OTP</p>
            </div>
          </div>
          <div className="body_button">
            <button id="btn">Verify Phone Number</button>
          </div>
        </div>
      </div>
    </>
  );
}
