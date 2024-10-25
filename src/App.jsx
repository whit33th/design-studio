import Advantages from "./pages/Advantages/Advantages";
import Business from "./pages/Business/Business";
import Partners from "./pages/Partners/Partners";
import Services from "./pages/Services/Services";
import Start from "./pages/Start/Start";
import Comments from "./pages/Comments/Comments";
import Header from "./components/containers/Header/Header";
import Project from "./pages/Project/Project";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/containers/Footer/Footer";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <section id="start">
          <Start />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="advantages">
          <Advantages />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="business">
          <Business />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="comments">
          <Comments />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
