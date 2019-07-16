import React from "react";
import Header from "../components/generic/Header";
import * as logo from "../assets/gtc1-logo.png";
export default function LandingPage() {
  return (
    <>
      <Header showLoginBtn={true}/>
      <div className="land-page">
        <section className="img">
          <div className="img-text-container">
            <h1 className="img-text-container-h1">
              Meet Your Genes<span>℠</span>
            </h1>
            <p className="img-text-container-p">
              Commit to a healthier you, inspired by your genes - with 125+
              genetic reports.
            </p>
          </div>
        </section>
      </div>
      <footer className="land-footer">
        <div className="footer-wrapper">
          <section className="footer-container">
            <div className="footer-container-column">
              <a className="footer-logo" href="/">
                <img src={logo} width="50" height="45" alt="GenX home" />
                <span>GenX</span>
              </a>
            </div>
            <div className="footer-container-column">
              <div className="chrome-footer-pod">
                <div className="footer-subheading">About</div>
                <ul className="footer-links">
                  <li>
                    <a href="/">Company Info</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-container-column">
              <div class="chrome-footer-pod">
                <div class="footer-subheading">Legal</div>
                <ul class="footer-links">
                  <li>
                    <a href="/">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/">Privacy Center</a>
                  </li>

                  <li>
                    <a href="/">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div class="footer-security">
          <div id="footer_disclaimer" class="footer-security-copy">
            © 2019 GenX, Inc.
            <span class="u-nobr">All rights reserved</span>.
          </div>
        </div>
      </footer>
    </>
  );
}
