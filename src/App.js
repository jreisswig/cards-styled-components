import React, { useState } from "react";
import Header from "./Header.js";
import styled from "styled-components";
import Card from "./Card.js";
import Grid from "./Grid.js";
import Nav from "./Nav.js";
import GlobalStyles from "./GlobalStyles";

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`;

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
`;

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "Foo1",
      question: "answer1?",
      answer: "answer1!",
      tags: ["javascript", "basics"],
      bookmarked: true
    },
    {
      title: "Foo2",
      question: "answer2?",
      answer: "answer2!",
      tags: ["php", "pro"],
      bookmarked: false
    },
    {
      title: "Foo3",
      question: "answer3?",
      answer: "answer3!",
      tags: ["css", "basics"],
      bookmarked: true
    }
  ]);
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <Grid>
          <Header />
          <CardContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                question={card.question}
                answer={card.answer}
                tags={card.tags}
                bookmarked={card.bookmarked}
                toggleBookmarked={() => toggleBookmarked(index)}
              />
            ))}
          </CardContainer>
          <Nav items={["Cards", "New Cards", "Profil", "Settings"]} />
        </Grid>
      </AppContainer>
    </div>
  );

  function toggleBookmarked(index) {
    const card = cards[index];
    setCards([
      ...cards.slice(0, index),
      { ...card, bookmarked: !card.bookmarked },
      ...cards.slice(index + 1)
    ]);
    console.log(cards);
  }
}
