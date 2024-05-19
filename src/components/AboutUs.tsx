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
        <Title className="font-secondary">Single-origin Colombian coffee</Title>
        <p>
          A 15 min walk away from King’s Cross Station or a 10 min walk from
          Caledonian Road Station
        </p>
      </Block>
      <Block>
        <p>
          Hola! Welcome to Soto Coffee, your space for authentic Colombian
          coffee right here in London's vibrant Caledonian Road area. As an
          independent, family-owned coffee shop, we pour love and authenticity
          into every cup. Our space is minimal yet cosy keeping the focus on our
          single-origin coffee.
        </p>
        <p>
          Each bean is sourced directly from Colombia—ensuring not just a
          delicious brew, but a connection to our roots. Our doors are open to
          everyone whether you're a coffee aficionado or just in need of a
          comforting sip. Alongside our expertly crafted coffees, we offer a
          selection of non-coffee drinks and fresh pastries. So, pull up a chair
          and let's share stories over a cup.
        </p>
      </Block>
      <Block>
        {" "}
        <p>
          Our doors are open to everyone, whether you're a coffee aficionado or
          just in need of a comforting sip. We welcome you to explore our
          carefully curated menu, featuring not only expertly crafted coffees
          but also a selection of non-coffee drinks and freshly baked pastries.
          Each item is chosen to complement our coffee offerings and provide a
          delightful experience for every palate.
        </p>
        <p>
          At Soto Coffee, we believe in creating a community space where people
          can come together and share moments. Pull up a chair and let's share
          stories over a cup. Whether you're here to catch up with friends,
          enjoy a quiet moment alone, or meet new people, our coffee shop is the
          perfect place to relax and connect. We look forward to welcoming you
          and making you a part of our Soto Coffee family.
        </p>
      </Block>
    </Wrapper>
  );
};

export default AboutUs;
