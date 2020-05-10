import React from "react";
import "./styles/nav.css";
import {Parallax} from 'react-parallax';

const image1 =  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

function HomePage() {
  return (
    <div>
      <Parallax bgImage={image1} strength={500}>
        <div style={{height: 500}}>
        <div className="text-in-box">HTML inside parallax</div>
        </div>
      </Parallax>
      <div style={{height: '100vh'}}></div>
    </div>
  );
}

export default HomePage;
