"use client";

import FeatureCard from "@/components/common/cards/FeatureCard";
import React from "react";
import { PoolIcon, ApartmentIcon } from "public/assets/icons";
import Container from "@/components/Container";

const AddProperty = () => {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col h-[100vh]">
        <div>
          <FeatureCard
            variant="text"
            bottomText="Pool"
            svg={<ApartmentIcon />}
            text="LKR20,000"
          />
        </div>
      </div>
    </Container>
  );
};

export default AddProperty;
