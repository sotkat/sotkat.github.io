"use client";
import { largerThan, smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center; /* Center both horizontally and vertically */
  flex-direction: column;
  gap: 10rem;
  position: relative;
  text-align: center;
  margin-bottom: 5rem;

  ${smallerThan.mobile`
    height: 100%;
    gap: 3rem;
    padding: 5rem 0;
    margin-bottom: 0;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > * {
    max-width: 100%; /* Ensure images don't overflow container */
  }

  p {
    line-height: 1.8rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Image alt="image" src="/images/drawing-1.svg" width={400} height={80} />
      <ImageContainer>
        <Image
          alt="soto coffee logo"
          src="/images/soto-coffee-logo.svg"
          width={400}
          height={80}
        />
        <p>
          Single-origin Colombian coffee at the heart of{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Soto%20Coffee%20323%20Caledonian%20Rd%2C%20London%20N1%201DR"
            target="_blank"
          >
            London’s Caledonian Road
          </a>
          .
        </p>
      </ImageContainer>
      <Image alt="image" src="/images/drawing-2.svg" width={100} height={70} />
    </Wrapper>
  );
};

export default Hero;
