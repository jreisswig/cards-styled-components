import styled from "styled-components/macro";
import React from "react";

const Tag = styled.span`
  background-color: #ff6a2f52;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;

export default function Tags({ text }) {
  return <Tag>{text}</Tag>;
}
