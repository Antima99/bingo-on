import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="about">
      {/* Meta tags for SEO /} */}
      <Helmet>
        <title>Bingo Game Rules - About Bingo</title>
        <meta
          name="description"
          content="Learn Bingo game rules and how to play. Understand patterns, gameplay, and tips for winning Bingo!"
        />
      </Helmet>

      {/ Updated heading /}
      <h1>Bingo Game Rules</h1>

      {/ Updated ALT tag /}
      <img
        className="image"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bingo-game-design-template-fedc211c3a63ca4441d557dbab794eea_screen.jpg?ts=1673688329"
        alt="Bingo Game Rules"
      />

      {/* {/ Minor update to body content */}
      <p>
        Bingo is a simple yet engaging game that revolves around matching
        numbers on a card with numbers called out randomly. Players aim to
        complete a specific pattern (such as a row, column, or diagonal) to win.
        The excitement builds as players inch closer to completing their cards.
      </p>

      <p>
        Bingo is more than just a game; it’s about fun, excitement, and building
        a sense of community. Whether you’re a casual player or an enthusiast,
        Bingo offers something for everyone.
      </p>
    </div>
  );
}

export default About;
