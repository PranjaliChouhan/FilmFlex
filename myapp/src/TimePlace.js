import React from "react";
import { useState } from "react";
import { mallsList } from "./config";
import MallsCard from "./MallsCard";

const TimePlace = () => {
  const [malls, setMalls] = useState(mallsList);

  return (
    <>
      <div className="malls">
        <h1>Show-Time</h1>
        
        <div className="singlemall">
          
            {malls.map((mall) => {
              return <MallsCard {...mall} key={mall.id} />;
            })}
          
        </div>
      </div>
    </>
  );
};

export default TimePlace;
