"use client";

import { largerThan, smallerThan } from "@/util/mediaQueries";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Block = styled.div`
  flex: 1;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActiveTimesBannerWrapper = styled.div`
  padding: 0.6rem;
  border-radius: 0.4rem;
  width: 100%;
  text-align: center;

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  &.open {
    background-color: #def0ab;
    color: #46900b;
  }

  &.closed {
    background-color: #d6d6d6;
    color: #db4745;
  }

  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  p {
    display: inline-block;
    padding-left: 100%;
    animation: move 25s linear infinite;
  }
`;

const ActiveTimesBanner = (props: { time: number }) => {
  return (
    <ActiveTimesBannerWrapper className="open">
      <p>Opening soon!</p>
    </ActiveTimesBannerWrapper>
  );

  // if (props.time < 7 || props.time > 17) {
  //   return (
  //     <ActiveTimesBannerWrapper className="closed">
  //       👋 we’re not open! See you tmw!
  //     </ActiveTimesBannerWrapper>
  //   );
  // }
  // return (
  //   <ActiveTimesBannerWrapper className="open">
  //     😊 we’re open!
  //   </ActiveTimesBannerWrapper>
  // );
};

const Header = () => {
  return (
    <Wrapper>
      <ActiveTimesBanner time={new Date().getHours()} />
    </Wrapper>
  );
};

export default Header;
