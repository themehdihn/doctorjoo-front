import React from "react";

function Container({ children, isGlow }) {
  return (
    <div className="container">
      {isGlow && (
        <>
          <div class="glow-circle glow-circle--first" />
          <div class="glow-circle glow-circle--second" />
        </>
      )}
      {children}
    </div>
  );
}

export default Container;
