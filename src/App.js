import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainers } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import { HeroContainer } from "./containers/hero";

export default function App() {
  return (
    <>
      <HeroContainer />
      <JumbotronContainer />
      <FaqsContainers />
      <FooterContainer />
    </>
  );
}
