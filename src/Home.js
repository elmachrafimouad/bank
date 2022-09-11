import React from "react";
import NavBar from "./NavBar";
export default function Home() {
  return (
    <React.Fragment>
      <>
        <NavBar />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div style={{ position: "fixed", zIndex: 9999 }} />
          <div className="App">
            <div>
              <div className="banner" />
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
              <br />
              <div className="head-line">
                <h2 className="tokenomics-title">
                  Play, Earn
                  <br />
                  and Enjoy
                </h2>
              </div>
            </div>
  
            <div className="home">
              <div style={{ height: "5vh" }}>
                <div style={{ margin: "0 0px 5vh" }} />
              </div>
              <div id="about-us" className="about">
                <div className="about-text">
                  <br />
                    <br />
                  <h1>What is Robber Bank ?</h1>
                  <p className="about-text-p">
                    <strong>Robber Bank </strong>  is the most engaging game in the world, 
                  combining suspense, action and simplicity. the bank robber is one of the first real 
                  free to earn based on a solid ecosystem and real algorithm. Do you want to play, 
                    enjoy and earn but your are not a good gamer?
                  No problem! the bank robber is the game for everyone, 
                    a community driven project with the transparency of 
                  the dev team and their effort.
                  </p>
                </div>
                <div >

                  <br />
                    <br />
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />
                  <video width="100%" preload="auto" controls id="idvideo" poster ="poster.png">
                    <source type="video/mp4" src="./assets/static/media/demo.mp4"></source>
                    Votre navigateur ne supporte pas la balise HTML5 video.
                  </video>
                </div>
              </div>
              <div id="price" className="price-div">
                <div style={{ height: 200 }}>
                  <br />
                  <br />

                  <h1>with doge stars we are all Famous</h1>
                </div>
              </div>
  
             <div id="team" className="our-team">
                <div className="head-line">
                  <h1>Our Team</h1>
                </div>
                <div className="team-wrapper">
                  <div>
                    <img src="./assets/static/media/team1.png" alt="" />
                    <p>Steeve</p>
                    <span>Founder</span>
                  </div>
                  <div>
                    <img src="./assets/static/media/team2.png" alt="" />
                    <p>James</p>
                    <span>Head of marketing</span>
                  </div>
                  <div>
                    <img src="./assets/static/media/team3.png" alt="" />
                    <p>Jeff</p>
                    <span>Developer</span>
                  </div>
                  <br></br>
                  <div>
                    <img src="./assets/static/media/team1.png" alt="" />
                    <p>Steeve</p>
                    <span>Founder</span>
                  </div>
                  <div>
                    <img src="./assets/static/media/team2.png" alt="" />
                    <p>James</p>
                    <span>Head of marketing</span>
                  </div>
                  <div>
                    <img src="./assets/static/media/team3.png" alt="" />
                    <p>Jeff</p>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="section-title-wrapper">
                  <h2 className="section-title">Big vision. Great Features.</h2>
          </div>
                <div id="tokenomics" className="tokenomics">
                  <div className="head-line">
                    <h1>Tokenomics</h1>
                  </div>
                  <div className="tokenomics-wrapper">
                    <div className="tokenomic">
                      <img
                        src="./assets/static/media/2.png"
                        width={120}
                        alt=""
                        className="tokenomics-icon"
                      />
                      <div className="features_wrap">
                        <center>
                          <h2 className="tokenomics-title">
                            2% Marketing Wallet
                          </h2>
                          <div className="text center nopadd">
                            2% of every transaction will go the marketing
                            wallet. This will allow us to continuously grow the
                            coin and reach more people all over the world
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="tokenomic">
                      <img
                        src="./assets/static/media/8.png"
                        width={120}
                        alt=""
                        className="tokenomics-icon"
                      />
                      <div className="features_wrap">
                        <center>
                          <h2 className="tokenomics-title">
                            4% Rewards in USDT
                          </h2>
                          <div className="text center nopadd">
                            4% of every buy/sell is taken and redistributed to
                            all ShibaPlayer&nbsp;holders.
                            <strong>
                              Hold $DST tokens, earn $USDT.
                              <br />
                            </strong>
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="tokenomic">
                      <img
                        src="./assets/static/media/6.png"
                        width={120}
                        alt=""
                        className="tokenomics-icon"
                      />
                      <div className="features_wrap">
                        <center>
                          <h2 className="tokenomics-title">
                            2% Buyback Wallet
                          </h2>
                          <div className="text center nopadd">
                            Through our buyback mechanisms we will maintain or
                            ever increase the value of your $DST permanently
                          </div>
                        </center>
                      </div>
                    </div>
                    <div className="tokenomic">
                      <img
                        src="./assets/static/media/fees.png"
                        width={120}
                        alt=""
                        className="tokenomics-icon"
                      />
                      <div className="features_wrap">
                        <center>
                          <h2 className="tokenomics-title">1% Team Fees</h2>
                          <div className="text center nopadd">
                            To have more resources in our team and reward team
                            members.
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="howto" className="head-line">
                <h1>How to buy</h1>
              </div>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-2cffaa04 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2cffaa04"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="buy-div elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43b452ee"
                    data-id="43b452ee"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-492d5c4a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="492d5c4a"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="buy-section elementor-container elementor-column-gap-default">
                          <div
                            className="buy-section-one elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-42bbbb5c"
                            data-id="42bbbb5c"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-6c31a363 elementor-widget elementor-widget-heading"
                                data-id="6c31a363"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    STEP 1
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-7a2e9613 elementor-widget elementor-widget-heading"
                                data-id="7a2e9613"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h4
                                    className="elementor-heading-title elementor-size-default"
                                    style={{ fontFamily: '"prompt"' }}
                                  >
                                    INSTALL METAMASK FOR CHROME
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-76ba941 elementor-widget elementor-widget-heading"
                                data-id="76ba941"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h6 className="elementor-heading-title elementor-size-default">
                                    Go to Metamask and install the Chrome
                                    extension. Follow their steps from the guide
                                    and finish the setup.
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-effaece"
                            data-id="effaece"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated elementor-element-effaece">
                              <div
                                className="elementor-element elementor-element-4ebec62 elementor-widget elementor-widget-image"
                                data-id="4ebec62"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/metamask_icon-1-1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-effaece"
                            data-id="effaece"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-4db281d elementor-widget elementor-widget-image"
                                data-id="4db281d"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={40}
                                    height={40}
                                    src="./assets/static/media/extension.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-effaece"
                            data-id="effaece"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-1a15f42 elementor-widget elementor-widget-image"
                                data-id="1a15f42"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/chrome_icon.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-009d495 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="009d495"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="buy-section elementor-container elementor-column-gap-default">
                          <div
                            className="buy-section-one elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-db22459"
                            data-id="db22459"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-5c07e06 elementor-widget elementor-widget-heading"
                                data-id="5c07e06"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    STEP 2
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-81b0640 elementor-widget elementor-widget-heading"
                                data-id="81b0640"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">
                                    SEND $BNB TO METAMASK
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-1d0c118 elementor-widget elementor-widget-heading"
                                data-id="1d0c118"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h6 className="elementor-heading-title elementor-size-default">
                                    Transfer $BNB to your MetaMask wallet
                                    address from another wallet on the Etherium
                                    Chain network (e.g. Coinbase or Binance).
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-515b042"
                            data-id="7abfb5c"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-3cb8b6b elementor-widget elementor-widget-image"
                                data-id="3cb8b6b"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/bnb-1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-515b042"
                            data-id="515b042"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-04c13ed elementor-widget elementor-widget-image"
                                data-id="04c13ed"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={40}
                                    height={40}
                                    src="./assets/static/media/send.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-515b042"
                            data-id="c3c5e52"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-e09e184 elementor-widget elementor-widget-image"
                                data-id="e09e184"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/metamask_icon-1-1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-7cf990b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="7cf990b"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="buy-section elementor-container elementor-column-gap-default">
                          <div
                            className="buy-section-one elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-327176b"
                            data-id="327176b"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-8c21738 elementor-widget elementor-widget-heading"
                                data-id="8c21738"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    STEP 3
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-cc07d6e elementor-widget elementor-widget-heading"
                                data-id="cc07d6e"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">
                                    VISIT PooCoins EXCHANGE PAGE
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-b7d111e elementor-widget elementor-widget-heading"
                                data-id="b7d111e"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h6 className="elementor-heading-title elementor-size-default">
                                    Go to POOCOIN APP and click the "Connect
                                    Wallet" button. When Metamask asks for your
                                    signature, go ahead and sign it.
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-84e533f"
                            data-id="84e533f"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-42ff6ae elementor-widget elementor-widget-image"
                                data-id="42ff6ae"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/metamask_icon-1-1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f022ba0"
                            data-id="f022ba0"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-8ba41da elementor-widget elementor-widget-image"
                                data-id="8ba41da"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={40}
                                    height={40}
                                    src="./assets/static/media/connect.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5f3dcf3"
                            data-id="5f3dcf3"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-a8a1ff6 elementor-widget elementor-widget-image"
                                data-id="a8a1ff6"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/poocoin-logo1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-9d25340 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="9d25340"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="buy-section-one buy-section elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-57ef4db"
                            data-id="57ef4db"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-c0571c1 elementor-widget elementor-widget-heading"
                                data-id="c0571c1"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    STEP 4
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-65fa5be elementor-widget elementor-widget-heading"
                                data-id="65fa5be"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">
                                    SWAP $BNB FOR $DST
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-f6b050a elementor-widget elementor-widget-heading"
                                data-id="f6b050a"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                                style={{ fontFamily: '"prompt"' }}
                              >
                                <div className="elementor-widget-container">
                                  <h6 className="elementor-heading-title elementor-size-default">
                                    Enter the amount of $BNB you would like to
                                    swap for $DST. Click Connect Wallet then
                                    Swap
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-515b042"
                            data-id="abebfa7"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-43ca923 elementor-widget elementor-widget-image"
                                data-id="43ca923"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/bnb-1.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0d4fb3c"
                            data-id="0d4fb3c"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-191664a elementor-widget elementor-widget-image"
                                data-id="191664a"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={40}
                                    height={40}
                                    src="./assets/static/media/swap.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-dcf38f9"
                            data-id="dcf38f9"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-d3fcb62 elementor-widget elementor-widget-image"
                                data-id="d3fcb62"
                                data-element_type="widget"
                                data-widget_type="image.default"
                                style={{ backgroundColor: "transparent" }}
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={60}
                                    height={60}
                                    src="./assets/static/media/doge.png"
                                    className="attachment-full size-full"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <div className="race-track">
                <div className="head-line">
                  <h1>ROADMAP</h1>
                </div>
                <div id="roadmap" className="roadmapdiv">
                  <div>
                    <p className="race-track-span">Phase 1</p>
                    <p className="race-track-p">
                      ShibaPlayer NFTs collection design
                    </p>
                    <p className="race-track-p">
                      ShibaPlayer present on Social media
                    </p>
                    <p className="race-track-p">
                      Build a strong community on Telegram
                    </p>
                    <p className="race-track-p">ShibaPlayer website launch</p>
                    <p className="race-track-p">Smart Contract development</p>
                    <p className="race-track-p">Contract audit</p>
                  </div>
                  <div>
                    <p className="race-track-span">Phase 2</p>
                    <p className="race-track-p">Aggressive marketing Plan</p>
                    <p className="race-track-p">
                      Influencers, AMAs, banners, sponsorship
                    </p>
                    <p className="race-track-p">KYC &amp; Audit badge</p>
                    <p className="race-track-p">Launchpad</p>
                    <p className="race-track-p">Launch on PCS</p>
                  </div>
                </div>
                <div className="roadmapdiv">
                  <div>
                    <p className="race-track-span">Phase 3</p>
                    <p className="race-track-p">Giveaways</p>
                    <p className="race-track-p">
                      Influencers, AMAs, banners, sponsorship
                    </p>
                    <p className="race-track-p">1M$ MC</p>
                    <p className="race-track-p">ShibaPlayer Collection Mint</p>
                    <p className="race-track-p">1500+ holders</p>
                    <p className="race-track-p">Listing on CMC &amp; CG</p>
                  </div>
                  <div>
                    <p className="race-track-span">Phase 4</p>
                    <p className="race-track-p">
                      Celebrities &amp; big influencers
                    </p>
                    <p className="race-track-p">NFTs collection listing</p>
                    <p className="race-track-p">Development of P2E game</p>
                    <p className="race-track-p">Influencer marketing push</p>
                    <p className="race-track-p">P2E game beta launch</p>
                    <p className="race-track-p">Further development</p>
                  </div>
                </div>
              </div>
             <div class="btn-group">
    <div id="chart_div">
        <div style="position: relative;">
            <div dir="ltr" style="position: relative; width: 600px; height: 390px;">
                <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                    <svg width="600" height="390" aria-label="A chart." style="overflow: hidden;">
                        <defs id="_ABSTRACT_RENDERER_ID_16">
                            <filter id="_ABSTRACT_RENDERER_ID_17">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur>
                                <feOffset dx="1" dy="1"></feOffset>
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.1"></feFuncA>
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="600" height="390" stroke="none" stroke-width="0" fill="#ffffff"></rect>
                        <g><text text-anchor="start" x="115" y="52.05" font-family="Arial" font-size="13"
                                font-weight="bold" stroke="none" stroke-width="0" fill="#000000">My Title</text>
                            <rect x="115" y="41" width="371" height="13" stroke="none" stroke-width="0" fill-opacity="0"
                                fill="#ffffff"></rect>
                        </g>
                        <g>
                            <path
                                d="M301,196L301,76A120,120,0,0,1,324.4108386419354,78.30576635161235L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#3366cc"></path>
                        </g>
                        <g>
                            <path
                                d="M301,196L324.4108386419354,78.30576635161235A120,120,0,0,1,400.7763534763054,262.66842796235227L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#dc3912"></path><text text-anchor="start"
                                x="363.2612913522787" y="167.09757780712118" font-family="Arial" font-size="13"
                                stroke="none" stroke-width="0" fill="#ffffff">31.3%</text>
                        </g>
                        <g>
                            <path
                                d="M301,196L201.22364652369458,129.33157203764773A120,120,0,0,1,301,76L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#0099c6"></path><text text-anchor="start"
                                x="239.2621079859117" y="119.65759363848156" font-family="Arial" font-size="13"
                                stroke="none" stroke-width="0" fill="#ffffff">15.6%</text>
                        </g>
                        <g>
                            <path
                                d="M301,196L190.13445609864556,150.0779881161893A120,120,0,0,1,201.22364652369458,129.33157203764773L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#990099"></path>
                        </g>
                        <g>
                            <path
                                d="M301,196L181.25692921136758,188.15162449238287A120,120,0,0,1,190.13445609864556,150.0779881161893L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#109618"></path><text text-anchor="start"
                                x="197.49806434229015" y="179.91424286836107" font-family="Arial" font-size="13"
                                stroke="none" stroke-width="0" fill="#ffffff">5.2%</text>
                        </g>
                        <g>
                            <path
                                d="M301,196L400.7763534763054,262.66842796235227A120,120,0,0,1,181.25692921136758,188.15162449238287L301,196A0,0,0,0,0,301,196"
                                stroke="#ffffff" stroke-width="1" fill="#ff9900"></path><text text-anchor="start"
                                x="252.3553746746868" y="289.353202605998" font-family="Arial" font-size="13"
                                stroke="none" stroke-width="0" fill="#ffffff">41.7%</text>
                        </g>
                        <g>
                            <g>
                                <g><text text-anchor="end" x="486" y="100.03269468479604" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">Marke…</text>
                                    <rect x="437" y="88.98269468479604" width="49" height="13" stroke="none"
                                        stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                </g>
                                <g><text text-anchor="end" x="486" y="121.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">3.1%</text></g>
                            </g>
                            <g>
                                <path d="M310.5,106.5L434,106.5L434,106.5L486.5,106.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="310.5" cy="106.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                            <g>
                                <g><text text-anchor="end" x="486" y="156.03269468479607" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">Presale</text></g>
                                <g><text text-anchor="end" x="486" y="177.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">31.3%</text></g>
                            </g>
                            <g>
                                <path d="M384.5,162.5L434,162.5L434,162.5L486.5,162.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="384.5" cy="162.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                            <g>
                                <g><text text-anchor="start" x="115" y="275.03269468479607" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">P2E</text></g>
                                <g><text text-anchor="start" x="115" y="296.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">41.7%</text></g>
                            </g>
                            <g>
                                <path d="M272.5,281.5L168,281.5L168,281.5L115.5,281.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="272.5" cy="281.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                            <g>
                                <g><text text-anchor="start" x="115" y="184.03269468479607" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">Team</text></g>
                                <g><text text-anchor="start" x="115" y="205.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">5.2%</text></g>
                            </g>
                            <g>
                                <path d="M213.5,176.5L168,176.5L168,190.5L115.5,190.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="213.5" cy="176.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                            <g>
                                <g><text text-anchor="start" x="115" y="143.03269468479607" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">Ecosy…</text>
                                    <rect x="115" y="131.98269468479606" width="48" height="13" stroke="none"
                                        stroke-width="0" fill-opacity="0" fill="#ffffff"></rect>
                                </g>
                                <g><text text-anchor="start" x="115" y="164.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">3.1%</text></g>
                            </g>
                            <g>
                                <path d="M222.5,154.5L168,154.5L168,149.5L115.5,149.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="222.5" cy="154.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                            <g>
                                <g><text text-anchor="start" x="115" y="101.03269468479604" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#222222">Team</text></g>
                                <g><text text-anchor="start" x="115" y="122.06730531520395" font-family="Arial"
                                        font-size="13" stroke="none" stroke-width="0" fill="#9e9e9e">15.6%</text></g>
                            </g>
                            <g>
                                <path d="M279.5,109.5L168,109.5L168,107.5L115.5,107.5" stroke="#636363" stroke-width="1"
                                    stroke-opacity="0.7" fill-opacity="1" fill="none"></path>
                                <circle cx="279.5" cy="109.5" r="2" stroke="none" stroke-width="0" fill-opacity="0.7"
                                    fill="#636363"></circle>
                            </g>
                        </g>
                        <g></g>
                    </svg>
                    <div aria-label="A tabular representation of the data in the chart."
                        style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Hours per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Marketing</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Presale</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>P2E</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>Team</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Ecosystem</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Team</td>
                                    <td>15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div aria-hidden="true"
                style="display: none; position: absolute; top: 400px; left: 610px; white-space: nowrap; font-family: Arial; font-size: 13px; font-weight: bold;">
                40 (41.7%)</div>
            <div></div>
        </div>
    </div>
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
                  </svg>
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
