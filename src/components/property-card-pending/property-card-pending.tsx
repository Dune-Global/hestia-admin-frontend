import { Properties } from "@/data/properties";
import Image from "next/image";
import React from "react";
import { Button } from "../common/buttons";

type Props = {};

const PendingPropertyCard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Properties.map((properties) => (
        <div className="p-4 flex flex-col gap-1 border border-gray-400 rounded-lg" key={properties.id}>
          <div>
            <Image
              src={properties.image}
              alt={properties.name}
              width={600}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="text-lg pt-2 font-medium">{properties.name}</div>
          <div className="text-gray-500">{properties.location}</div>
          <div className="flex text-sm md:text-xs lg:text-sm gap-1 pb-2 text-gray-500 flex-1">
            <div>{properties.bedrooms} bedroom</div>
            <div>-</div>
            <div>{properties.beds} beds</div>
            <div>-</div>
            <div>{properties.bathrooms} bathroom</div>
          </div>
          <div className="flex gap-3">
            <div>
                <Button variant="fillBlack" size="sm">Edit</Button>
            </div>
            <div>
                <Button variant="outline" size="sm">Delete</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingPropertyCard;
