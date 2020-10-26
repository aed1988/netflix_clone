import React from "react";

import { Container, Inner, Title, Subtitle } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Subtitle = function HeroSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
