import { Properties } from "@/data/properties";
import Image from "next/image";
import React from "react";
import { Button } from "../common/buttons";

interface PendingPropertyCardProps {
  id: number;
  image: any;
  name: string;
  location: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

const PendingPropertyCard: React.FC<PendingPropertyCardProps> = ({id, image, name, location, bedrooms, beds, bathrooms}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Properties.map((properties) => (
        <div
          className="p-4 flex flex-col gap-1 border border-hgray-400 rounded-lg"
          key={id}
        >
          <div>
            <Image
              src={image}
              alt={name}
              width={600}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="text-lg pt-2 font-medium">{name}</div>
          <div className="text-hgray-500">{location}</div>
          <div className="flex text-sm md:text-xs lg:text-sm gap-1 pb-2 text-hgray-500 flex-1">
            <div>{bedrooms} bedroom</div>
            <div>-</div>
            <div>{beds} beds</div>
            <div>-</div>
            <div>{bathrooms} bathroom</div>
          </div>
          <div className="flex gap-3">
            <div>
              <Button variant="fillBlack" size="sm">
                Edit
              </Button>
            </div>
            <div>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingPropertyCard;
