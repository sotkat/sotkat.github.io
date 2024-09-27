import { smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 700px;
  margin: auto;
  padding-bottom: 10rem;

  ${smallerThan.mobile`
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 3rem;

    h1 {
        line-height: 1.7rem;
    }

    img {
        width: 100%;

    }
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    span {
      background: black;
      color: white;
      padding: 0.2rem;
      font-weight: 500;
      border-radius: 0.5rem;
      padding: 0.5rem;
    }
  }

  p {
    line-height: 2rem;
  }
`;

const SellCoffee = () => {
  return (
    <Wrapper>
      <Image
        alt="image"
        src="/images/beans.jpg"
        width={300}
        height={300}
        style={{ objectFit: "cover" }}
      />
      <TextWrapper>
        <h1>
          <span>new!</span>Now selling our coffee beans!
        </h1>
        <p>
          Been loving our coffee lately? We are now selling our signature
          single-origin Colombian beans in store. You can now brew Soto at home!
        </p>
      </TextWrapper>
    </Wrapper>
  );
};

export default SellCoffee;
