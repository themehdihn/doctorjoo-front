import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ height = "75", width = "40" }) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color="#4a6dff"
        visible={true}
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
}

export default Loading;
