import React from "react";
import "./Events.css";
import Images from "../images/img.png";
import Center from "../images/center-design.png"
import Centerlogo from "../images/centerlogo.png"

const Events = () => {
  return (
    <>
      <div className="container-fluid  Events">
        <div className="row  justify-content-center  ">
          <div className="col-lg-4 col-md-6  first  ">
            <div class="element" >
            <button>  <img src={Images} alt="" /></button>
             
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
          </div>
          <div className="col-lg-4  first logo  ">
          <img className="center" src={Centerlogo} alt="" />
          </div>

          <div className="col-lg-4 col-md-6  first ">
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
            <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
          </div>

          <div className="row justify-content-center my-5">
           <div className="col-6 bottom">
           <div class="element" >
              <button> <img src={Images} alt="" /></button>
            </div>
           </div>
           
            
           
           <div className="col-6 bottom-2">
           <div class="element">
              <button> <img src={Images} alt="" /></button>
            </div>
           </div>
            
            
          
        </div>
      </div>
      </div>
    </>
  );
};
export default Events;
