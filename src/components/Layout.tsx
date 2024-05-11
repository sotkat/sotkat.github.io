import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem;
`;

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const Layout = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Layout;
