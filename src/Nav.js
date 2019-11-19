import React from "react";
import styled from "styled-components/macro";

const NavStyles = styled.nav`
  display: grid;
  grid-auto-flow: column;
`;

const NavButton = styled.button`
  border: none;
`;

export default function Nav({ items }) {
  return (
    <NavStyles>
      {items.map(item => (
        <NavButton key={item}>{item}</NavButton>
      ))}
    </NavStyles>
  );
}
