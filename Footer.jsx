import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ Laptop-{currYear}</p>
    </footer>
  );
}

export default Footer;
