import React from "react";
import { TakeLookServiceConsumer } from "../takelook-service-context";

const withTakeLookService = Wrapped => {
  return props => {
    return (
      <TakeLookServiceConsumer>
        {takelookService => {
          return <Wrapped {...props} takelookService={takelookService} />;
        }}
      </TakeLookServiceConsumer>
    );
  };
};

export default withTakeLookService;