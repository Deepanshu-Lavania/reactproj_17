import React from "react";
import web from "./images/about_image.png";
import Common from "./Common";
export default function About() {
  return (
    <>
    <Common 
    name="Wecome to About Page"
    visite="/contact"
    btn="Contact Me"
    img={web}
    />
    </>
  );
}
