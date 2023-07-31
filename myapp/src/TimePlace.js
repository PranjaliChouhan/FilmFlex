import React from "react";
import { useState } from "react";
import { mallsList } from "./config";
import MallsCard from "./MallsCard";
import Header from "./Header";

const TimePlace = () => {
  const [malls, setMalls] = useState(mallsList);

  return (
    <>
      <div className="malls">
        
        <Header />
        
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
