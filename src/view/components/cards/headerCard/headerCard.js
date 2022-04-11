import axios from "axios";
import { useEffect, useState } from "react";
import img from "../../../../assets/web.png";

// import { useState } from "react/cjs/react.production.min"
import { Link } from "react-router-dom";
function HeaderCard() {
  const [press, setPress] = useState([]);
  useEffect(() => {
    async function getPress() {
      const res = await axios.get(`http://localhost:5000/press`);
      setPress(res);
    }
    getPress();
  }, []);
  console.log(press);
  return (  
    <>
      <div className="container">
        <div className="w-100 bg-danger">
          <h2>tilte</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
            corporis!
          </p>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="card w-50">
            <div className="card-body">
              <Link to={"./login"}>login</Link>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="">
            <img className="w-75" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderCard;
