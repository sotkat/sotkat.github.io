import { smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
  padding: 15rem 5rem;

  ${smallerThan.mobile`
    padding: 5rem 1rem;
    flex-direction: column;
    gap: 1rem;
  `}
`;

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${smallerThan.mobile`
    p {
      font-size: 1rem;
    }
  `}

  p {
    line-height: 1.7rem;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 3rem;
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <Block>
        <Image
          alt="soto coffee logo"
          src="/images/drawing-1.svg"
          width={0}
          height={0}
          style={{ width: "5rem", height: "auto" }}
        />
        <Title className="font-secondary">A coffee place like no other</Title>
        <p>This is subtitle and it has to have a minimum of two lines.</p>
      </Block>
      <Block>
        <p>
          Indulge your senses in our carefully curated selection of
          single-origin beans, sourced directly from the lush coffee regions of
          Colombia. Each cup tells a story of tradition, passion, and
          excellence, meticulously crafted to deliver a rich, aromatic journey
          with every sip.
        </p>
        <p>
          Indulge your senses in our carefully curated selection of
          single-origin beans, sourced directly from the lush coffee regions of
          Colombia. Each cup tells a story of tradition, passion, and
          excellence, meticulously crafted to deliver a rich, aromatic journey
          with every sip.
        </p>
      </Block>
      <Block>
        {" "}
        <p>
          Indulge your senses in our carefully curated selection of
          single-origin beans, sourced directly from the lush coffee regions of
          Colombia. Each cup tells a story of tradition, passion, and
          excellence, meticulously crafted to deliver a rich, aromatic journey
          with every sip.
        </p>
        <p>
          Indulge your senses in our carefully curated selection of
          single-origin beans, sourced directly from the lush coffee regions of
          Colombia. Each cup tells a story of tradition, passion, and
          excellence, meticulously crafted to deliver a rich, aromatic journey
          with every sip.
        </p>
      </Block>
    </Wrapper>
  );
};

export default AboutUs;
