import React from "react";

import { Button, Menu } from "semantic-ui-react";
const Footer = () => {
  return (
    <Menu>
      <div class="footerBar">
        <Menu.Item>
          <a
            href="https://www.google.com/maps/place/Flatiron+School/@51.5201233,-0.0897304,17z/data=!3m1!4b1!4m5!3m4!1s0x48761caea9bfffff:0xa3e2d45a025572b0!8m2!3d51.5201233!4d-0.0875417"
            target="_blank"
            rel="noopener noreferrer"
            class="footerLink"
          >
            Find Us Here
          </a>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Footer;
