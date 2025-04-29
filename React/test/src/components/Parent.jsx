import Chiled from "./Chiled";
import React from "react";
const Parent = function () {
  return (
    <div>
      <h1>Parent</h1>
      <p>Parent</p>
      <Chiled />
      {console.log("Parent")}
    </div>
  );
};
export default React.memo(Parent);
