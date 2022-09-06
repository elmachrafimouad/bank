import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="nav-bar">
        <div>
          <div className="nav-links">
            <a
              href="https://www.pinksale.finance/#/launchpad/0xcec3784e99A85B80C27f91FDf1Ac37f38F32c689?chain=BSC"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="MuiButtonBase-root link-btn"
                tabIndex={0}
                type="button"
                style={{
                  padding: 10,
                  borderRadius: "10%",
                  background: "hsl(42 47% 41% / 84%)",
                  boxShadow: "0 1px 2px 2px #000000",
                  color: "#6ef162",
                }}
              >
                <span className="MuiButton-label jss4">pinksale</span>
              </button>
            </a>
            <Link to="/game">
              <button
                className="MuiButtonBase-root link-btn"
                tabIndex={0}
                type="button"
                style={{
                  background: "hsl(42 47% 41% / 84%)",
                  padding: 10,
                  borderRadius: "10%",
                  boxShadow: "0 1px 2px 2px #000000",
                  color: "#6ef162",
                }}
              >
                <span className="MuiButton-label jss4">Game</span>
              </button>
            </Link>
            <Link to="/">
              <button className="link-btn">Home</button>
            </Link>
            <Link to="/market">
              <button className="link-btn">Marketplace</button>
            </Link>
            <a href="/#tokenomics">
              <button className="link-btn">Tokenomics</button>
            </a>
            <a href="/#roadmap">
              <button className="link-btn">Roadmap</button>
            </a>
            <a href="/#howto">
              <button className="link-btn">How to buy</button>
            </a>
            <a href="/#team">
              <button className="link-btn">Our team</button>
            </a>
            <a
              href="https://github.com/coinscope-co/audits/blob/main/1-dst/audit.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="link-btn">Audit</button>
            </a>
            <a hidden="" href="/#faq">
              <button className="link-btn">FAQ</button>
            </a>
          </div>
          <div className="external-link">
            <a href="https://twitter.com/Dogexstar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={96}
                height={96}
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <path
                  fill="#03a9f4"
                  d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M36,17.1c-0.9,0.4-2,0.8-3,0.9c1-0.6,2.6-1.9,3-3c-1,0.6-2.7,1.2-3.8,1.4C31.3,15.4,30,15,28.6,15	c-2.7,0-4.6,2.3-4.6,5v2c-4,0-7.9-3-10.3-6c-0.4,0.7-0.7,1.6-0.7,2.5c0,1.8,1.7,3.7,3,4.5c-0.8,0-2.3-0.6-3-1c0,0,0,0,0,0.1	c0,2.4,1.7,4,3.9,4.4C16.5,26.6,16,27,14.1,27c0.6,1.9,3.8,3,5.9,3c-1.7,1.3-4.7,2-7,2c-0.4,0-0.6,0-1,0c2.2,1.4,5.2,2,8,2	c9.1,0,14-6.9,14-13.4c0-0.2,0-0.9,0-1.1C35,18.8,35.3,18.1,36,17.1"
                />
              </svg>
            </a>
            <a href="https://t.me/ShibaPlayerofficial">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={96}
                height={96}
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <path
                  fill="#29b6f6"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                />
                <path
                  fill="#b0bec5"
                  d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                />
                <path
                  fill="#cfd8dc"
                  d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
