import React from "react";
import Tags from "./Tags";
import Bookmark from "./Bookmark";
import styled from "styled-components/macro";

const Cards = styled.section`
  position: relative;
  background-color: #f8eeea;

  border-radius: 2px;
  padding: 20px;
  margin-top: 20px;
`;
const CardTitle = styled.h2``;
const CardBody = styled.div``;
const CardQuestion = styled.h4``;
const Answer = styled.p``;

export default function Card({
  title,
  question,
  answer,
  tags = [],
  bookmarked,
  toggleBookmarked
}) {
  return (
    <Cards>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <CardQuestion>{question}</CardQuestion>
        <Answer>{answer}</Answer>
        <Bookmark active={bookmarked} onClick={toggleBookmarked} />
      </CardBody>
      {tags.map(tag => (
        <Tags key={tag} text={tag} />
      ))}
    </Cards>
  );
}
