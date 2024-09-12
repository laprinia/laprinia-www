import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  width: 100%;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  color: var(--background-color);

  @media (max-width: 1023px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  .first {
    grid-column: 2;
    text-align: left;
    justify-self: start;
  }

  .second {
    grid-column: 1;
    text-align: left;
    justify-self: end;
  }

  .third {
    grid-column: 2;
    grid-row: 3;
    text-align: left;
    justify-self: start;
  }
`;

const BisectorText = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <Container>
      <p className="first">{paragraphs[0]}</p>
      <p className="second">{paragraphs[1]}</p>
      <p className="third">{paragraphs[2]}</p>
    </Container>
  );
};

export default BisectorText;
