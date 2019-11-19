import React from "react";
import styled from "styled-components/macro";

const Head = styled.header`
  border-bottom: 2px solid #f8eeea;
`;

const Headline = styled.h1`
  font-size: 20px;
`;

export default function Header() {
  return (
    <Head>
      <Headline>My App</Headline>
    </Head>
  );
}
