import React from "react";
import "./styles/nav.css";
import {Parallax} from 'react-parallax';


const image1 =  "https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg"

function HomePage() {
  return (
    <div style={{textAlign: 'center'}}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{height: 500}}>
        <div className="text-in-box">JOIN NOMAD 
        <h2>JOURNAL</h2></div>
        </div>
        <p className="other-text">Document Your<br></br>Journey Today</p>
      </Parallax>
      <div style={{height: '100vh'}}></div>

      <div className="home-container">
        <img className="home-img" src="https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg" alt="first-img">
        </img>
        <div className="home-text">
          <h1>About Us</h1>
        <h2>Cats like boxes because they are cryptic animals; they like to hide," Stephen Zawistowski, science adviser for the American Society for the Prevention of Cruelty to Animals, told Business Insider. "And a box gives them a place of safety and security."</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
