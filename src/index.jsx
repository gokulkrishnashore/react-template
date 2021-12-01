import React from "react";
import ReactDOM from "react-dom";
import lodash from "lodash";
const Index = () => {
  return (
    <div>
      <h3>Hi There !</h3>
      <span>{lodash.now}</span>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
