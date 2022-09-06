import React from "react";
import NavBar from "./NavBar";

export default function Marketplace() {
  return (
    <React.Fragment>
      <>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div style={{ position: "fixed", zIndex: 9999 }} />
          <div className="App">
            <div>
              <div
                className="banner"
                style={{
                  backgroundImage: "url(static/media/bg2.jpg)",
                  height: "1200px !important",
                }}
              />
              <NavBar />
              <h1
                className="side-menu-logo aos-init aos-animate"
                data-aos="zoom-in"
              >
                ShibaPlayer
              </h1>
              <div className="slide-menu">
                <svg
                  height="384pt"
                  viewBox="0 -53 384 384"
                  width="384pt"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-menu-icon"
                >
                  <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
              </div>
              <div style={{ margin: "10vh 0px 80vh" }}>
                <div className="mint-component">
                  <div className="counter-button-container">
                    <h1>Mint your ShibaPlayer NFT</h1>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2vh",
                      }}
                    >
                      <div className="jss1">
                        <div>
                          <div
                            role="group"
                            className="MuiButtonGroup-root"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: "3vw",
                            }}
                          >
                            <button
                              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss2"
                              tabIndex={0}
                              type="button"
                              aria-label="reduce"
                            >
                              <span className="MuiButton-label">
                                <svg
                                  className="MuiSvgIcon-root"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  style={{
                                    fontWeight: "bolder",
                                    fontSize: "1.6vmax",
                                  }}
                                >
                                  <path d="M19 13H5v-2h14v2z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </button>
                            <button
                              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined Mui-disabled Mui-disabled"
                              tabIndex={-1}
                              type="button"
                              disabled=""
                              style={{
                                boxShadow: "rgb(0, 0, 0) 0px 1px 2px 2px",
                                width: 50,
                                height: 50,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "0px 10px",
                                color: "#26016f",
                                fontSize: "1.3vmax",
                                fontWeight: "bolder",
                                borderRadius: 8,
                              }}
                            >
                              <span className="MuiButton-label">1</span>
                            </button>
                            <button
                              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss2"
                              tabIndex={0}
                              type="button"
                              aria-label="increase"
                            >
                              <span className="MuiButton-label">
                                <svg
                                  className="MuiSvgIcon-root"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "1.5vmax",
                                  }}
                                >
                                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="MuiButtonBase-root MuiButton-root jss3 MuiButton-text"
                        tabIndex={0}
                        type="button"
                      >
                        <span className="MuiButton-label jss4">Mint</span>
                        <span className="MuiTouchRipple-root" />
                      </button>
                    </div>
                    <div
                      style={{
                        padding: 10,
                        display: "flex",
                        justifyContent: "space-around",
                        boxShadow: "rgba(113, 99, 158, 0.66) 0px 0px 10px 5px",
                        borderRadius: 5,
                        margin: "2vh 0px 1vh",
                      }}
                    >
                      <span>Coming Soon...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home">
              <div style={{ height: "5vh" }}>
                <div style={{ margin: "0 0px 5vh" }} />
              </div>
            </div>
            <div className="footer">
              <h1>ShibaPlayer community</h1>
              <div className="footer-link">
                <a href="https://twitter.com/Dogexstar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={144}
                    height={144}
                    viewBox="0 0 48 48"
                    style={{ fill: "#000000" }}
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    />
                  </svg>{" "}
                </a>
                <a href="https://t.me/ShibaPlayerofficial">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={144}
                    height={144}
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
              <span>ShibaPlayer © 2022 All rights reserved. </span>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}
