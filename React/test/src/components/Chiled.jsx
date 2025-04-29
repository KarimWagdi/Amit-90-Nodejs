import React from "react";
const Chiled = function () {
  return (
    <div>
      <h1>Chiled</h1>
      <p>Chiled</p>
      {console.log("Chiled")}
    </div>
  );
};
export default React.memo(Chiled);
