import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "A Tech-Preneur.",
            "An innovative software engineer.",
            "UI/UX Designer.",
            "Certified Linux Systems Administrator.",

          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
