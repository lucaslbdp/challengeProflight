import React from "react";
import { useEffect, useState } from "react";
import proflight from "../../img/proflight.png";
import "./logolist.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const LogoList = () => {
  const [currentLogoId, setLogo] = useState(1);

  const images = [
    { id: 1, imgLogo: proflight },
    { id: 2, imgLogo: proflight },
    { id: 3, imgLogo: proflight },
    { id: 4, imgLogo: proflight },
  ];

  useEffect(() => {
    const div = document.getElementById(1);
    setLogo(parseInt(div.id));

    div.classList.add("active");
    div.classList.remove("inactive");
  }, []);

  const goLeft = () => {
    if (currentLogoId === 1) {
      resetLogoListLeft();
      return;
    }

    const currentLogo = document.getElementById(currentLogoId);
    currentLogo.classList.add("inactive");
    currentLogo.classList.remove("active");

    const previousId = parseInt(currentLogoId, 10) - 1;
    setLogo(previousId);

    const previousLogo = document.getElementById(previousId);
    previousLogo.classList.add("active");
    previousLogo.classList.remove("inactive");
  };

  const goRight = () => {
    if (currentLogoId === 4) {
      resetLogoListRight();
      return;
    }

    const currentLogo = document.getElementById(currentLogoId);
    currentLogo.classList.add("inactive");
    currentLogo.classList.remove("active");

    const nextId = parseInt(currentLogoId, 10) + 1;
    setLogo(nextId);

    const nextLogo = document.getElementById(nextId);
    nextLogo.classList.add("active");
    nextLogo.classList.remove("inactive");
  };

  const resetLogoListRight = () => {
    const currentLogo = document.getElementById(currentLogoId);
    currentLogo.classList.add("inactive");
    currentLogo.classList.remove("active");

    const div = document.getElementById(1);
    setLogo(parseInt(div.id));

    div.classList.add("active");
    div.classList.remove("inactive");
  };

  const resetLogoListLeft = () => {
    const currentLogo = document.getElementById(currentLogoId);
    currentLogo.classList.add("inactive");
    currentLogo.classList.remove("active");

    const div2 = document.getElementById(4);
    setLogo(parseInt(div2.id));

    div2.classList.add("active");
    div2.classList.remove("inactive");
  };

  return (
    <div className="container__imgs">
      <BsFillArrowLeftSquareFill className="icon" onClick={goLeft} />
      {images.map((element, i) => {
        return (
          <div key={i}>
            <img
              src={element.imgLogo}
              alt="logo de proflight"
              id={element.id}
              key={element.id}
              className="inactive"
            />
          </div>
        );
      })}
      <BsFillArrowRightSquareFill className="icon" onClick={goRight} />
    </div>
  );
};

export default LogoList;
