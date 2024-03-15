import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/buttons/button";
import Container from "@/components/Container";
import { Properties } from "@/data/properties";
import PendingPropertyCard from "@/components/pending-property-card/pending-property-card";
import PageHeader from "@/components/common/layout/PageHeader";

export default function PendingPropertiesPage() {
  return (
    <Container>
      <PageHeader title="Pending Properties"/>
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
