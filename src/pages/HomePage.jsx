import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
 

  return (
    <>
      {/* HomePage */}
      <div className="h-300 w-3/4mr-5 mt-4 ml-16 mr-16 bg-slate-700">
        <video className="h-full w-full  rounded-lg" controls autoPlay muted>
          <source src="./src/images/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" h-300 w-3/4mr-5 mt-8 ml-16 mr-16 ">
        <div>A quick and reliable CNC cutting service based in London</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at
          iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
          /na Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          at iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at
          iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
          /na Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          at iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
        </div>
      </div>

      <div className=" w-full mt-8  ">
        <img className="h-full w-full " src="./src/images/one.JPG" alt="" />
      </div>

      <div className=" h-300 w-3/4mr-5 mt-8 ml-16 mr-16 ">
        <div>A quick and reliable CNC cutting service based in London</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at
          iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
          /na Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          at iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at
          iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
          /na Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          at iure odio maiores a eveniet non vitae! Cumque reprehenderit quam
          dignissimos ab ratione? Unde quas iste rerum vero velit fuga,
          accusantium, sunt reprehenderit illum qui harum magni optio, ea eaque.
        </div>
      </div>

      <div className="part-4 flex bg-white h-80 mx-auto my-32 align-middle justify-center ml-16 mr-16 ">
        <div className="part4-pic h-full w-1/2">
          <video className="h-full w-full " controls autoPlay muted>
            <source src="./src/images/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="part4-text1 w-1/2 h-full bg-white pl-12">
          <p className="part4-title">Discover Our History</p>

          <p className="part4-lorem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            quidem. Architecto tempore quidem et, sunt illo, veritatis maxime
            harum adipisci voluptate, vero praesentium similique laudantium
            suscipit? Aspernatur, eaque! Ratione, amet.
          </p>
          <div className="part4-button-video">
            <button>Explore More</button>
            <img src="./src/images/Vector.png" alt="watch video" />
            <p>Watch Video</p>
          </div>
        </div>
      </div>

      <div className="part-5 flex bg-white h-80 mx-auto my-40 align-middle justify-center ml-16 mr-16 ">
        <div className="part5-text1 w-1/2 h-full bg-white pr-12">
          <p className="part5-title">Discover Our History</p>

          <p className="part5-lorem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            quidem. Architecto tempore quidem et, sunt illo, veritatis maxime
            harum adipisci voluptate, vero praesentium similique laudantium
            suscipit? Aspernatur, eaque! Ratione, amet.
          </p>
        </div>
        <div className="part5-pic h-full w-1/2">
          <video className="h-full w-full " controls autoPlay muted>
            <source src="./src/images/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default HomePage;
