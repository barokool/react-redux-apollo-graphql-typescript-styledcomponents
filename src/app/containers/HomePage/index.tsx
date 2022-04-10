import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw` bg-red-300`}
`;

export const HomePage = () => {
  return (
    <PageContainer>
      <h1>Hello world</h1>
    </PageContainer>
  );
};
