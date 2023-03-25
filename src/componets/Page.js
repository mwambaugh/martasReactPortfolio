import React from "react";
import AboutMeCard from "../componets/AboutMeCard";
import Portfolio from "../componets/Project";
import ContactCard from "../componets/ContactCard";
import Resume from "../componets/Resume";

function Page({ currentPage }) {
  const pageRender = () => {
    switch (currentPage.name) {
      case "About":
        return <AboutMeCard />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactCard />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMeCard />;
    }
  };

  return (
    <div>{pageRender(currentPage)}</div>
  );
}

export default Page;