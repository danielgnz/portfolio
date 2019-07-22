import React from "react"

import { Container, Title, Description } from "./about-me.styles"

export const AboutMe = () => {
  return (
    <Container id="about">
      <Title>About Me</Title>

      <Description>
        <p>
          I’m a self-taught Full Stack Developer who works extremely hard in
          order to make things happen. I consider myself a high-performance
          individual because I’m able to work 100-120 hours a week and I have
          developed a mindset which allows me to think big and believe in making
          the impossible possible.
        </p>
        <p>
          In the last 2 months I have spent almost 1000 hours improving my
          skills, finishing 4 advanced programming courses, and working on over
          5 projects.{" "}
        </p>
        <p>
          I’m a strong believer that everyone should have a mentor or a role
          model and learn from their mistakes. For that reason, I’m a big fan of
          Elon Musk, Dan Pena, Grant Cardone and Jack Ma.
        </p>
      </Description>
    </Container>
  )
}

export default AboutMe
