import React from "react";
import "./styles/nav.css";
import { Parallax } from "react-parallax";

const image1 =
  "https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg";

function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div className="text-in-box">
            JOIN NOMAD
            <h2>DIARY</h2>
          </div>
        </div>
        <p className="other-text">
          Document Your<br></br>Journey Today
        </p>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
      <div className="home-container">
        <img
          className="home-img"
          src="https://ak.picdn.net/shutterstock/videos/1015154647/thumb/1.jpg"
          alt="first-img"
        ></img>
        <div className="home-text">
          <h1>About Us</h1>
          <h2>
            Traveling has changed my life for the better. I remember the
            excitement I felt boarding planes to visit the world unknown. But I
            regrettably also remember not taking enough photos. I knew my phone
            and laptop did not have the capacity to store the images so I didn’t
            even bother. I created Nomad Journal to help other travelers have a
            place to store their images!
          </h2>
        </div>
      </div>
      {/* <div className="tech-slideshow">
        <div className="mover-1"></div>
        <div className="mover-2"></div>
      </div> */}
      <div>
        <h2 className="test">Our Reviews</h2>
        <div className="testimonials">
          <ul>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8"
                alt="test1"
              />
              <p>
                "Integer in cursus massa. Curabitur viverra, libero sed eleifend
                pellentesque, metus quam commodo lorem, ut laoreet ipsum metus
                ac augue."
              </p>
              <h1>Martin Kovaks</h1>
            </li>
            <li>
              <img
                src="https://i.pinimg.com/236x/2d/e5/7f/2de57f8025bd64dffd554de0f080ee7f--my-pinterest-pinterest-board.jpg?b=t"
                alt="test2"
              />
              <p>
                "Sed vitae augue arcu. In pharetra ultricies mi eget interdum.
                Donec feugiat, orci at mattis laoreet, mauris mauris interdum
                arcu, ac viverra nibh purus a eros."
              </p>
              <h1>Adrea Glauber</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="contain">
        <span className="so large mt-0 mb-5">
          <div className="row">
            <div className="row align-items-end no-gutters">
                <div className="col-md-7">
                  <div className="footer-author">
                    <div className="footer-author-details">
                      <h3 className="mb-0">
                        <a href="/">Blake Lower</a>
                        <a href="/" target="_blank" className="ml-2">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </h3>
                      <p className="small">CEO of Simple Flo</p>
                      <div className="footer-author-contacts d-flex align-items-center">
                        <a href="tel:#">+1 555-3443</a>
                        <br></br>
                        <a
                          className="ml-auto"
                          href="mailto:svs@company.com"
                          target="_blank"
                        >
                          blakelower1999@gmail.com
                        </a>
                      </div>
                      <p className="footer-signoff">SimpleFloCo.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
