import { smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  ${smallerThan.mobile`
    padding: 3rem 1rem;
    gap: 3rem;
    flex-direction: column;
  `}
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 3rem;

  ${smallerThan.mobile`
   font-size: 3rem;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 5rem;
  font-size: 2rem;

  ${smallerThan.mobile`
   flex-direction: column;
   font-size: 1.3rem;
   gap: 2rem;
  `}
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 2rem;
`;

const EndNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact>
        <Title className="font-secondary">
          Good things are brewing... always.
        </Title>
        <TextWrapper>
          <a href="https://www.instagram.com/sotocoffeen1/" target="_blank">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@sotocoffeen1" target="_blank">
            TikTok
          </a>
        </TextWrapper>
      </Contact>
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        <EndNote>
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
        </EndNote>
      </div>
    </Wrapper>
  );
};

export default Footer;
