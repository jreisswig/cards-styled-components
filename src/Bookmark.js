import styled from "styled-components/macro";

const Bookmark = styled.div`
  position: absolute;
  border: 15px solid ${blablub => (blablub.active ? "black" : "lightgrey")};
  border-bottom-color: transparent;
  top: -5px;
  right: 30px;
  width: 0;
`;

export default Bookmark;
