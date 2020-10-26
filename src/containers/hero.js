import React from "react";
import { Hero } from "../components";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.Title>
        100% entertainment.
        <br />
        Pay for 1 month, get 1 month free.
      </Hero.Title>
      <Hero.Subtitle>Watch anywhere. Cancel at any time.</Hero.Subtitle>
    </Hero>
  );
}
