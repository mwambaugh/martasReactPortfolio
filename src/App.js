import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Footer from "./componets/Footer";
import Page from "./componets/Page";
import React from "react";
import AboutMe from "./componets/AboutMeCard";
function App() {
  return (
    <div>
      <AboutMe/>
    </div>
  )
}
function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [pageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <DrawerAppBar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <section className="hero">
        <div className="hero-name">
          <p>Marta Wambaugh</p>
        </div>
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;