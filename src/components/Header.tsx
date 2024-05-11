"use client";

import { largerThan, smallerThan } from "@/util/mediaQueries";
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

const AddressBlock = styled(Block)`
  ${smallerThan.mobile`
    display: none;
  `}
`;

const TimesBlock = styled(Block)`
  justify-content: flex-end;
  ${smallerThan.mobile`
    justify-content: center;
  `}
`;

const ActiveTimesBanner = (props: { time: number }) => {
  return (
    <ActiveTimesBannerWrapper className="open">
      😊 We`re opening soon!
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
      <AddressBlock>323 CALEDONIAN ROAD, LONDON N1 1DR</AddressBlock>
      <TimesBlock>
        {/**7AM - 5PM */}
        <ActiveTimesBanner time={new Date().getHours()} />
      </TimesBlock>
    </Wrapper>
  );
};

export default Header;
