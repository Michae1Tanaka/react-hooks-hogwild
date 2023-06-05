import React from "react";
import TileInfo from "./TileInfo";
import { v4 as uuid } from "uuid";

function Tile({ hogsState }) {
  return (
    <div className={"ui grid container"}>
      {hogsState.map((hog) => {
        return <TileInfo hog={hog} key={uuid()} />;
      })}
    </div>
  );
}

export default Tile;
