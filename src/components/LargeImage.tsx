import { smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50rem;
  position: relative;

  ${smallerThan.mobile`
    height: 20rem;
  `}
`;

const LargeImage = () => {
  return (
    <Wrapper>
      <Image
        alt="image"
        src="/images/coffee-shop-full.jpg"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </Wrapper>
  );
};

export default LargeImage;
