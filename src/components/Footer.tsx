import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 3rem;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 5rem;
  font-size: 2rem;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 2rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact>
        <Title className="font-secondary">Let`s talk coffee</Title>
        <TextWrapper>
          <a href="https://www.instagram.com/sotocoffeen1/" target="_blank">
            @sotocoffeeen1 (Instagram)
          </a>
          <a href="https://www.tiktok.com/@sotocoffeen1" target="_blank">
            @sotocoffeeen1 (TikTok)
          </a>
        </TextWrapper>
      </Contact>
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        <Image
          alt="soto coffee logo"
          src="/images/soto-coffee-logo.svg"
          width={0}
          height={0}
          style={{ width: "6rem", height: "100%" }}
        />
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <p>
            Made with love by{" "}
            <a href="https://linktr.ee/xaviermod" target="_blank">
              mod
            </a>
            . © 2024 Soto Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
