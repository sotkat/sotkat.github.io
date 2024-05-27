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
        <Title className="font-secondary">
          Single-origin specialty Colombian coffee
        </Title>
        <p>
          Independent coffee shop on London&#39;s Caledonian Road, serving
          authentic Colombian coffee in a simple, welcoming space.
        </p>
      </Block>
      <Block>
        <p>
          Our coffee is sourced directly from Colombia. This means not just
          great taste, but also a true connection to our roots. We support small
          Colombian farms, focusing on quality and sustainability with every cup
          we serve.
        </p>

        <p>
          Along with expertly made coffee, we offer fresh pastries and other
          non-coffee drinks. Whether you&#39;re a coffee aficionado or just in
          need of a comforting place to relax, we&#39;re here for you.
        </p>
      </Block>
      <Block>
        <p>
          Our shop is minimal yet cosy, making the coffee the star of the show.
          Sit down, enjoy a cup, and maybe share a story or two. We&#39;re open
          to everyone who&#39;s looking for a great cup of coffee and a quiet
          spot to pause.
        </p>

        <p>
          Stop by Soto Coffee for your daily brew or a quick pastry to go. We
          promise a warm welcome and a great cup of coffee every time you visit.
          We&#39;re excited to become a part of your daily routine and look
          forward to seeing you soon.
        </p>
      </Block>
    </Wrapper>
  );
};

export default AboutUs;
