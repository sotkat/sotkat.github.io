import { smallerThan } from "@/util/mediaQueries";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem;
  margin: 2rem;
  background-color: #fcfbf6;

  ${smallerThan.mobile`
    margin: 0.3rem;
  `}
`;

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const Layout = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Layout;
