"use client";

import FeatureCard from "@/components/common/cards/FeatureCard";
import React from "react";
import Container from "@/components/Container";
import LongCard from "@/components/common/cards/LongCard";
import accomodationTypeData from "@/data/add-property/accomodationMethod";
import buildingTypeData from "@/data/add-property/buildingType";

const AddProperty = () => {
  const questionStyles = "font-bold text-[24px] leading-[32px]";

  return (
    <Container>
      {/* Title */}
      <div className="mt-20 flex flex-col gap-3">
        <h1 className="font-bold text-[44px] leading-[52px]">
          Add new property
        </h1>
        <h2 className="text-[14px] leading-[20px]">
          Fill in the details below to add a new property listing
        </h2>
      </div>

      {/* Building Type */}
      <div className="mt-20 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>
          Which of these best describes your place?
        </h3>
        <div className="flex gap-5">
          {buildingTypeData.map((card) => (
            <FeatureCard
              key={card.id}
              variant="svg"
              bottomText={card.bottomText}
              svg={card.svg}
              clickable={card.clickable}
            />
          ))}
        </div>
      </div>

      {/* Accomodation method */}
      <div className="mt-16 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>
          What type of place will guests have?
        </h3>
        <div className="flex flex-col gap-6">
          {accomodationTypeData.map((card) => (
            <LongCard
              key={card.id}
              text={card.text}
              bottomText={card.bottomText}
              svg={card.svg}
            />
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>Where's your place located?</h3>
        <div className="flex gap-6">
          <div className="rounded-xl w-[50%] min-w-[50%] min-h-[750px] bg-gray-400"></div>
          <div>
            <textarea name="" id="" cols={30} rows={10}>
              seadkfjdl
            </textarea>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddProperty;
