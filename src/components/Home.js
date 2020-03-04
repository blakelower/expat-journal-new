import React from "react";
import "./styles/tachyon.css";
import Thailand from "./images/Phuket-Thailand.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <header className="sans-serif">
      <div
        className="cover bg-left bg-center-l"
        style={{ backgroundImage: `url(${Thailand})` }}
      >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="flex justify-between">
            <a
              className="link white-70 hover-white no-underline flex items-center pa3"
              href=""
            ></a>
            <div className="flex-grow pa3 flex items-center">
              <a className="f6 link dib white dim mr3 mr4-ns" href="#0">
                About
              </a>
              <Link className="f6 link dib white dim mr3 mr4-ns" to="/login">
                Login
              </Link>
              <Link
                className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">EXPAT JOURNAL</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">
              CREATE AN ACCOUT AND DOCUMENT YOUR JOURNEY
            </h2>
          </div>
        </div>
      </div>
      <div className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">TESTIMONIALS</h1>
        <section class="mw7 center">
          <h2 class="athelas ph3 ph0-l">Join the Club</h2>
          <article class="pv4 bt bb b--black-10 ph3 ph0-l">
            <div class="flex flex-column flex-row-ns">
              <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 class="f3 athelas mt0 lh-title">
                  Lorem Ipsum
                </h1>
                <p class="f5 f4-l lh-copy athelas">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="data:image/jpeg;base64,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"
                  class="db"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
            </div>
            <p class="f6 lh-copy gray mv0">
              User <span class="ttu">Robin Darnell</span>
            </p>
            <time class="f6 db gray">Since Nov. 21, 2016</time>
          </article>
          <article class="pv4 bb b--black-10 ph3 ph0-l">
            <div class="flex flex-column flex-row-ns">
              <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 class="f3 athelas mt0 lh-title">
                Lorem Ipsum
                </h1>
                <p class="f5 f4-l lh-copy athelas">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="https://brobible.files.wordpress.com/2019/09/istock-637061566.jpg?quality=90"
                  class="db"
                  alt="Photo of a whale's tale coming crashing out of the water."
                />
              </div>
            </div>
            <p class="f6 lh-copy gray mv0">
              User <span class="ttu">Katherine Grant</span>
            </p>
            <time class="f6 db gray">Since Nov. 19, 2016</time>
          </article>
          <article class="pv4 bb b--black-10 ph3 ph0-l">
            <div class="flex flex-column flex-row-ns">
              <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 class="f3 athelas mt0 lh-title">
                Lorem Ipsum
                </h1>
                <p class="f5 f4-l lh-copy athelas">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="https://i.pinimg.com/originals/f2/18/03/f21803f7aa1a92a4b8d6b394118a8281.jpg"
                  class="db"
                  alt="Photo of a warehouse with stacked shelves."
                />
              </div>
            </div>
            <p class="f6 lh-copy gray mv0">
             User <span class="ttu">Imelda Clancy</span>
            </p>
            <time class="f6 db gray">Since Nov. 19, 2016</time>
          </article>
        </section>
      </div>
    </header>
  );
}

export default HomePage;
