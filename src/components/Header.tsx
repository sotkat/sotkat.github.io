"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Block = styled.div`
  flex: 1;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActiveTimesBannerWrapper = styled.div`
  padding: 0.4rem;
  border-radius: 0.4rem;

  &.open {
    background-color: #def0ab;
    color: #46900b;
  }

  &.closed {
    background-color: #d6d6d6;
    color: #db4745;
  }
`;

const ActiveTimesBanner = (props: { time: number }) => {
  if (props.time < 7 || props.time > 17) {
    return (
      <ActiveTimesBannerWrapper className="closed">
        👋 we’re not open! See you tmw!
      </ActiveTimesBannerWrapper>
    );
  }
  return (
    <ActiveTimesBannerWrapper className="open">
      😊 we’re open!
    </ActiveTimesBannerWrapper>
  );
};

const Header = () => {
  return (
    <Wrapper>
      <Block>323 CALEDONIAN ROAD, LONDON N1 1DR</Block>
      <Block style={{ justifyContent: "flex-end" }}>
        7AM - 5PM <ActiveTimesBanner time={new Date().getHours()} />
      </Block>
    </Wrapper>
  );
};

export default Header;
