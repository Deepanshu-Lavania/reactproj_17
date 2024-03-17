import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="continer-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* Note:: gutter property of bootstrap */}
            <div className="row gy-4">
                {
                    Sdata.map((val,ind)=>{
                        return (
                            <Card 
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            />
                        )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
