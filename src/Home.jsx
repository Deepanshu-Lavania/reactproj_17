import React from "react";
import web from "./images/coderman_img.jpg";
import Common from "./Common";
export default function Home() {
  return (
    <>
    <Common 
    name="Grow your bussiness with"
    visite="/service"
    btn="Get Started"
    img={web}
    />
    </>
  );
}
