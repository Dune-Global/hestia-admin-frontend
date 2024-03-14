import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/buttons/button";
import Container from "@/components/Container";
import { Properties } from "@/data/properties";
import PendingPropertyCard from "@/components/pending-property-card/pending-property-card";

export default function PendingPropertiesPage() {
  return (
    <Container>
      <div className="flex items-center md:items-start justify-center md:justify-between flex-col md:flex-row gap-4 py-16">
        <div className="flex flex-col gap-3">
          <div className="text-2xl md:text-4xl font-bold">
            Pending properties.
          </div>
          <div className="text-xs md:text-sm">
            Check below to see which of your properties are still pending
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Input placeholder="Search properties..." />
          </div>
          <div>
            <Button variant="fillBlack">Search</Button>
          </div>
        </div>
      </div>
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
        {Properties.map((property) => (
          <div key={property.id}>
            <PendingPropertyCard
              id={property.id}
              image={property.image}
              name={property.name}
              location={property.location}
              bedrooms={property.bedrooms}
              beds={property.beds}
              bathrooms={property.bathrooms}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
