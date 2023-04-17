import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";
import "./style.css";

export default function ContactCard({ img }) {
  let bounds;
  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
  };
  const removeListener = (e) => {
    inputRef.current.style.transform = "";
    inputRef.current.style.background = "";
  };
  useEffect(() => {});
  return (
    <div
      ref={inputRef}
      className="card"
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
    >
      <img className="img-position" src={img} width={150}></img>
      <div ref={glowRef} className="glow" />
    </div>
  );
}
