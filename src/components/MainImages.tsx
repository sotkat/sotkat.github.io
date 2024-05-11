import { smallerThan } from "@/util/mediaQueries";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${smallerThan.mobile`
    img {
      height: 10rem !important;
      width: 10rem !important;
    }
  `}
`;

const MainImages = () => {
  return (
    <Wrapper>
      <Image
        alt="image"
        src="/images/main-image-2.png"
        width={0}
        height={0}
        style={{ width: "25rem", height: "30rem" }}
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
      />
      <Image
        alt="image"
        src="/images/main-image-1.png"
        width={0}
        height={0}
        style={{ width: "25rem", height: "30rem" }}
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
      />
      <Image
        alt="image"
        src="/images/main-image-3.png"
        width={0}
        height={0}
        style={{ width: "25rem", height: "30rem" }}
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
      />
      <Image
        alt="image"
        src="/images/main-image-4.png"
        width={0}
        height={0}
        style={{ width: "25rem", height: "30rem" }}
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
      />
    </Wrapper>
  );
};

export default MainImages;
