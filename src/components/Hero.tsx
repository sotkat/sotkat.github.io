"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10rem;
  position: relative;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Image alt="image" src="/images/drawing-1.svg" width={400} height={80} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
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
      </div>
      <Image alt="image" src="/images/drawing-2.svg" width={100} height={70} />
    </Wrapper>
  );
};

export default Hero;
