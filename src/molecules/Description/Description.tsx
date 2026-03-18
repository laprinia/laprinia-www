import styled from "styled-components";

const DescriptionContainer = styled.section`
  flex: 0 1 auto;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;

  p {
    @media (min-width: 1800px) {
      font-size: var(--font-size-base-xl);
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const Description = ({ content }: { content: string }) => {
  return (
    <DescriptionContainer aria-labelledby="description">
      <p>{content}</p>
    </DescriptionContainer>
  );
};

export default Description;
