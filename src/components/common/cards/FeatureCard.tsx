"use client";

import React from "react";

interface FeatureCardProps {
  variant: "svg" | "text";
  svg?: React.ReactElement;
  text?: string;
  bottomText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  variant,
  svg,
  text,
  bottomText,
}) => {
  return (
    <div
      className={`min-w-[190px] min-h-[115px] bg-white border-2 border-gray-300 rounded-xl p-4 flex flex-col  items-center ${
        variant === "svg" ? "justify-between gap-2" : "justify-evenly"
      }`}
    >
      <div className="flex items-center justify-center h-full">
        {variant === "svg" ? (
          <div>{svg}</div>
        ) : (
          <div className="h-3/4">
            <span className="font-bold text-[20px]">{text}</span>
          </div>
        )}
      </div>
      <div className="text-gray-900 font-medium text-lg">{bottomText}</div>
    </div>
  );
};

export default FeatureCard;
