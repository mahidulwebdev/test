import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <section className=" container mx-auto">{children}</section>;
};

export default Container;
