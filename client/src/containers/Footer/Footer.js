import React from "react";
import { DuetFooter } from "@duetds/react";

const Footer = () => {
  const menuData = [
    { label: "Turvallisuus ja käyttöehdot", href: "#" },
    { label: "Evästeet", href: "#" },
    { label: "Henkilötietojen käsittely", href: "#" }
  ];

  return <DuetFooter menu={menuData}></DuetFooter>;
};

export default Footer;
