import React, { useState } from "react";

function TileInfo({ hog }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(event) {
    setIsClicked(!isClicked);
  }

  function capitalizeLetter(string) {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
  }

  return (
    <div className="pigTile" onClick={handleClick}>
      <h3 className="hoggyText">{hog.name}</h3>
      <img src={hog.image} key={hog.name} alt={hog.name} className={isClicked ? "maxPigTile" : "minPigTile"}></img>
      {isClicked ? (
        <section className="extraInfo">
          <h4 className="hoggyText">Specialty: {hog.specialty}</h4>

          <h4 className="hoggyText">{hog.greased ? "Greased: True" : "Greased: False"}</h4>

          <h4 className="hoggyText">Weight: {hog.weight}</h4>

          <h4 className="hoggyText">Highest Medal Achieved: {capitalizeLetter(hog["highest medal achieved"])}</h4>
        </section>
      ) : null}
    </div>
  );
}

export default TileInfo;
