import React from "react";
import Layout from "@components/Layout";

import Cover from "@sections/Cover";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";

function Home() {
  return (
    <Layout>
      <Cover />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default Home;
