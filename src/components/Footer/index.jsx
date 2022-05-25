import React from "react";

function Footer() {
  return (
    <footer>
      <span>
        made by{" "}
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href="https://github.com/czechaj"
        >
          {" "}
          czechaj{" "}
        </a>
      </span>
    </footer>
  );
}

export default React.memo(Footer);
